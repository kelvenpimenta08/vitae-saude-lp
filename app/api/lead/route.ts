import { NextResponse } from 'next/server';

const allowedFields = [
  'name', 'phone', 'city', 'people', 'reason', 'timing', 'recommendation',
  'origin', 'source', 'google_campaign', 'ad_group', 'keyword', 'landing_url',
  'captured_at', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term',
  'utm_content', 'gclid',
] as const;

type Lead = Record<(typeof allowedFields)[number], string>;

const responseHeaders = { 'Cache-Control': 'no-store' };

function json(body: Record<string, unknown>, status = 200) {
  return NextResponse.json(body, { status, headers: responseHeaders });
}

function sameOrigin(request: Request) {
  const origin = request.headers.get('origin');
  if (!origin) return true;
  const host = request.headers.get('x-forwarded-host') ?? request.headers.get('host');
  if (!host) return false;
  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

function cleanPhone(value: string) {
  const digits = value.replace(/\D/g, '').slice(-13);
  if (digits.startsWith('55') && (digits.length === 12 || digits.length === 13)) return `+${digits}`;
  if (digits.length === 10 || digits.length === 11) return `+55${digits}`;
  return '';
}

function leadNote(lead: Lead) {
  return [
    'Novo contato pelo site da Vitae',
    `Nome: ${lead.name}`,
    `WhatsApp: ${lead.phone}`,
    `Cidade: ${lead.city || 'Não informado'}`,
    `Pessoas: ${lead.people || 'Não informado'}`,
    `Motivo: ${lead.reason || 'Não informado'}`,
    `Momento: ${lead.timing || 'Não informado'}`,
    `Orientação do site: ${lead.recommendation || 'Não informada'}`,
    `Origem: ${lead.source || lead.origin || 'Site'}`,
    `Campanha: ${lead.utm_campaign || lead.google_campaign || 'Não informada'}`,
    `Grupo/conteúdo: ${lead.utm_content || lead.ad_group || 'Não informado'}`,
    `Termo: ${lead.utm_term || lead.keyword || 'Não informado'}`,
    `Página: ${lead.landing_url || 'Não informada'}`,
    `Recebido em: ${lead.captured_at || new Date().toISOString()}`,
  ].join('\n');
}

async function sendToKommo(lead: Lead) {
  const subdomain = process.env.KOMMO_SUBDOMAIN?.trim();
  const accessToken = process.env.KOMMO_ACCESS_TOKEN?.trim();
  if (!subdomain || !accessToken) return false;
  if (!/^[a-z0-9-]+$/i.test(subdomain)) throw new Error('invalid_kommo_subdomain');

  const pipelineId = Number(process.env.KOMMO_PIPELINE_ID);
  const statusId = Number(process.env.KOMMO_STATUS_ID);
  const leadPayload: Record<string, unknown> = {
    name: `Site Vitae — ${lead.name}`,
    request_id: `vitae-${crypto.randomUUID()}`,
    _embedded: {
      contacts: [{
        name: lead.name,
        custom_fields_values: [{
          field_code: 'PHONE',
          values: [{ value: lead.phone, enum_code: 'MOB' }],
        }],
      }],
      tags: [{ name: 'Site Vitae' }],
    },
  };
  if (Number.isInteger(pipelineId) && pipelineId > 0) leadPayload.pipeline_id = pipelineId;
  if (Number.isInteger(statusId) && statusId > 0) leadPayload.status_id = statusId;

  const headers = {
    Accept: 'application/hal+json',
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
  };
  const baseUrl = `https://${subdomain}.kommo.com/api/v4`;
  const createResponse = await fetch(`${baseUrl}/leads/complex`, {
    method: 'POST',
    headers,
    body: JSON.stringify([leadPayload]),
    signal: AbortSignal.timeout(8_000),
    cache: 'no-store',
  });
  if (!createResponse.ok) throw new Error(`kommo_create_${createResponse.status}`);

  const created = await createResponse.json() as Array<{ id?: number }>;
  const leadId = created[0]?.id;
  if (!leadId) throw new Error('kommo_missing_lead_id');

  const noteResponse = await fetch(`${baseUrl}/leads/notes`, {
    method: 'POST',
    headers,
    body: JSON.stringify([{ entity_id: leadId, note_type: 'common', params: { text: leadNote(lead) } }]),
    signal: AbortSignal.timeout(8_000),
    cache: 'no-store',
  });
  if (!noteResponse.ok) throw new Error(`kommo_note_${noteResponse.status}`);
  return true;
}

async function sendToBridgeWebhook(lead: Lead) {
  const webhook = process.env.KOMMO_WEBHOOK_URL?.trim();
  if (!webhook) return false;
  const response = await fetch(webhook, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(lead),
    signal: AbortSignal.timeout(8_000),
    cache: 'no-store',
  });
  if (!response.ok) throw new Error(`webhook_${response.status}`);
  return true;
}

export async function POST(request: Request) {
  if (!sameOrigin(request)) return json({ error: 'forbidden_origin' }, 403);
  if (!request.headers.get('content-type')?.toLowerCase().startsWith('application/json')) {
    return json({ error: 'unsupported_content_type' }, 415);
  }

  const body = await request.text();
  if (!body || body.length > 16_000) return json({ error: 'invalid_payload' }, 400);
  let raw: Record<string, unknown>;
  try {
    raw = JSON.parse(body) as Record<string, unknown>;
  } catch {
    return json({ error: 'invalid_payload' }, 400);
  }
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return json({ error: 'invalid_payload' }, 400);
  if (typeof raw.website === 'string' && raw.website.trim()) return json({ accepted: true, forwarded: false });

  const lead = Object.fromEntries(allowedFields.map((key) => [
    key,
    typeof raw[key] === 'string' ? raw[key].trim().slice(0, 600) : '',
  ])) as Lead;
  lead.phone = cleanPhone(lead.phone);
  if (lead.name.length < 2 || !lead.phone) return json({ error: 'missing_contact' }, 400);

  try {
    const forwarded = await sendToKommo(lead) || await sendToBridgeWebhook(lead);
    return json({ accepted: true, forwarded, integration: forwarded ? 'kommo' : 'pending_configuration' });
  } catch {
    console.error('[lead] CRM forwarding failed');
    return json({ accepted: true, forwarded: false, integration: 'temporarily_unavailable' }, 202);
  }
}
