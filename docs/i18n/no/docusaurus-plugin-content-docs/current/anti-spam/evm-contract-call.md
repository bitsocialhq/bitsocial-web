---
title: EVM-kontraktkallutfordring
description: Anti-spam-utfordring som verifiserer betingelser på kjeden ved å kalle en EVM-smartkontrakt.
sidebar_position: 4
---

# EVM-kontraktkallutfordring

EVM-kontraktkallutfordringen verifiserer en forfatters tilstand på kjeden før en publisering tillates. Fellesskapseiere kan kreve at en lommebok eller en oppslått identitet oppfyller en skrivebeskyttet betingelse i en smartkontrakt, for eksempel å ha en minstebeholdning av et token, før det kan publiseres.

- **Kildekode og gjeldende README:** [github.com/bitsocialnet/evm-contract-challenge](https://github.com/bitsocialnet/evm-contract-challenge#readme)
- **npm-pakke:** [`@bitsocial/evm-contract-challenge`](https://www.npmjs.com/package/@bitsocial/evm-contract-challenge)

## Installasjon

```bash
npm install @bitsocial/evm-contract-challenge
```

## Hvor den passer inn

Bruk denne utfordringen i fellesskap der deltakelse skal avhenge av et eksternt EVM-signal: tokeneierskap, NFT-eierskap, poeng for proof-of-personhood, medlemskap i styring eller en annen betingelse som kan leses fra en kontrakt.

Sett fra forfatterens side er utfordringen automatisk når den først er satt opp. Den sjekker aktuelle lommebok- eller identitetskilder, kaller den konfigurerte kontraktmetoden og sammenligner verdien som returneres, mot fellesskapets betingelse.

## Gjeldende pakkereferanse

Denne siden er bevisst en oversikt, ikke en speilet konfigurasjonsreferanse. Pakkens README er kilden til sannhet for utfordringsnavn, eksempler med Bitsocial CLI, registrering i pkc-js, standardverdier for alternativer, ABI-eksempler, RPC-oppførsel og støttede lommebokkilder:

- [README for EVM Contract Challenge](https://github.com/bitsocialnet/evm-contract-challenge#readme)

Foretrekk README-en oppstrøms når du konfigurerer et aktivt fellesskap, fordi kontraktalternativer og eksempler versjoneres sammen med pakken og ikke med dette nettstedet.

## Når den bør brukes

EVM-kontraktkallutfordringen passer godt for:

- **Token-avgrensede fellesskap** som begrenser publisering til dem som eier et token.
- **NFT-avgrenset tilgang** der eierskap til en bestemt NFT kreves.
- **DAO-styringsrom** der deltakelse er begrenset til dem som eier styringstokener.

For fellesskap som ikke baserer seg på identitet på kjeden, kan du i stedet vurdere [Spam Blocker](./spam-blocker.md) eller [Voucher-utfordringen](./voucher-challenge.md).
