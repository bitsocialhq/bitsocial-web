---
title: React Hooks
description: Biblioteca de hooks React para criar aplicações sociais descentralizadas no protocolo Bitsocial.
sidebar_position: 1
---

# React Hooks

O pacote `bitsocial-react-hooks` oferece uma API de hooks React familiar para interagir com o protocolo Bitsocial. Ele cuida da busca de feeds, comentários e perfis de autores, do gerenciamento de contas, da publicação de conteúdo e da inscrição em comunidades -- tudo sem depender de um servidor central.

Esta biblioteca é a interface principal usada pelo [5chan](/apps/5chan/) e por outras aplicações cliente do Bitsocial.

:::note
O `bitsocial-react-hooks` é consumido hoje diretamente do GitHub, em vez de publicado no npm.
:::

## Instalação

Como o pacote ainda não está no npm, instale-o diretamente do GitHub, fixando um hash de commit específico:

```bash
yarn add https://github.com/bitsocialnet/bitsocial-react-hooks.git#<commit-hash>
```

Substitua `<commit-hash>` pelo commit que você quer usar.

## Visão geral da API

Os hooks estão organizados em categorias funcionais. Abaixo está um resumo dos hooks mais usados em cada categoria. Para assinaturas completas, parâmetros e tipos de retorno, consulte a [referência completa da API no GitHub](https://github.com/bitsocialnet/bitsocial-react-hooks).

### Contas

Gerencie contas de usuário locais, identidade e configurações.

- `useAccount(accountName?)` -- retorna o objeto da conta ativa (ou da conta indicada)
- `useAccounts()` -- retorna todas as contas armazenadas localmente
- `useAccountComments(options?)` -- retorna os comentários publicados pela conta ativa

### Comentários

Busque comentários e discussões individuais e interaja com eles.

- `useComment(commentCid?)` -- busca um único comentário pelo CID
- `useComments(commentCids?)` -- busca vários comentários em lote
- `useEditedComment(comment?)` -- retorna a versão editada mais recente de um comentário

### Comunidades

Obtenha metadados e configurações de comunidades.

- Hook de consulta de uma única comunidade -- busca uma comunidade pelo endereço
- Hook de consulta de várias comunidades -- busca várias comunidades
- Hook de estatísticas da comunidade -- retorna a contagem de inscritos e de publicações

### Autores

Consulte perfis e metadados de autores.

- `useAuthor(authorAddress?)` -- busca o perfil de um autor
- `useAuthorComments(options?)` -- retorna os comentários de um autor específico
- `useResolvedAuthorAddress(authorAddress?)` -- resolve um endereço legível por pessoas (por exemplo, ENS) para o endereço de protocolo correspondente

### Feeds

Inscreva-se em feeds de conteúdo e pagine-os.

- `useFeed(options?)` -- retorna um feed paginado de publicações de uma ou mais comunidades
- `useBufferedFeeds(feedOptions?)` -- pré-carrega vários feeds em buffer para renderizar mais rápido
- `useAuthorFeed(authorAddress?)` -- retorna um feed de publicações de um autor específico

### Ações

Publique conteúdo e execute operações de escrita.

- `usePublishComment(options?)` -- publica um novo comentário ou resposta
- `usePublishVote(options?)` -- registra um voto positivo ou negativo
- `useSubscribe(options?)` -- inscreve ou cancela a inscrição em uma comunidade

### Estados e RPC

Acompanhe o estado da conexão e interaja com um daemon Bitsocial remoto.

- `useClientsStates(options?)` -- retorna o estado de conexão dos clientes IPFS/pubsub
- Hook de configurações de RPC -- retorna a configuração atual do daemon RPC

## Desenvolvimento

Para trabalhar na biblioteca de hooks localmente:

**Pré-requisitos:** Node.js, Corepack ativado, Yarn 4

```bash
git clone https://github.com/bitsocialnet/bitsocial-react-hooks.git
cd bitsocial-react-hooks
corepack enable
yarn install
```

Consulte o README do repositório para conhecer os comandos de teste e de build.

## Links

- **GitHub:** [bitsocialnet/bitsocial-react-hooks](https://github.com/bitsocialnet/bitsocial-react-hooks)
- **Licença:** GPL-2.0-only
