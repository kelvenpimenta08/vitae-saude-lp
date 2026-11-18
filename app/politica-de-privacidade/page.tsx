import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Política de Privacidade | Vitae Saúde',
  description: 'Saiba como a Vitae Saúde coleta, utiliza, protege e compartilha dados pessoais enviados pelo site.',
};

const updatedAt = '18 de novembro de 2026';

export default function PrivacyPolicy() {
  return (
    <main className="privacy-page">
      <header className="privacy-header">
        <Link href="/" className="privacy-brand" aria-label="Voltar para o site da Vitae Saúde">
          <Image src="/vitae-logo.png" alt="Vitae Saúde" width={1525} height={959} priority />
        </Link>
        <Link href="/" className="privacy-back">← Voltar ao site</Link>
      </header>

      <article className="privacy-document">
        <div className="privacy-hero">
          <p className="kicker"><span /> Seus dados, com transparência</p>
          <h1>Política de Privacidade</h1>
          <p>Esta política explica como a Vitae Saúde trata os dados enviados por você neste site e nos canais de atendimento relacionados.</p>
          <small>Última atualização: {updatedAt}</small>
        </div>

        <nav className="privacy-index" aria-label="Índice da política">
          <strong>Nesta página</strong>
          <a href="#dados">Dados coletados</a>
          <a href="#finalidades">Como usamos</a>
          <a href="#compartilhamento">Compartilhamento</a>
          <a href="#direitos">Seus direitos</a>
          <a href="#contato">Contato</a>
        </nav>

        <div className="privacy-content">
          <section>
            <h2>1. Quem é responsável pelo tratamento</h2>
            <p>A Vitae Saúde é responsável pelos dados pessoais coletados neste site para apresentar seus benefícios, entender a necessidade inicial do interessado e realizar o atendimento comercial.</p>
            <p>O canal atual para assuntos de privacidade é o WhatsApp <a href="https://wa.me/5524998310561?text=Ol%C3%A1%21%20Quero%20falar%20sobre%20meus%20dados%20pessoais." target="_blank" rel="noreferrer">(24) 99831-0561</a>.</p>
          </section>

          <section id="dados">
            <h2>2. Quais dados coletamos</h2>
            <p>Quando você preenche a triagem, podemos receber:</p>
            <ul>
              <li>nome e número de WhatsApp;</li>
              <li>cidade, quantidade de pessoas interessadas e momento de contratação;</li>
              <li>motivo geral da procura e opção comercial sugerida pelo formulário;</li>
              <li>página acessada, data e hora do envio e, quando presentes no endereço da página, parâmetros de origem da campanha.</li>
            </ul>
            <p><strong>O formulário não solicita CPF, renda, diagnóstico, prontuário ou informações médicas sensíveis.</strong> Evite enviar esse tipo de dado pelo campo de atendimento sem que a equipe solicite e explique a necessidade.</p>
          </section>

          <section id="finalidades">
            <h2>3. Para que usamos os dados</h2>
            <ul>
              <li>responder ao seu pedido e iniciar o atendimento pelo WhatsApp;</li>
              <li>apresentar planos, benefícios, regras e rede parceira compatíveis com o interesse informado;</li>
              <li>registrar e organizar o contato no CRM comercial;</li>
              <li>identificar a origem do pedido e avaliar o funcionamento do formulário;</li>
              <li>prevenir fraude, abuso e uso automatizado indevido;</li>
              <li>cumprir obrigações legais e exercer direitos em processos administrativos ou judiciais.</li>
            </ul>
            <p>O tratamento ocorre para atender à solicitação feita por você, com seu consentimento quando aplicável, para procedimentos relacionados ao serviço solicitado, para cumprimento de obrigações legais e para proteção do site e dos canais de atendimento.</p>
          </section>

          <section id="compartilhamento">
            <h2>4. Com quem os dados podem ser compartilhados</h2>
            <p>Os dados podem ser tratados por fornecedores necessários à operação, sempre dentro da finalidade descrita:</p>
            <ul>
              <li><strong>Kommo:</strong> CRM usado para registrar e acompanhar o atendimento comercial;</li>
              <li><strong>WhatsApp/Meta:</strong> quando você opta por continuar a conversa nesse canal;</li>
              <li><strong>Vercel:</strong> infraestrutura que hospeda e protege o site;</li>
              <li><strong>rede parceira:</strong> somente quando necessário para verificar uma condição, disponibilidade ou encaminhamento solicitado por você;</li>
              <li><strong>autoridades públicas:</strong> quando houver obrigação legal ou ordem válida.</li>
            </ul>
            <p>A Vitae não vende seus dados pessoais.</p>
          </section>

          <section>
            <h2>5. Armazenamento, transferências e segurança</h2>
            <p>Os dados são mantidos apenas pelo tempo necessário para o atendimento, para o relacionamento solicitado e para o cumprimento de obrigações legais. Depois disso, são eliminados ou anonimizados quando possível.</p>
            <p>Alguns fornecedores podem processar dados em outros países. Nesses casos, a Vitae busca utilizar serviços com medidas contratuais e técnicas adequadas à proteção dos dados.</p>
            <p>Adotamos medidas razoáveis de segurança, como envio protegido por HTTPS, acesso restrito às credenciais e tratamento do formulário no servidor. Nenhum sistema, porém, é totalmente imune a incidentes.</p>
          </section>

          <section>
            <h2>6. Cookies, armazenamento local e anúncios</h2>
            <p>Neste momento, o site não ativa pixels de publicidade ou ferramentas externas de métricas. Quando você chega por um link de campanha, parâmetros de origem podem ser guardados temporariamente no navegador para acompanhar o próprio pedido enviado.</p>
            <p>Se ferramentas de métricas ou anúncios forem ativadas no futuro, esta política e os controles de consentimento serão atualizados antes do uso quando exigido.</p>
          </section>

          <section id="direitos">
            <h2>7. Seus direitos</h2>
            <p>Nos termos da LGPD, você pode solicitar, conforme aplicável:</p>
            <ul>
              <li>confirmação e acesso aos seus dados;</li>
              <li>correção de dados incompletos ou desatualizados;</li>
              <li>anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade;</li>
              <li>informações sobre compartilhamentos;</li>
              <li>revogação do consentimento e eliminação dos dados tratados com base nele, respeitadas as hipóteses legais de conservação;</li>
              <li>oposição a tratamento realizado em desconformidade com a lei.</li>
            </ul>
            <p>Para proteger você, poderemos pedir informações suficientes para confirmar a identidade antes de atender à solicitação.</p>
          </section>

          <section>
            <h2>8. Crianças e adolescentes</h2>
            <p>Este formulário comercial é destinado a pessoas com capacidade para solicitar informações sobre os benefícios. Dados de crianças ou adolescentes não devem ser enviados diretamente por eles; o contato deve ser feito por responsável legal.</p>
          </section>

          <section>
            <h2>9. Atualizações desta política</h2>
            <p>Esta política pode ser alterada para refletir mudanças no site, nos fornecedores ou na legislação. A versão vigente e a data da última atualização permanecerão publicadas nesta página.</p>
          </section>

          <section id="contato" className="privacy-contact">
            <p>Quer exercer um direito ou tirar uma dúvida sobre seus dados?</p>
            <h2>Fale com a Vitae.</h2>
            <a className="cta cta-primary" href="https://wa.me/5524998310561?text=Ol%C3%A1%21%20Quero%20falar%20sobre%20meus%20dados%20pessoais." target="_blank" rel="noreferrer"><span>ABRIR WHATSAPP</span><span className="arrow">↗</span></a>
          </section>
        </div>
      </article>

      <footer className="privacy-footer">
        <p>Vitae Saúde — benefícios em saúde para Volta Redonda e Barra Mansa.</p>
        <Link href="/">Voltar ao site</Link>
      </footer>
    </main>
  );
}
