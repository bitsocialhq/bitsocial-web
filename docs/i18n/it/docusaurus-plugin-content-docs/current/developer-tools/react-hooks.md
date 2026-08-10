---
title: React Hooks
description: Libreria di hook React per costruire applicazioni sociali decentralizzate sul protocollo Bitsocial.
sidebar_position: 1
---

# React Hooks

Il pacchetto `bitsocial-react-hooks` offre una familiare API di hook React per interagire con il protocollo Bitsocial. Si occupa del recupero di feed, commenti e profili degli autori, della gestione degli account, della pubblicazione di contenuti e dell'iscrizione alle comunità -- il tutto senza dipendere da un server centrale.

Questa libreria è l'interfaccia principale usata da [5chan](/apps/5chan/) e dalle altre applicazioni client Bitsocial.

:::note
`bitsocial-react-hooks` al momento viene consumato direttamente da GitHub anziché pubblicato su npm.
:::

## Installazione

Poiché il pacchetto non è ancora su npm, installalo direttamente da GitHub fissandolo a un hash di commit specifico:

```bash
yarn add https://github.com/bitsocialnet/bitsocial-react-hooks.git#<commit-hash>
```

Sostituisci `<commit-hash>` con il commit che vuoi usare.

## Panoramica dell'API

Gli hook sono organizzati in categorie funzionali. Di seguito una sintesi degli hook più usati in ciascuna categoria. Per firme complete, parametri e tipi restituiti, consulta il [riferimento API completo su GitHub](https://github.com/bitsocialnet/bitsocial-react-hooks).

### Account

Gestiscono gli account utente locali, l'identità e le impostazioni.

- `useAccount(accountName?)` -- restituisce l'oggetto dell'account attivo (o di quello indicato)
- `useAccounts()` -- restituisce tutti gli account memorizzati localmente
- `useAccountComments(options?)` -- restituisce i commenti pubblicati dall'account attivo

### Commenti

Recuperano singoli commenti e discussioni e permettono di interagirci.

- `useComment(commentCid?)` -- recupera un singolo commento a partire dal suo CID
- `useComments(commentCids?)` -- recupera più commenti in un'unica richiesta
- `useEditedComment(comment?)` -- restituisce la versione modificata più recente di un commento

### Comunità

Recuperano metadati e impostazioni delle comunità.

- Hook per la ricerca di una singola comunità -- recupera una comunità dal suo indirizzo
- Hook per la ricerca di più comunità -- recupera più comunità
- Hook per le statistiche di comunità -- restituisce il numero di iscritti e di post

### Autori

Consultano profili e metadati degli autori.

- `useAuthor(authorAddress?)` -- recupera il profilo di un autore
- `useAuthorComments(options?)` -- restituisce i commenti di un autore specifico
- `useResolvedAuthorAddress(authorAddress?)` -- risolve un indirizzo leggibile (ad esempio ENS) nel corrispondente indirizzo di protocollo

### Feed

Permettono di iscriversi ai feed di contenuti e di impaginarli.

- `useFeed(options?)` -- restituisce un feed impaginato di post provenienti da una o più comunità
- `useBufferedFeeds(feedOptions?)` -- precarica più feed per un rendering più rapido
- `useAuthorFeed(authorAddress?)` -- restituisce un feed dei post di un autore specifico

### Azioni

Pubblicano contenuti ed eseguono operazioni di scrittura.

- `usePublishComment(options?)` -- pubblica un nuovo commento o una risposta
- `usePublishVote(options?)` -- esprime un voto positivo o negativo
- `useSubscribe(options?)` -- iscrive o disiscrive da una comunità

### Stati e RPC

Monitorano lo stato della connessione e interagiscono con un daemon Bitsocial remoto.

- `useClientsStates(options?)` -- restituisce lo stato di connessione dei client IPFS/pubsub
- Hook per le impostazioni RPC -- restituisce la configurazione attuale del daemon RPC

## Sviluppo

Per lavorare in locale alla libreria di hook:

**Prerequisiti:** Node.js, Corepack abilitato, Yarn 4

```bash
git clone https://github.com/bitsocialnet/bitsocial-react-hooks.git
cd bitsocial-react-hooks
corepack enable
yarn install
```

Consulta il README del repository per i comandi di test e di build.

## Collegamenti

- **GitHub:** [bitsocialnet/bitsocial-react-hooks](https://github.com/bitsocialnet/bitsocial-react-hooks)
- **Licenza:** GPL-2.0-only
