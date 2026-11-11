import { NextResponse } from 'next/server';
const allowedFields = ['name', 'phone', 'city', 'people', 'reason', 'timing', 'recommendation', 'origin', 'source', 'google_campaign', 'ad_group', 'keyword', 'landing_url', 'captured_at', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid'];
export async function POST(request: Request) {
  const raw = await request.json().catch(() => null);
  if (!raw || typeof raw !== 'object') return NextResponse.json({ error: 'invalid_payload' }, { status: 400 });
  const lead = Object.fromEntries(allowedFields.map((key) => [key, typeof raw[key] === 'string' ? raw[key].slice(0, 600) : '']));
  if (!lead.name || !lead.phone) return NextResponse.json({ error: 'missing_contact' }, { status: 400 });
  const webhook = process.env.KOMMO_WEBHOOK_URL;
  if (!webhook) return NextResponse.json({ accepted: true, forwarded: false });
  const response = await fetch(webhook, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(lead) });
  if (!response.ok) return NextResponse.json({ accepted: true, forwarded: false }, { status: 202 });
  return NextResponse.json({ accepted: true, forwarded: true });
}
