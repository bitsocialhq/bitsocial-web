---
title: BSO Resolver
description: Risolvi i nomi di dominio .bso in chiavi pubbliche tramite i record TXT di Bitsocial.
sidebar_position: 1
---

# BSO Resolver

BSO Resolver traduce i nomi di dominio `.bso` nelle chiavi pubbliche corrispondenti leggendo i record TXT di Bitsocial. È il pacchetto di risoluzione usato dagli strumenti Bitsocial quando un nome `.bso` mostrato alle persone deve diventare il materiale crittografico compreso dallo stack peer-to-peer.

- **Codice sorgente e README aggiornato:** [github.com/bitsocialnet/bso-resolver](https://github.com/bitsocialnet/bso-resolver#readme)
- **Pacchetto npm:** [`@bitsocial/bso-resolver`](https://www.npmjs.com/package/@bitsocial/bso-resolver)

## Installazione

```bash
npm install @bitsocial/bso-resolver
```

## Dove si colloca

I nomi Bitsocial nascono come punti di accesso leggibili per comunità e autori. Il resolver tiene quel livello di denominazione separato dal codice applicativo, così i client possono chiedere se un nome è supportato e poi risolverlo attraverso il punto di ingresso specifico per il runtime offerto dal pacchetto.

Usalo quando integri un client, uno strumento da riga di comando o un servizio compatibile con Bitsocial che deve accettare nomi `.bso` e non soltanto chiavi pubbliche grezze.

## Riferimento aggiornato del pacchetto

Questa pagina è volutamente una panoramica, non una copia del riferimento API. Il README del pacchetto è la fonte autorevole per le opzioni del costruttore, i tipi restituiti, il comportamento della cache, i punti di ingresso, gli esempi di provider e la semantica di arresto supportata:

- [README di BSO Resolver](https://github.com/bitsocialnet/bso-resolver#readme)

Quando copi del codice in un progetto, fai riferimento al README upstream: il comportamento del resolver è versionato insieme a quel pacchetto e non insieme a questo sito.
