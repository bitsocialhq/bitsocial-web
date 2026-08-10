---
title: EVM Contract Call Challenge
description: Sfida anti-spam che verifica condizioni on-chain chiamando uno smart contract EVM.
sidebar_position: 4
---

# EVM Contract Call Challenge

EVM Contract Call Challenge verifica lo stato on-chain di un autore prima di consentire una pubblicazione. Chi possiede una comunità può richiedere che un wallet o un'identità risolta soddisfi una condizione di sola lettura su uno smart contract, ad esempio il possesso di un saldo minimo di token, prima di poter pubblicare.

- **Codice sorgente e README aggiornato:** [github.com/bitsocialnet/evm-contract-challenge](https://github.com/bitsocialnet/evm-contract-challenge#readme)
- **Pacchetto npm:** [`@bitsocial/evm-contract-challenge`](https://www.npmjs.com/package/@bitsocial/evm-contract-challenge)

## Installazione

```bash
npm install @bitsocial/evm-contract-challenge
```

## Dove si colloca

Usa questa sfida nelle comunità in cui la partecipazione deve dipendere da un segnale EVM esterno: possesso di token, possesso di NFT, punteggi di proof-of-personhood, appartenenza a un organo di governance o un'altra condizione leggibile da un contratto.

Dal punto di vista dell'autore, una volta configurata la sfida è automatica. Controlla le fonti di wallet o identità ammesse, chiama il metodo del contratto configurato e confronta il valore restituito con la condizione della comunità.

## Riferimento al pacchetto attuale

Questa pagina è volutamente una panoramica, non un riferimento di configurazione replicato. Il README del pacchetto è la fonte di verità per i nomi delle sfide, gli esempi con la CLI di Bitsocial, la registrazione in pkc-js, i valori predefiniti delle opzioni, gli esempi di ABI, il comportamento dell'RPC e le fonti di wallet supportate:

- [README di EVM Contract Challenge](https://github.com/bitsocialnet/evm-contract-challenge#readme)

Quando configuri una comunità in produzione, preferisci il README upstream, perché le opzioni dei contratti e gli esempi sono versionati insieme a quel pacchetto e non a questo sito.

## Quando usarla

EVM Contract Call Challenge è ideale per:

- **Comunità con accesso legato ai token**, che riservano la pubblicazione a chi detiene un token.
- **Accesso legato agli NFT**, dove è richiesto il possesso di un NFT specifico.
- **Spazi di governance DAO**, dove la partecipazione è riservata a chi detiene il token di governance.

Per le comunità che non si basano sull'identità on-chain, valuta invece [Spam Blocker](./spam-blocker.md) o [Voucher Challenge](./voucher-challenge.md).
