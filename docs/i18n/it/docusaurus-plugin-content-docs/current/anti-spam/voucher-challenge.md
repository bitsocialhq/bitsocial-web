---
title: Voucher Challenge
description: Sfida anti-spam che subordina la pubblicazione a codici voucher univoci distribuiti da chi possiede la comunità.
sidebar_position: 3
---

# Voucher Challenge

Voucher Challenge subordina la pubblicazione dei contenuti a codici voucher univoci distribuiti da chi possiede la comunità. Invece di affidarsi a un punteggio automatico, sposta la fiducia su un flusso di inviti manuale, in cui persone conosciute ricevono i codici attraverso un canale controllato dal proprietario.

- **Codice sorgente e README aggiornato:** [github.com/bitsocialnet/voucher-challenge](https://github.com/bitsocialnet/voucher-challenge#readme)
- **Pacchetto npm:** [`@bitsocial/voucher-challenge`](https://www.npmjs.com/package/@bitsocial/voucher-challenge)

## Installazione

```bash
npm install @bitsocial/voucher-challenge
```

## Come funziona

1. Chi possiede la comunità genera uno o più codici voucher univoci.
2. Il proprietario distribuisce quei codici agli autori fidati attraverso il canale che preferisce (messaggio diretto, email, di persona e così via).
3. Quando un autore prova a pubblicare, il sistema di sfida gli chiede un codice voucher.
4. Il codice viene convalidato -- se è autentico e non è già stato usato, la pubblicazione viene accettata.

Una volta riscattato, ogni codice voucher resta legato a un autore specifico e non può essere riutilizzato da altri.

## Riferimento al pacchetto attuale

Questa pagina è volutamente una panoramica, non una guida di configurazione replicata. Il README del pacchetto è la fonte di verità per i nomi attuali delle sfide, gli esempi con la CLI di Bitsocial, la registrazione in pkc-js, le opzioni supportate e il comportamento del riscatto:

- [README di Voucher Challenge](https://github.com/bitsocialnet/voucher-challenge#readme)

Quando configuri una comunità in produzione, preferisci il README upstream, perché le opzioni dei voucher e le procedure di installazione sono versionate insieme a quel pacchetto e non a questo sito.

## Quando usarla

Voucher Challenge è particolarmente adatta a:

- **Comunità su invito**, dove l'appartenenza è volutamente ristretta.
- **Spazi curati**, dove il proprietario valuta personalmente ogni partecipante.
- **Ambienti ad alta fiducia**, dove un punteggio anti-spam automatico è superfluo o indesiderato.

Poiché richiede la distribuzione manuale dei codici, non scala a grandi comunità aperte. Per quegli scenari, valuta invece [Spam Blocker](./spam-blocker.md) o [EVM Contract Call Challenge](./evm-contract-call.md).
