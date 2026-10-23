import Image from 'next/image';
import LocationExplorer from './LocationExplorer';
import MotionEnhancer from './MotionEnhancer';

const whatsapp =
  'https://wa.me/5524998310561?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Vitae.%20Quero%20entender%20se%20a%20Vitae%20faz%20sentido%20para%20minha%20fam%C3%ADlia%20e%20quais%20op%C3%A7%C3%B5es%20atendem%20o%20que%20precisamos.';

const specialties = ['Clínica médica', 'Cardiologia', 'Ortopedia', 'Dermatologia', 'Pediatria', 'Oftalmologia', 'Endocrinologia', 'Odontologia'];

const partnerGroups = [
  { city: 'Volta Redonda', type: 'Clínicas', names: ['Clínica Renascer', 'Vie Santé', 'Villa Medical Center'], copy: 'Consultas e especialistas em clínicas conhecidas da cidade.', image: '/clinicas/recepcao-vitae-v2.jpg', alt: 'Recepção acolhedora e sala de espera de uma clínica médica' },
  { city: 'Barra Mansa', type: 'Clínicas', names: ['Clínica Padre Pio', 'Centro Médico Santa Maria'], copy: 'Atendimento no Ano Bom com apoio da equipe Vitae no agendamento.', image: '/clinicas/consultorio-vitae-v2.jpg', alt: 'Consultório médico preparado para atendimento' },
  { city: 'Volta Redonda', type: 'Laboratórios', names: ['Centrolab', 'Labes', 'Laboratório Fácil'], copy: 'Exames laboratoriais com condições diferenciadas conforme o procedimento.', image: '/clinicas/laboratorio-vitae-v2.jpg', alt: 'Equipamentos de análises clínicas em um laboratório médico' },
  { city: 'Barra Mansa', type: 'Laboratório', names: ['Laboratório Exame'], copy: 'Opção regional para exames laboratoriais com benefício Vitae.', image: '/clinicas/laboratorio-vitae-v2.jpg', alt: 'Bancada equipada para exames laboratoriais' },
  { city: 'Volta Redonda e Barra Mansa', type: 'Imagem e diagnóstico', names: ['Radiovida', 'ICC', 'Cibam'], copy: 'Ultrassonografia, raio-X, tomografia, ressonância e outros exames, conforme disponibilidade.', image: '/clinicas/diagnostico-vitae-v2.jpg', alt: 'Sala equipada para ultrassonografia e diagnóstico por imagem' },
];

function Arrow() { return <span aria-hidden="true" className="arrow">↗</span>; }
function Check() { return <span aria-hidden="true" className="check">✓</span>; }
function Brand() {
  return <a href="#inicio" className="brand" aria-label="Vitae Saúde — início"><Image src="/vitae-symbol.png" alt="" width={94} height={60} priority /><span><b>VITAE</b><small>SAÚDE</small></span></a>;
}
function CTA({ children, variant = 'primary', source }: { children: React.ReactNode; variant?: 'primary' | 'light' | 'outline'; source: string }) {
  return <a className={`cta cta-${variant}`} data-cta={source} href={whatsapp} target="_blank" rel="noreferrer"><span>{children}</span><Arrow /></a>;
}

export default function Home() {
  return (
    <main id="inicio">
      <MotionEnhancer />
      <div className="top-note">Atendimento em Volta Redonda e Barra Mansa <span>•</span> Fale com a equipe no WhatsApp</div>
      <header className="site-header">
        <Brand />
        <nav aria-label="Navegação principal">
          <a href="#vantagens">Vantagens</a><a href="#como-funciona">Como funciona</a><a href="#rede">Onde usar</a><a href="#duvidas">Dúvidas</a>
        </nav>
        <CTA variant="outline" source="header">Entender minhas opções</CTA>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="kicker"><span /> Quando sua família precisa</p>
          <h1 id="hero-title">Resolver uma consulta não deveria virar <em>um problema.</em></h1>
          <p className="hero-lede">Quando surge uma consulta, um exame ou um retorno, você consegue resolver com rapidez sem pesar no orçamento? A Vitae ajuda sua família a ter uma alternativa antes de precisar.</p>
          <div className="hero-actions"><CTA source="hero">Quero entender minhas opções</CTA><a className="text-link" href="#como-funciona">Ver se faz sentido para mim <span>↓</span></a></div>
          <div className="proof-row" aria-label="Diferenciais da Vitae">
            <div><strong aria-label="Mais de 4 mil"><span aria-hidden="true" data-count-to="4" data-count-prefix="+" data-count-suffix=" mil">+4 mil</span></strong><span>famílias atendidas</span></div>
            <div><strong aria-label="2 cidades"><span aria-hidden="true" data-count-to="2" data-count-suffix=" cidades">2 cidades</span></strong><span>presença regional</span></div>
            <div><strong aria-label="Mais de 35 especialidades"><span aria-hidden="true" data-count-to="35" data-count-prefix="+">+35</span></strong><span>especialidades médicas</span></div>
          </div>
        </div>
        <div className="hero-visual" aria-label="Pessoas da equipe Vitae">
          <div className="photo photo-main"><Image src="/vitae-pessoa-1.jpg" alt="Profissional da Vitae falando sobre cuidado" fill priority sizes="(max-width: 900px) 86vw, 34vw" /></div>
          <div className="photo photo-small"><Image src="/vitae-pessoa-2-clean.png" alt="Profissional da Vitae" fill sizes="(max-width: 900px) 40vw, 16vw" /></div>
          <div className="price-stamp"><small>planos a partir de</small><strong><span>R$</span><b>99</b><i>,90</i></strong><small>por mês*</small></div>
          <div className="visual-caption">Ter uma alternativa antes de precisar muda tudo.</div>
        </div>
      </section>

      <section className="statement" aria-label="Proposta da Vitae">
        <p>O problema não avisa antes de chegar.</p>
        <h2>Adiar uma consulta pode significar mais preocupação, mais tempo perdido e um gasto inesperado quando sua família mais precisa.</h2>
      </section>

      <section id="vantagens" className="benefits section-shell">
        <div className="section-intro"><p className="kicker"><span /> O que acontece quando você precisa?</p><h2>Esperar, pagar caro ou adiar não deveriam ser as únicas opções.</h2><p>Com a Vitae, você tem um caminho mais simples para encontrar atendimento, entender os valores e decidir o próximo passo com tranquilidade.</p></div>
        <div className="benefit-grid">
          <article className="benefit-card feature-card"><span className="card-no">01</span><div className="mini-icon">＋</div><h3>Consultas por R$ 50</h3><p>Consulte diferentes especialidades pelo valor reduzido, conforme a clínica, o profissional e as condições vigentes da rede.</p></article>
          <article className="benefit-card dark-card"><span className="card-no">02</span><div className="mini-icon">⌁</div><h3>Até 50% em exames</h3><p>Economize em exames laboratoriais e de imagem, de acordo com o procedimento e o parceiro disponível.</p></article>
          <article className="benefit-card photo-card"><Image src="/familia-vitae.png" alt="Três gerações de uma família reunidas" fill sizes="(max-width: 900px) 100vw, 28vw" /><div><span>03</span><strong>Até 7 pessoas no plano familiar.</strong></div></article>
          <article className="benefit-card accent-card"><span className="card-no">04</span><div className="mini-icon">♡</div><h3>Mais liberdade para escolher</h3><p>São mais de 200 profissionais credenciados e diferentes opções dentro de uma mesma especialidade.</p></article>
        </div>
      </section>

      <section id="como-funciona" className="how">
        <div className="how-heading"><p className="kicker kicker-light"><span /> Imagine ter uma alternativa pronta</p><h2>Você explica.<br />A gente orienta.<br /><em>Você decide.</em></h2><CTA variant="light" source="como-funciona">Ver se a Vitae faz sentido</CTA></div>
        <ol className="steps">
          <li><span>01</span><div><h3>Conte o que você precisa</h3><p>Explique quem você quer cuidar e quais dificuldades enfrenta hoje para conseguir atendimento.</p></div></li>
          <li><span>02</span><div><h3>Entenda o que pode ajudar</h3><p>Veja valores, condições e possibilidades da rede com uma conversa clara pelo WhatsApp.</p></div></li>
          <li><span>03</span><div><h3>Escolha o próximo passo</h3><p>Com as informações certas, você decide com tranquilidade se a Vitae atende sua necessidade.</p></div></li>
        </ol>
      </section>

      <section id="rede" className="network">
        <div className="network-head section-shell">
          <div><p className="kicker kicker-light"><span /> Quando precisar, onde você vai?</p><h2>Uma rede perto<br />da sua rotina.</h2></div>
          <div><p>Antes de decidir, veja onde a Vitae pode facilitar seu acesso a clínicas, laboratórios e profissionais em Volta Redonda e Barra Mansa.</p><span className="drag-note">← arraste para ver mais →</span></div>
        </div>
        <div className="network-track" aria-label="Rede de atendimento Vitae">
          {partnerGroups.map(({ city, type, names, copy, image, alt }, index) => (
            <article className="network-card" key={type + city}>
              <div className="network-card-top"><span>{String(index + 1).padStart(2, '0')}</span><i>{city}</i></div>
              <div className="network-photo"><Image src={image} alt={alt} fill sizes="(max-width: 680px) 85vw, 380px" /></div>
              <h3>{type}</h3>
              <ul className="partner-list">{names.map(name => <li key={name}>{name}</li>)}</ul>
              <p>{copy}</p>
              <a href={whatsapp} target="_blank" rel="noreferrer">Confirmar atendimento <Arrow /></a>
            </article>
          ))}
        </div>
        <p className="network-disclaimer">A rede pode variar conforme especialidade e disponibilidade. A equipe confirma o nome, o endereço e a condição do parceiro antes do agendamento.</p>
      </section>

      <section id="especialidades" className="specialties section-shell">
        <div className="specialty-head"><div><p className="kicker"><span /> Mais de 35 especialidades</p><h2>Diferentes cuidados. Uma só orientação.</h2></div><p>Com mais de 200 profissionais credenciados, você pode encontrar diferentes opções de médicos dentro da mesma especialidade, conforme disponibilidade.</p></div>
        <div className="specialty-list">{specialties.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, '0')}</span><strong>{item}</strong><Arrow /></div>)}</div>
      </section>

      <section id="planos" className="plan section-shell">
        <div className="plan-card">
          <div className="plan-copy"><p className="kicker kicker-light"><span /> Escolha o que combina com sua rotina</p><h2>Uma opção para você.<br />Outra para a família.</h2><p>Os dois planos dão acesso à rede credenciada, consultas com valores reduzidos, descontos em exames e suporte da equipe Vitae.</p><ul>{['Consultas por R$ 50, conforme a rede', 'Descontos de até 50% em exames', 'Mais de 35 especialidades', 'Mais de 200 profissionais credenciados'].map(item => <li key={item}><Check />{item}</li>)}</ul></div>
          <div className="plan-options" aria-label="Planos Vitae">
            <article className="plan-option"><span>Individual</span><strong><sup>R$</sup>99<small>,90</small></strong><p>por mês</p><b>Para 1 pessoa</b></article>
            <article className="plan-option featured"><span>Familiar</span><strong><sup>R$</sup>209<small>,90</small></strong><p>por mês</p><b>Até 7 pessoas</b><small>1 titular + até 6 dependentes</small></article>
            <CTA variant="light" source="planos">Quero comparar os planos</CTA>
            <p className="plan-rules">Taxa de adesão de R$ 50 • Fidelidade de 12 meses • Pagamento recorrente no cartão de crédito. Uso sujeito à ativação do cadastro e às regras da rede.</p>
          </div>
        </div>
      </section>

      <LocationExplorer />

      <section id="duvidas" className="faq section-shell">
        <div className="section-intro compact"><p className="kicker"><span /> Informação para decidir melhor</p><h2>As respostas que ajudam você a escolher.</h2></div>
        <div className="faq-list">
          <details><summary>Como a Vitae funciona?<span>＋</span></summary><p>A Vitae é uma solução de benefícios em saúde que conecta associados a consultas, exames e serviços com condições diferenciadas na rede parceira.</p></details>
          <details><summary>É plano de saúde?<span>＋</span></summary><p>Não. A Vitae não substitui plano de saúde e não oferece cobertura médico-hospitalar. É um serviço de benefícios e acesso com valores reduzidos.</p></details>
          <details><summary>Quanto custa uma consulta?<span>＋</span></summary><p>Os clientes Vitae têm acesso a consultas por R$ 50, conforme a especialidade, a clínica e as condições vigentes da rede.</p></details>
          <details><summary>Quantas pessoas posso incluir?<span>＋</span></summary><p>O plano Individual atende uma pessoa. O plano Familiar inclui um titular e até seis dependentes, totalizando até sete pessoas, conforme as regras contratuais.</p></details>
          <details><summary>Como funciona o agendamento?<span>＋</span></summary><p>Em Volta Redonda, o cliente geralmente agenda diretamente com a clínica parceira seguindo as orientações da Vitae. Em Barra Mansa, a equipe Vitae auxilia especialmente nos agendamentos das clínicas Padre Pio e Santa Maria.</p></details>
          <details><summary>Existe desconto em exames?<span>＋</span></summary><p>Sim. Os descontos em exames laboratoriais e de imagem podem chegar a 50%, dependendo do procedimento e do parceiro.</p></details>
          <details><summary>Quando posso começar a usar?<span>＋</span></summary><p>A utilização começa após a ativação do cadastro e segue as regras e a disponibilidade da rede credenciada. A equipe confirma os próximos passos pelo WhatsApp.</p></details>
          <details><summary>Existe fidelidade e taxa de adesão?<span>＋</span></summary><p>A taxa de adesão padrão é de R$ 50 e a fidelidade contratual é de 12 meses. O pagamento principal é feito por cartão de crédito com recorrência mensal.</p></details>
        </div>
      </section>

      <section className="final-cta"><div><p>O próximo passo não precisa ser comprar.</p><h2>Primeiro, entenda se a Vitae faz sentido para a realidade da sua família.</h2></div><CTA variant="light" source="final">Conversar sem compromisso</CTA></section>
      <footer>
        <div className="footer-main"><Brand /><p>Consultas, exames e orientação para cuidar da sua família.</p></div>
        <div className="footer-links"><a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp</a><a href="https://www.instagram.com/vitae.br/" target="_blank" rel="noreferrer">Instagram</a><a href="#rede">Rede parceira</a></div>
        <p className="legal">A Vitae é um programa de benefícios em saúde e não substitui plano de saúde. Serviços, valores e disponibilidade sujeitos às condições da rede parceira.</p>
      </footer>
      <a className="mobile-whatsapp" href={whatsapp} target="_blank" rel="noreferrer" data-cta="mobile-sticky">Entender minhas opções <span>↗</span></a>
    </main>
  );
}
