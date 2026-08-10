---
title: EVM Contract Call Challenge
description: Anti-spam-udfordring, der verificerer on-chain-betingelser ved at kalde en EVM smart contract.
sidebar_position: 4
---

# EVM Contract Call Challenge

EVM Contract Call Challenge kontrollerer en forfatters on-chain-tilstand, før en publikation tillades. Ejere af fællesskaber kan kræve, at en wallet eller en opslået identitet opfylder en skrivebeskyttet betingelse i en smart contract — for eksempel en minimumsbeholdning af et token — før der kan publiceres.

- **Kildekode og aktuel README:** [github.com/bitsocialnet/evm-contract-challenge](https://github.com/bitsocialnet/evm-contract-challenge#readme)
- **npm-pakke:** [`@bitsocial/evm-contract-challenge`](https://www.npmjs.com/package/@bitsocial/evm-contract-challenge)

## Installation

```bash
npm install @bitsocial/evm-contract-challenge
```

## Hvor den passer ind

Brug denne udfordring i fællesskaber, hvor deltagelse skal afhænge af et eksternt EVM-signal: ejerskab af tokens, ejerskab af NFT'er, proof-of-personhood-score, medlemskab af en styringsstruktur eller en anden betingelse, der kan læses fra en kontrakt.

Set fra forfatterens side er udfordringen automatisk, når den først er konfigureret. Den gennemgår de wallet- eller identitetskilder, der kommer i betragtning, kalder den konfigurerede kontraktmetode og sammenligner den returnerede værdi med fællesskabets betingelse.

## Aktuel pakkedokumentation

Denne side er bevidst et overblik og ikke en spejlet konfigurationsreference. Pakkens README er kilden til sandhed om udfordringsnavne, eksempler til Bitsocial CLI, registrering i pkc-js, standardværdier for indstillinger, ABI-eksempler, RPC-adfærd og understøttede wallet-kilder:

- [README for EVM Contract Challenge](https://github.com/bitsocialnet/evm-contract-challenge#readme)

Brug den opstrøms README, når du konfigurerer et fællesskab i drift, fordi kontraktindstillinger og eksempler versioneres sammen med pakken og ikke med dette websted.

## Hvornår den skal bruges

EVM Contract Call Challenge er ideel til:

- **Token-gatede fællesskaber**, der begrænser publicering til indehavere af et token.
- **NFT-gatet adgang**, hvor ejerskab af en bestemt NFT er påkrævet.
- **DAO-styringsrum**, hvor deltagelse er begrænset til indehavere af governance-tokens.

For fællesskaber, der ikke bygger på on-chain-identitet, kan du i stedet overveje [Spam Blocker](./spam-blocker.md) eller [Voucher Challenge](./voucher-challenge.md).
