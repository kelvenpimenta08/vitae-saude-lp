import Image from 'next/image';
import LeadQuiz from './LeadQuiz';
import LocationExplorer from './LocationExplorer';
import MotionEnhancer from './MotionEnhancer';
import TrackingBootstrap from './TrackingBootstrap';

const whatsapp = 'https://wa.me/5524998310561?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Vitae%20e%20quero%20conhecer%20os%20planos.';

const specialties = ['Endocrinologia', 'Ginecologia', 'Ortopedia', 'Pediatria', 'Cardiologia', 'Gastroenterologia', 'Psicologia', 'Psiquiatria', 'Reumatologia'];
const facts = [['+7 anos', 'de atuação na região'], ['+4.000', 'famílias atendidas'], ['5', 'clínicas parceiras'], ['+200', 'profissionais credenciados'], ['+35', 'especialidades na rede']];

function Arrow() { return <span aria-hidden="true" className="arrow">↗</span>; }
function Check() { return <span aria-hidden="true" className="check">✓</span>; }
function Brand() { return <a href="#inicio" className="brand" aria-label="Vitae Saúde — início"><Image src="/vitae-logo.png" alt="Vitae Saúde" width={1525} height={959} priority /></a>; }
function CTA({ children, variant = 'primary', source, href = '#triagem' }: { children: React.ReactNode; variant?: 'primary' | 'light' | 'outline'; source: string; href?: string }) {
  const external = href.startsWith('http');
  return <a className={`cta cta-${variant}`} data-cta={source} href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}><span>{children}</span><Arrow /></a>;
}

export default function Home() {
  return (
    <main id="inicio">
      <TrackingBootstrap /><MotionEnhancer />
      <div className="top-note">Atendimento em Volta Redonda e Barra Mansa <span>•</span> Consultas médicas por R$50 para clientes Vitae</div>
      <header className="site-header">
        <Brand />
        <nav aria-label="Navegação principal"><a href="#como-funciona">Como funciona</a><a href="#planos">Planos</a><a href="#rede">Rede</a><a href="#duvidas">Dúvidas</a></nav>
        <CTA variant="outline" source="header">Conhecer os planos</CTA>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="kicker"><span /> Saúde acessível na sua cidade</p>
          <h1 id="hero-title">CUIDE DA SUA SAÚDE SEM DEPENDER SÓ DO <em>SUS</em></h1>
          <p className="hero-lede">Tenha acesso a uma ampla rede de clínicas e profissionais em Volta Redonda e Barra Mansa, com consultas médicas por <strong>R$50 para clientes Vitae.</strong></p>
          <div className="hero-offer"><span>Planos a partir de</span><strong>R$99,90 <small>por mês</small></strong></div>
          <div className="hero-actions"><CTA source="hero">QUERO CONHECER OS PLANOS</CTA><p>Veja em menos de 1 minuto qual opção faz mais sentido para você.</p></div>
          <div className="hero-clarity"><Check /><span>A Vitae é um benefício de saúde. Não é plano hospitalar.</span></div>
        </div>
        <div className="hero-visual" aria-label="Pessoas reais da Vitae">
          <div className="photo photo-main"><Image src="/vitae-pessoa-1.jpg" alt="Profissional da Vitae" fill priority loading="eager" fetchPriority="high" sizes="(max-width: 900px) 90vw, 34vw" /></div>
          <div className="photo photo-small"><Image src="/vitae-pessoa-2-clean.png" alt="Profissional da Vitae em Volta Redonda" fill sizes="(max-width: 900px) 42vw, 16vw" /></div>
          <div className="consult-stamp"><small>clientes Vitae</small><strong><span>R$</span>50</strong><b>por consulta médica</b></div>
          <div className="visual-caption"><span>Volta Redonda</span><span>Barra Mansa</span></div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Números da Vitae">{facts.map(([number, label]) => <div key={label}><strong>{number}</strong><span>{label}</span></div>)}</section>

      <section id="como-funciona" className="how section-shell">
        <div className="section-intro split-intro"><div><p className="kicker"><span /> Sem surpresa na hora de usar</p><h2>Mensalidade e consulta, explicadas do jeito certo.</h2></div><p>A mensalidade mantém seu acesso à rede e aos benefícios. Quando precisar de consulta médica, clientes Vitae pagam R$50 por atendimento.</p></div>
        <ol className="steps">
          <li><span>01</span><div><small>Escolha</small><h3>Seu plano</h3><p>Individual para uma pessoa ou Familiar para até sete pessoas.</p></div></li>
          <li><span>02</span><div><small>Tenha acesso</small><h3>À rede Vitae</h3><p>Clínicas e profissionais parceiros em Volta Redonda e Barra Mansa.</p></div></li>
          <li className="step-highlight"><span>03</span><div><small>Quando precisar</small><h3>Consulte por R$50</h3><p>Consultas médicas por R$50 para clientes Vitae, além das demais condições da rede.</p></div></li>
        </ol>
        <p className="how-note"><strong>Em resumo:</strong> você paga a mensalidade do plano e R$50 por consulta médica quando utilizar.</p>
      </section>

      <section id="planos" className="plans"><div className="section-shell">
        <div className="section-intro plans-head"><p className="kicker kicker-light"><span /> Opções claras</p><h2>Um plano para você.<br />Outro para a família.</h2><p>Os dois dão acesso à rede Vitae e às consultas médicas por R$50 para clientes.</p></div>
        <div className="plan-grid">
          <article className="plan-card"><div className="plan-top"><span>Individual</span><b>01 pessoa</b></div><h3><sup>R$</sup>99<small>,90</small></h3><p className="per-month">por mês</p><p>Para quem busca uma alternativa para cuidar da própria saúde.</p><ul><li><Check />Acesso à rede e aos benefícios</li><li><Check />Consultas médicas por R$50</li><li><Check />Condições em exames conforme parceiro</li></ul><CTA variant="light" source="plano-individual">QUERO CONHECER</CTA></article>
          <article className="plan-card featured"><div className="plan-top"><span>Familiar</span><b>Até 7 pessoas</b></div><h3><sup>R$</sup>209<small>,90</small></h3><p className="per-month">por mês</p><p>Para quem quer cuidar de si e da família em uma única opção.</p><ul><li><Check />Titular e dependentes conforme as regras</li><li><Check />Consultas médicas por R$50</li><li><Check />Condições em exames conforme parceiro</li></ul><CTA variant="light" source="plano-familiar">QUERO CONHECER</CTA></article>
        </div>
        <p className="plan-disclaimer">A Vitae é uma assinatura de benefícios em saúde. A mensalidade dá acesso à rede; cada consulta médica utilizada custa R$50 para o cliente Vitae.</p>
      </div></section>

      <LeadQuiz />

      <section id="rede" className="network section-shell">
        <div className="section-intro split-intro"><div><p className="kicker"><span /> Rede local e conhecida</p><h2>Onde você pode ser atendido.</h2></div><p>A equipe confirma a especialidade, a disponibilidade e as condições do parceiro antes do agendamento.</p></div>
        <div className="city-grid">
          <article className="city-card"><div className="city-card-head"><span>01</span><div><small>Rede Vitae</small><h3>Volta Redonda</h3></div></div><ul><li>Renascer</li><li>Vie Santé</li><li>Villa Medical Center</li></ul><a href="#unidades">Ver unidade e localização <Arrow /></a></article>
          <article className="city-card city-card-green"><div className="city-card-head"><span>02</span><div><small>Rede Vitae</small><h3>Barra Mansa</h3></div></div><ul><li>Padre Pio</li><li>Centro Médico Santa Maria</li></ul><a href="#unidades">Ver unidade e localização <Arrow /></a></article>
        </div>
        <p className="network-note">Para preservar a confiança, a Vitae utiliza apenas fotos reais e autorizadas da rede parceira. As imagens da rede serão apresentadas conforme o material de cada unidade.</p>
      </section>

      <LocationExplorer />

      <section id="especialidades" className="specialties section-shell">
        <div className="section-intro split-intro"><div><p className="kicker"><span /> Diferentes necessidades</p><h2>Especialidades que fazem parte da rotina.</h2></div><div className="specialty-total"><strong>+ DE 35</strong><span>especialidades na rede Vitae</span></div></div>
        <div className="specialty-list">{specialties.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, '0')}</span><strong>{item}</strong></div>)}</div>
        <div className="section-action"><CTA variant="outline" source="especialidades">QUERO VERIFICAR UMA ESPECIALIDADE</CTA><p>Disponibilidade de profissional e agenda deve ser confirmada com a equipe.</p></div>
      </section>

      <section className="exams section-shell"><div className="exams-card"><div><p className="kicker kicker-light"><span /> Além das consultas</p><h2>Condições em exames também fazem parte dos benefícios.</h2></div><div><p>Clientes Vitae podem ter acesso a condições e descontos em exames laboratoriais e de imagem.</p><small>Os valores variam conforme o exame, o parceiro e a disponibilidade. A equipe confirma cada condição antes do uso.</small><CTA variant="light" source="exames">CONSULTAR UMA CONDIÇÃO</CTA></div></div></section>

      <section className="human-proof section-shell"><div className="human-photo"><Image src="/vitae-pessoa-1.jpg" alt="Pessoa real da equipe Vitae" fill sizes="(max-width: 760px) 100vw, 44vw" /></div><div className="human-copy"><p className="kicker"><span /> Estrutura real na região</p><h2>Gente daqui, atendendo quem é daqui.</h2><p>A Vitae atua há mais de sete anos conectando famílias da região a uma rede local de clínicas e profissionais. Do primeiro contato à orientação de uso, existe uma equipe por trás do WhatsApp.</p><div className="review-pending"><strong>Prova que pode ser conferida</strong><p>Rede local identificada, unidades em Volta Redonda e Barra Mansa e atendimento humano para confirmar cada condição antes do uso.</p></div></div></section>

      <section id="duvidas" className="faq section-shell"><div className="section-intro compact"><p className="kicker"><span /> Antes de falar com a equipe</p><h2>Respostas diretas para decidir melhor.</h2></div><div className="faq-list">
        <details><summary>A Vitae é plano de saúde?<span>＋</span></summary><p>Não. A Vitae é uma assinatura de benefícios em saúde para acesso à rede e utilização de serviços em condições diferenciadas. Não possui cobertura hospitalar de um plano de saúde tradicional.</p></details>
        <details><summary>Quanto custa?<span>＋</span></summary><p>O plano Individual custa R$99,90 por mês e o Familiar custa R$209,90 por mês.</p></details>
        <details><summary>Pago consulta além da mensalidade?<span>＋</span></summary><p>Sim. A mensalidade dá acesso aos benefícios e à rede Vitae. Quando utilizar uma consulta médica, o cliente Vitae paga R$50 pelo atendimento.</p></details>
        <details><summary>Quantas pessoas posso incluir?<span>＋</span></summary><p>O plano Familiar atende até sete pessoas, conforme as regras de dependência.</p></details>
        <details><summary>Onde posso ser atendido?<span>＋</span></summary><p>A rede informada inclui Renascer, Vie Santé e Villa Medical Center em Volta Redonda; Padre Pio e Centro Médico Santa Maria em Barra Mansa.</p></details>
        <details><summary>Quais especialidades existem?<span>＋</span></summary><p>São mais de 35 especialidades na rede. A disponibilidade específica de profissional e agenda deve ser confirmada com a equipe.</p></details>
        <details><summary>Tem desconto em exames?<span>＋</span></summary><p>Existem condições e descontos de acordo com o exame e o parceiro. A equipe confirma cada condição antes do uso.</p></details>
        <details><summary>Tem hospital, internação ou emergência?<span>＋</span></summary><p>Não. A Vitae não é plano hospitalar e não substitui pronto-socorro ou plano de saúde com cobertura hospitalar.</p></details>
      </div></section>

      <section className="final-cta"><div><p>Uma alternativa antes de precisar.</p><h2>Descubra qual opção faz mais sentido para você ou sua família.</h2></div><CTA variant="light" source="final">QUERO CONHECER OS PLANOS</CTA></section>
      <footer><div className="footer-brand"><Brand /><p>Benefícios em saúde para Volta Redonda e Barra Mansa.</p></div><div className="footer-links"><a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp</a><a href="tel:+5524998310561">(24) 99831-0561</a><a href="https://www.instagram.com/vitae.br/" target="_blank" rel="noreferrer">Instagram</a><a href="#rede">Rede parceira</a></div><p className="legal">A Vitae é um programa de benefícios em saúde e não substitui plano de saúde. Serviços, valores, especialidades e disponibilidade estão sujeitos às condições da rede parceira.</p></footer>
      <a className="mobile-whatsapp" href="#triagem" data-cta="mobile-sticky">FALAR COM A VITAE <span>↗</span></a>
    </main>
  );
}
