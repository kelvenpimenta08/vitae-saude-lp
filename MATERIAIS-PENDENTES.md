# Roteiro de captação — Vitae Saúde

Este é o material que realmente falta para cumprir integralmente o direcionamento do Arthur. O site já está funcionando sem imagens fictícias; estas fotos entram como prova local e permitem construir os carrosséis reais.

## Orientação geral para amanhã

- Fotografar com o celular na maior qualidade disponível, sem filtros e sem modo retrato artificial.
- Limpar a lente antes de começar.
- Fazer cada cena uma vez na horizontal e uma vez na vertical.
- Manter o celular reto, evitando paredes e portas inclinadas.
- Preferir luz natural e ambientes organizados.
- Enviar os arquivos originais por Drive, sem compressão do WhatsApp.
- Evitar pacientes reconhecíveis. Se alguém aparecer, obter autorização expressa de uso de imagem.
- Não fotografar prontuários, telas, documentos, nomes de pacientes ou informações médicas.

## Fotos das cinco clínicas parceiras

Captar de **3 a 6 fotos por clínica**, seguindo a mesma sequência:

1. Fachada completa com nome/placa legível — horizontal e vertical.
2. Entrada vista da rua ou do corredor — horizontal.
3. Recepção ampla, organizada e sem pessoas identificáveis — horizontal.
4. Sala de espera ou ambiente interno representativo — horizontal e vertical.
5. Detalhe de sinalização ou identidade da clínica — vertical.
6. Um segundo ambiente interno, se for permitido.

Clínicas:

- Renascer — Volta Redonda;
- Vie Santé — Volta Redonda;
- Villa Medical Center — Volta Redonda;
- Padre Pio — Barra Mansa;
- Centro Médico Santa Maria — Barra Mansa.

## Fotos das unidades e da equipe Vitae

- Fachada/entrada da unidade de Volta Redonda.
- Fachada/entrada da unidade de Barra Mansa.
- Recepção e espaço de atendimento de cada unidade.
- Uma foto horizontal da equipe reunida.
- Duas ou três fotos naturais da equipe atendendo ou conversando, sem dados de clientes visíveis.
- Uma foto vertical da Aline no ambiente real da Vitae, caso ela autorize.
- Confirmação de autorização das duas pessoas que aparecem atualmente no hero.

## Google e depoimentos reais

- Link exato do Perfil da Empresa no Google de Volta Redonda.
- Link exato do Perfil da Empresa no Google de Barra Mansa.
- Indicação de qual perfil é o oficial caso exista duplicidade.
- Autorização para utilizar nome e trecho de avaliações reais.
- Depoimentos de clientes somente com texto verdadeiro e autorização.

## Confirmações comerciais

- WhatsApp oficial: confirmar **(24) 99831-0561**.
- Endereço oficial de Volta Redonda: confirmar **Av. Amaral Peixoto, nº 363, sala 101 — Centro**.
- Endereço oficial de Barra Mansa: confirmar **Rua Rio Branco, nº 60 — Centro**.
- Confirmar que os números públicos estão atualizados: +7 anos, +4.000 famílias, 5 clínicas, +200 profissionais e +35 especialidades.
- Confirmar que as consultas médicas são R$50 para todos os clientes Vitae nas condições comunicadas.

## Kommo e mensuração

Solicitar ao responsável técnico/comercial:

- URL segura do webhook/API do Kommo;
- IDs dos campos: Cidade, Quantidade de pessoas, Motivo do interesse e Momento de compra;
- pipeline, etapa e responsável padrão para leads de Google Ads;
- ID do Google Tag Manager ou tags de Google Ads/GA4;
- definição de como o CRM devolverá venda e valor para medir CAC.

## O que já está preparado tecnicamente

- UTM Source, Medium, Campaign, Term e Content;
- GCLID;
- campanha Google, grupo de anúncios e palavra-chave em campos separados;
- URL da landing page e data/hora;
- cidade, quantidade de pessoas, motivo e timing;
- recomendação Individual x Familiar;
- origem fixa identificada como Google;
- mensagem contextualizada no WhatsApp;
- endpoint para encaminhamento ao Kommo quando o webhook for configurado;
- eventos `vitae_cta_click` e `vitae_lead` no `dataLayer`.
