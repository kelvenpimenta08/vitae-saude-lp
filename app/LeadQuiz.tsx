'use client';

import { FormEvent, useMemo, useState } from 'react';

type Answers = { city: string; people: string; reason: string; timing: string };
const questions = [
  { key: 'city', title: 'Onde você mora?', options: ['Volta Redonda', 'Barra Mansa', 'Outra cidade'] },
  { key: 'people', title: 'Para quantas pessoas você procura uma opção de saúde?', options: ['Só para mim', '2 pessoas', '3 ou 4 pessoas', '5 ou mais pessoas'] },
  { key: 'reason', title: 'O que fez você procurar uma solução agora?', options: ['Quero ter acesso a consultas quando precisar', 'Estou precisando de médico/especialista', 'Estou precisando fazer exames', 'Quero uma opção para minha família', 'Quero depender menos do SUS', 'Estou apenas pesquisando'] },
  { key: 'timing', title: 'Quando você gostaria de resolver isso?', options: ['Hoje / o quanto antes', 'Nesta semana', 'Nos próximos 15 dias', 'Estou pesquisando sem pressa'] },
] as const;
const trackingKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid'] as const;

function getTracking() {
  const values: Record<string, string> = {};
  trackingKeys.forEach((key) => { values[key] = window.localStorage.getItem(`vitae_${key}`) ?? new URLSearchParams(window.location.search).get(key) ?? ''; });
  return values;
}

export default function LeadQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<Answers>>({});
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const suggestion = useMemo(() => answers.people === 'Só para mim' ? { title: 'O Plano Individual pode fazer sentido para você.', price: 'R$99,90/mês' } : { title: 'Para sua família, vale conhecer o Plano Familiar.', price: 'R$209,90/mês' }, [answers.people]);

  const select = (key: keyof Answers, option: string) => { setAnswers((current) => ({ ...current, [key]: option })); setStep((current) => current + 1); };
  const submit = async (event: FormEvent) => {
    event.preventDefault();
    const digits = phone.replace(/\D/g, '');
    if (name.trim().length < 2 || digits.length < 10) { setError('Preencha seu nome e um WhatsApp válido para continuar.'); return; }
    setSending(true); setError('');
    const tracking = getTracking();
    const payload = {
      name: name.trim(),
      phone: digits,
      ...answers,
      recommendation: suggestion.title,
      origin: 'Google',
      source: tracking.utm_source || 'Google',
      google_campaign: tracking.utm_campaign,
      ad_group: tracking.utm_content,
      keyword: tracking.utm_term,
      landing_url: window.location.href,
      captured_at: new Date().toISOString(),
      ...tracking,
    };
    try {
      await fetch('/api/lead', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload), keepalive: true });
      const root = window as Window & { dataLayer?: Record<string, unknown>[] };
      root.dataLayer = root.dataLayer ?? [];
      root.dataLayer.push({ event: 'vitae_lead', origem: 'Google', cidade: answers.city, pessoas: answers.people, motivo: answers.reason, timing: answers.timing, campanha: tracking.utm_campaign, grupo_anuncios: tracking.utm_content, palavra_chave: tracking.utm_term, ...tracking });
      const message = [`Olá! Meu nome é ${name.trim()} e vim pelo site da Vitae.`, `Cidade: ${answers.city}`, `Pessoas: ${answers.people}`, `Motivo: ${answers.reason}`, `Momento: ${answers.timing}`, `Quero conhecer a opção indicada: ${suggestion.price}.`].join('\n');
      window.location.assign(`https://wa.me/5524998310561?text=${encodeURIComponent(message)}`);
    } catch { setError('Não foi possível concluir agora. Tente novamente ou fale diretamente pelo WhatsApp.'); setSending(false); }
  };
  const question = questions[step];

  return <section id="triagem" className="quiz-section"><div className="quiz-shell">
    <div className="quiz-intro"><p className="kicker kicker-light"><span /> Responda em menos de 1 minuto</p><h2>Qual opção combina com o que você precisa?</h2><p>Quatro respostas rápidas ajudam a equipe a entender seu momento antes da conversa.</p><div className="quiz-privacy">Sem CPF, renda, diagnóstico ou dados médicos sensíveis.</div></div>
    <div className="quiz-card" aria-live="polite"><div className="quiz-progress"><span>Etapa {Math.min(step + 1, 5)} de 5</span><div><i style={{ width: `${((step + 1) / 5) * 100}%` }} /></div></div>
      {question ? <div className="quiz-question"><small>{String(step + 1).padStart(2, '0')}</small><h3>{question.title}</h3><div className="quiz-options">{question.options.map((option) => <button type="button" key={option} onClick={() => select(question.key, option)}><span>{option}</span><b>→</b></button>)}</div>{step > 0 && <button className="quiz-back" type="button" onClick={() => setStep((current) => current - 1)}>← Voltar</button>}</div>
      : <form className="quiz-form" onSubmit={submit}><div className="quiz-result"><small>Orientação inicial</small><h3>{suggestion.title}</h3><strong>{suggestion.price}</strong><p>Essa é uma orientação comercial inicial. A equipe confirma as regras e a melhor opção na conversa.</p></div><label>Seu nome<input name="name" autoComplete="name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Como podemos chamar você?" /></label><label>Seu WhatsApp<input name="phone" inputMode="tel" autoComplete="tel" value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="(24) 99999-9999" /></label>{error && <p className="form-error">{error}</p>}<button className="cta cta-light quiz-submit" type="submit" disabled={sending}><span>{sending ? 'ENVIANDO...' : 'QUERO FALAR COM A VITAE'}</span><span className="arrow">↗</span></button><button className="quiz-back" type="button" onClick={() => setStep(3)}>← Rever respostas</button><p className="consent">Ao continuar, você autoriza o contato da equipe Vitae sobre os planos e benefícios.</p></form>}
    </div>
  </div></section>;
}
