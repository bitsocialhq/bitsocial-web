---
title: Desafio de voucher
description: Desafio antispam que condiciona a publicação a códigos de voucher únicos distribuídos pelos donos da comunidade.
sidebar_position: 3
---

# Desafio de voucher

O Voucher Challenge condiciona a publicação de conteúdo a códigos de voucher únicos distribuídos pelo dono da comunidade. Em vez de depender de pontuação automatizada, ele desloca a confiança para um fluxo manual de convites, em que pessoas conhecidas recebem códigos por um canal controlado pelo dono.

- **Código-fonte e README atual:** [github.com/bitsocialnet/voucher-challenge](https://github.com/bitsocialnet/voucher-challenge#readme)
- **Pacote npm:** [`@bitsocial/voucher-challenge`](https://www.npmjs.com/package/@bitsocial/voucher-challenge)

## Instalação

```bash
npm install @bitsocial/voucher-challenge
```

## Como funciona

1. O dono da comunidade gera um ou mais códigos de voucher únicos.
2. O dono distribui esses códigos a autores de confiança pelo canal que preferir (mensagem direta, e-mail, pessoalmente, etc.).
3. Quando um autor tenta publicar, o sistema de desafio pede um código de voucher.
4. O código é validado -- se for genuíno e ainda não tiver sido usado, a publicação é aceita.

Cada código de voucher fica vinculado a um autor específico depois de resgatado, o que impede a reutilização por outras pessoas.

## Referência atual do pacote

Esta página é propositalmente uma visão geral, não uma cópia do guia de configuração. O README do pacote é a fonte da verdade para os nomes atuais dos desafios, exemplos da CLI do Bitsocial, registro no pkc-js, opções suportadas e comportamento de resgate:

- [README do Voucher Challenge](https://github.com/bitsocialnet/voucher-challenge#readme)

Prefira o README do projeto original ao configurar uma comunidade em produção, porque as opções de voucher e os fluxos de instalação são versionados junto com o pacote, e não com este site.

## Quando usar

O Voucher Challenge é mais adequado para:

- **Comunidades apenas por convite**, em que a participação é restrita de propósito.
- **Espaços curados**, em que o dono avalia pessoalmente cada participante.
- **Ambientes de alta confiança**, em que a pontuação automatizada de spam é desnecessária ou indesejada.

Como exige distribuição manual de códigos, ele não escala para grandes comunidades abertas. Nesses cenários, considere o [Spam Blocker](./spam-blocker.md) ou o [Desafio de chamada de contrato EVM](./evm-contract-call.md).
