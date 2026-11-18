# Vitae Saúde — Landing Page

Landing page da Vitae Saúde para campanhas e apresentação comercial em Volta Redonda e Barra Mansa.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Produção

```bash
npm run build
npm start
```

O projeto usa Next.js, React e CSS responsivo. O contato principal direciona para o WhatsApp da Vitae.

## Integração com o Kommo

O formulário já está preparado para criar um lead e um contato no Kommo e registrar as respostas da triagem como nota no card. Configure estas variáveis no ambiente de produção:

- `KOMMO_SUBDOMAIN`: parte anterior a `.kommo.com` na URL da conta;
- `KOMMO_ACCESS_TOKEN`: token de longa duração ou access token da integração privada;
- `KOMMO_PIPELINE_ID`: ID opcional do funil de destino;
- `KOMMO_STATUS_ID`: ID opcional da etapa de destino.

As credenciais devem existir somente no servidor e nunca podem ser adicionadas ao repositório. Sem elas, o formulário continua abrindo o WhatsApp, mas informa internamente que o CRM ainda está pendente de configuração.

Também é possível usar `KOMMO_WEBHOOK_URL` como ponte temporária para um endpoint intermediário que aceite JSON. A integração direta com a API do Kommo tem prioridade quando subdomínio e token estão configurados.

## Privacidade

A página pública está em `/politica-de-privacidade` e é vinculada no formulário e no rodapé. Antes da versão definitiva, completar os dados cadastrais da pessoa jurídica e revisar o texto com o responsável jurídico/privacidade da empresa.

> A Vitae é um programa de benefícios em saúde e não substitui plano de saúde. Valores, serviços e disponibilidade seguem as condições da rede parceira.
