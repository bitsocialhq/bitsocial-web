---
title: Desafio Captcha Canvas
description: Desafio de captcha por imagem, independente, para comunidades Bitsocial.
sidebar_position: 2
---

# Desafio Captcha Canvas

O Captcha Canvas Challenge é um pacote independente de captcha por imagem para comunidades Bitsocial. Ele desenha um texto aleatório em um canvas e permite que a comunidade peça aos autores que resolvam a imagem antes de a publicação ser aceita.

- **Código-fonte e README atual:** [github.com/bitsocialnet/captcha-canvas-challenge](https://github.com/bitsocialnet/captcha-canvas-challenge#readme)
- **Pacote npm:** [`@bitsocial/captcha-canvas-challenge`](https://www.npmjs.com/package/@bitsocial/captcha-canvas-challenge)

## Instalação

```bash
npm install @bitsocial/captcha-canvas-challenge
```

## Onde ele se encaixa

Desafios de captcha são úteis quando uma comunidade quer uma barreira interativa simples para resistência a spam de baixo risco. Este pacote é propositalmente restrito: ele fornece a implementação do desafio, enquanto a comunidade ou o nó Bitsocial decide quando e como apresentá-lo.

Para uma proteção mais forte, combine-o com sistemas mais amplos de moderação ou de pontuação de risco, em vez de tratar um captcha como estratégia antispam completa.

## Referência atual do pacote

Esta página é propositalmente uma visão geral, não uma cópia do guia de configuração. O README do pacote é a fonte da verdade para os nomes atuais dos desafios, exemplos de registro, exemplos de CLI, opções suportadas, requisitos e notas de segurança:

- [README do Captcha Canvas Challenge](https://github.com/bitsocialnet/captcha-canvas-challenge#readme)

Prefira o README do projeto original ao configurar uma comunidade em produção, porque as opções do pacote e os fluxos de instalação são versionados junto com o pacote, e não com este site.
