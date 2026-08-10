---
title: EVM Contract Call Challenge
description: Anti-spam-utmaning som verifierar villkor on-chain genom att anropa ett smart kontrakt på EVM.
sidebar_position: 4
---

# EVM Contract Call Challenge

EVM Contract Call Challenge verifierar en författares tillstånd on-chain innan en publikation tillåts. Communityägare kan kräva att en plånbok eller en upplöst identitet uppfyller ett skrivskyddat villkor i ett smart kontrakt, till exempel att inneha ett visst minsta tokensaldo, innan något publiceras.

- **Källkod och aktuell README:** [github.com/bitsocialnet/evm-contract-challenge](https://github.com/bitsocialnet/evm-contract-challenge#readme)
- **npm-paket:** [`@bitsocial/evm-contract-challenge`](https://www.npmjs.com/package/@bitsocial/evm-contract-challenge)

## Installation

```bash
npm install @bitsocial/evm-contract-challenge
```

## Var det passar in

Använd den här utmaningen för communities där deltagande ska bero på en extern EVM-signal: tokeninnehav, NFT-innehav, proof-of-personhood-poäng, medlemskap i en styrningsstruktur eller något annat villkor som går att läsa från ett kontrakt.

Utmaningen är automatisk ur författarens perspektiv när den väl är konfigurerad. Den kontrollerar godkända plånboks- eller identitetskällor, anropar den konfigurerade kontraktsmetoden och jämför det returnerade värdet mot communityns villkor.

## Aktuell paketreferens

Den här sidan är medvetet en översikt, inte en speglad konfigurationsreferens. Paketets README är källan till sanning för utmaningsnamn, exempel för Bitsocial CLI, registrering i pkc-js, standardvärden för alternativ, ABI-exempel, RPC-beteende och plånbokskällor som stöds:

- [README för EVM Contract Challenge](https://github.com/bitsocialnet/evm-contract-challenge#readme)

Utgå hellre från README:n uppströms när du konfigurerar ett community i drift, eftersom kontraktsalternativ och exempel versioneras tillsammans med paketet snarare än med den här webbplatsen.

## När den bör användas

EVM Contract Call Challenge passar utmärkt för:

- **Token-gated communities** som begränsar publicering till tokeninnehavare.
- **NFT-baserad åtkomst** där innehav av en specifik NFT krävs.
- **DAO-styrda utrymmen** där deltagandet är begränsat till innehavare av styrningstoken.

För communities som inte bygger på identitet on-chain, överväg [Spam Blocker](./spam-blocker.md) eller [Voucher Challenge](./voucher-challenge.md) i stället.
