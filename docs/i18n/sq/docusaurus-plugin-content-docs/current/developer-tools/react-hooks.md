---
title: React Hooks
description: Bibliotekë hooks-esh React për të ndërtuar aplikacione sociale të decentralizuara mbi protokollin Bitsocial.
sidebar_position: 1
---

# React Hooks

Paketa `bitsocial-react-hooks` ofron një API të njohur hooks-esh React për të ndërvepruar me protokollin Bitsocial. Ajo merret me marrjen e feed-eve, komenteve dhe profileve të autorëve, me menaxhimin e llogarive, me publikimin e përmbajtjes dhe me pajtimin në komunitete -- gjithçka pa u mbështetur në një server qendror.

Kjo bibliotekë është ndërfaqja kryesore që përdoret nga [5chan](/apps/5chan/) dhe nga aplikacione të tjera klient të Bitsocial.

:::note
`bitsocial-react-hooks` merret aktualisht drejtpërdrejt nga GitHub dhe nuk botohet në npm.
:::

## Instalimi

Meqë paketa nuk gjendet ende në npm, instalojeni drejtpërdrejt nga GitHub, duke e fiksuar te një hash i caktuar commit-i:

```bash
yarn add https://github.com/bitsocialnet/bitsocial-react-hooks.git#<commit-hash>
```

Zëvendësoni `<commit-hash>` me commit-in që doni të përdorni.

## Përmbledhje e API-së

Hooks-et janë organizuar në kategori sipas funksionit. Më poshtë jepet një përmbledhje e hooks-eve më të përdorur në secilën kategori. Për nënshkrimet e plota, parametrat dhe tipet e kthimit, shihni [referencën e plotë të API-së në GitHub](https://github.com/bitsocialnet/bitsocial-react-hooks).

### Llogaritë

Menaxhoni llogaritë lokale të përdoruesve, identitetin dhe cilësimet.

- `useAccount(accountName?)` -- kthen objektin e llogarisë aktive (ose të llogarisë së emërtuar)
- `useAccounts()` -- kthen të gjitha llogaritë e ruajtura lokalisht
- `useAccountComments(options?)` -- kthen komentet e publikuara nga llogaria aktive

### Komentet

Merrni dhe ndërveproni me komente e tema të veçanta.

- `useComment(commentCid?)` -- merr një koment të vetëm sipas CID-së së tij
- `useComments(commentCids?)` -- merr disa komente njëherësh
- `useEditedComment(comment?)` -- kthen versionin më të fundit të redaktuar të një komenti

### Komunitetet

Merrni metadatat dhe cilësimet e komuniteteve.

- Hook kërkimi për një komunitet të vetëm -- merr një komunitet sipas adresës
- Hook kërkimi për disa komunitete -- merr njëherësh më shumë se një komunitet
- Hook statistikash komuniteti -- kthen numrin e pajtimtarëve dhe të postimeve

### Autorët

Kërkoni profile dhe metadata autorësh.

- `useAuthor(authorAddress?)` -- merr profilin e një autori
- `useAuthorComments(options?)` -- kthen komentet e një autori të caktuar
- `useResolvedAuthorAddress(authorAddress?)` -- shndërron një adresë të lexueshme nga njerëzit (p.sh. ENS) në adresën e saj të protokollit

### Feed-et

Pajtohuni te feed-et e përmbajtjes dhe shfaqini ato faqe pas faqeje.

- `useFeed(options?)` -- kthen një feed të ndarë në faqe me postime nga një ose më shumë komunitete
- `useBufferedFeeds(feedOptions?)` -- ngarkon paraprakisht disa feed-e në bufer për shfaqje më të shpejtë
- `useAuthorFeed(authorAddress?)` -- kthen një feed me postimet e një autori të caktuar

### Veprimet

Publikoni përmbajtje dhe kryeni operacione shkrimi.

- `usePublishComment(options?)` -- publikon një koment ose një përgjigje të re
- `usePublishVote(options?)` -- hedh një votë pro ose kundër
- `useSubscribe(options?)` -- pajtohet në një komunitet ose anulon pajtimin

### Gjendjet dhe RPC

Mbikëqyrni gjendjen e lidhjes dhe ndërveproni me një daemon të largët Bitsocial.

- `useClientsStates(options?)` -- kthen gjendjen e lidhjes së klientëve IPFS/pubsub
- Hook cilësimesh RPC -- kthen konfigurimin aktual të daemon-it RPC

## Zhvillimi

Për të punuar lokalisht me bibliotekën e hooks-eve:

**Parakushtet:** Node.js, Corepack i aktivizuar, Yarn 4

```bash
git clone https://github.com/bitsocialnet/bitsocial-react-hooks.git
cd bitsocial-react-hooks
corepack enable
yarn install
```

Për komandat e testimit dhe të ndërtimit, shihni README-në e depozitës.

## Lidhjet

- **GitHub:** [bitsocialnet/bitsocial-react-hooks](https://github.com/bitsocialnet/bitsocial-react-hooks)
- **Licenca:** GPL-2.0-only
