---
title: BSO Resolver
description: Resolva nomes de domínio .bso em chaves públicas usando registros TXT do Bitsocial.
sidebar_position: 1
---

# BSO Resolver

O BSO Resolver traduz nomes de domínio `.bso` nas chaves públicas correspondentes, lendo registros TXT do Bitsocial. É o pacote de resolução usado pelas ferramentas Bitsocial quando um nome `.bso` voltado ao usuário precisa virar o material de chave que a pilha peer-to-peer entende.

- **Código-fonte e README atual:** [github.com/bitsocialnet/bso-resolver](https://github.com/bitsocialnet/bso-resolver#readme)
- **Pacote npm:** [`@bitsocial/bso-resolver`](https://www.npmjs.com/package/@bitsocial/bso-resolver)

## Instalação

```bash
npm install @bitsocial/bso-resolver
```

## Onde ele se encaixa

Os nomes Bitsocial existem para ser pontos de entrada legíveis por pessoas para comunidades e autores. O resolver mantém essa camada de nomes separada do código da aplicação, de modo que os clientes possam primeiro perguntar se um nome é suportado e depois resolvê-lo pelo ponto de entrada específico do runtime.

Use-o quando estiver integrando um cliente, uma ferramenta de linha de comando ou um serviço com suporte a Bitsocial que precise aceitar nomes `.bso` em vez de apenas chaves públicas puras.

## Referência atual do pacote

Esta página é propositalmente um panorama, e não um espelho da referência de API. O README do pacote é a fonte de verdade sobre opções do construtor, tipos de retorno, comportamento de cache, pontos de entrada, exemplos de provedores e a semântica de encerramento suportada:

- [README do BSO Resolver](https://github.com/bitsocialnet/bso-resolver#readme)

Prefira o README upstream ao copiar código para um projeto, porque o comportamento do resolver é versionado junto com o pacote, e não com este site.
