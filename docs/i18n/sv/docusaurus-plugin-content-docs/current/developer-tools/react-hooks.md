---
title: React Hooks
description: React hooks-bibliotek för att bygga decentraliserade sociala applikationer på Bitsocial-protokollet.
sidebar_position: 1
---

# React Hooks

Paketet `bitsocial-react-hooks` erbjuder ett välbekant API med React hooks för att arbeta mot Bitsocial-protokollet. Det sköter hämtning av flöden, kommentarer och författarprofiler, hantering av konton, publicering av innehåll och prenumerationer på communities -- helt utan att förlita sig på en central server.

Biblioteket är det huvudsakliga gränssnittet som används av [5chan](/apps/5chan/) och andra Bitsocial-klienter.

:::note
`bitsocial-react-hooks` hämtas för närvarande direkt från GitHub i stället för att publiceras på npm.
:::

## Installation

Eftersom paketet ännu inte finns på npm installerar du det direkt från GitHub och låser det till en specifik commit-hash:

```bash
yarn add https://github.com/bitsocialnet/bitsocial-react-hooks.git#<commit-hash>
```

Byt ut `<commit-hash>` mot den commit du vill utgå från.

## API-översikt

Hookarna är indelade i funktionella kategorier. Nedan följer en sammanfattning av de vanligaste hookarna i varje kategori. Fullständiga signaturer, parametrar och returtyper finns i [den kompletta API-referensen på GitHub](https://github.com/bitsocialnet/bitsocial-react-hooks).

### Konton

Hantera lokala användarkonton, identitet och inställningar.

- `useAccount(accountName?)` -- returnerar det aktiva (eller namngivna) kontoobjektet
- `useAccounts()` -- returnerar alla lokalt lagrade konton
- `useAccountComments(options?)` -- returnerar kommentarer som publicerats av det aktiva kontot

### Kommentarer

Hämta och arbeta med enskilda kommentarer och trådar.

- `useComment(commentCid?)` -- hämtar en enskild kommentar utifrån dess CID
- `useComments(commentCids?)` -- hämtar flera kommentarer i en batch
- `useEditedComment(comment?)` -- returnerar den senast redigerade versionen av en kommentar

### Communities

Hämta metadata och inställningar för communities.

- Hook för uppslag av en enskild community -- hämtar en community utifrån dess adress
- Hook för uppslag av flera communities -- hämtar flera communities samtidigt
- Hook för community-statistik -- returnerar antal prenumeranter och inlägg

### Författare

Slå upp författarprofiler och metadata.

- `useAuthor(authorAddress?)` -- hämtar en författarprofil
- `useAuthorComments(options?)` -- returnerar kommentarer från en viss författare
- `useResolvedAuthorAddress(authorAddress?)` -- översätter en läsbar adress (t.ex. ENS) till dess protokolladress

### Flöden

Prenumerera på och paginera innehållsflöden.

- `useFeed(options?)` -- returnerar ett paginerat flöde med inlägg från en eller flera communities
- `useBufferedFeeds(feedOptions?)` -- förbuffrar flera flöden för snabbare rendering
- `useAuthorFeed(authorAddress?)` -- returnerar ett flöde med inlägg från en viss författare

### Åtgärder

Publicera innehåll och utför skrivoperationer.

- `usePublishComment(options?)` -- publicera en ny kommentar eller ett svar
- `usePublishVote(options?)` -- rösta upp eller ned
- `useSubscribe(options?)` -- prenumerera på eller avsluta prenumerationen på en community

### Tillstånd och RPC

Bevaka anslutningstillstånd och arbeta mot en fjärransluten Bitsocial-daemon.

- `useClientsStates(options?)` -- returnerar anslutningstillståndet för IPFS- och pubsub-klienterna
- Hook för RPC-inställningar -- returnerar den aktuella konfigurationen för RPC-daemonen

## Utveckling

Så här arbetar du med hook-biblioteket lokalt:

**Förutsättningar:** Node.js, Corepack aktiverat, Yarn 4

```bash
git clone https://github.com/bitsocialnet/bitsocial-react-hooks.git
cd bitsocial-react-hooks
corepack enable
yarn install
```

Se repots README för kommandon för test och bygge.

## Länkar

- **GitHub:** [bitsocialnet/bitsocial-react-hooks](https://github.com/bitsocialnet/bitsocial-react-hooks)
- **Licens:** GPL-2.0-only
