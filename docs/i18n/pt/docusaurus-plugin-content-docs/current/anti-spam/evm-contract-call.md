---
title: Desafio de chamada de contrato EVM
description: Desafio antispam que verifica condições on-chain chamando um contrato inteligente EVM.
sidebar_position: 4
---

# Desafio de chamada de contrato EVM

O EVM Contract Call Challenge verifica o estado on-chain de um autor antes de permitir uma publicação. Os donos de uma comunidade podem exigir que uma carteira ou identidade resolvida satisfaça uma condição de contrato inteligente somente leitura, como manter um saldo mínimo de tokens, antes de postar.

- **Código-fonte e README atual:** [github.com/bitsocialnet/evm-contract-challenge](https://github.com/bitsocialnet/evm-contract-challenge#readme)
- **Pacote npm:** [`@bitsocial/evm-contract-challenge`](https://www.npmjs.com/package/@bitsocial/evm-contract-challenge)

## Instalação

```bash
npm install @bitsocial/evm-contract-challenge
```

## Onde ele se encaixa

Use este desafio em comunidades onde a participação deve depender de um sinal externo da EVM: posse de tokens, posse de NFT, pontuações de prova de pessoalidade, participação em governança ou outra condição legível por contrato.

Depois de configurado, o desafio é automático do ponto de vista do autor. Ele verifica as fontes elegíveis de carteira ou identidade, chama o método de contrato configurado e compara o valor retornado com a condição da comunidade.

## Referência atual do pacote

Esta página é propositalmente uma visão geral, não uma cópia da referência de configuração. O README do pacote é a fonte da verdade para os nomes dos desafios, exemplos da CLI do Bitsocial, registro no pkc-js, valores padrão das opções, exemplos de ABI, comportamento do RPC e fontes de carteira suportadas:

- [README do EVM Contract Challenge](https://github.com/bitsocialnet/evm-contract-challenge#readme)

Prefira o README do projeto original ao configurar uma comunidade em produção, porque as opções e os exemplos de contrato são versionados junto com o pacote, e não com este site.

## Quando usar

O EVM Contract Call Challenge é ideal para:

- **Comunidades restritas por token**, que limitam a publicação a quem detém o token.
- **Acesso restrito por NFT**, em que é necessário possuir um NFT específico.
- **Espaços de governança de DAO**, em que a participação se limita a quem detém o token de governança.

Para comunidades que não dependem de identidade on-chain, considere o [Spam Blocker](./spam-blocker.md) ou o [Desafio de voucher](./voucher-challenge.md).
