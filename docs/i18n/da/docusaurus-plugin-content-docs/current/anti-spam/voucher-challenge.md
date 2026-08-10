---
title: Voucher Challenge
description: Anti-spam-udfordring, der lukker publicering bag unikke voucherkoder uddelt af fællesskabets ejer.
sidebar_position: 3
---

# Voucher Challenge

Voucher Challenge lukker publicering af indhold bag unikke voucherkoder, som fællesskabets ejer uddeler. I stedet for at læne sig op ad automatisk scoring flytter den tilliden over i et manuelt inviteforløb, hvor kendte personer får koder gennem en kanal, som ejeren selv styrer.

- **Kildekode og aktuel README:** [github.com/bitsocialnet/voucher-challenge](https://github.com/bitsocialnet/voucher-challenge#readme)
- **npm-pakke:** [`@bitsocial/voucher-challenge`](https://www.npmjs.com/package/@bitsocial/voucher-challenge)

## Installation

```bash
npm install @bitsocial/voucher-challenge
```

## Sådan fungerer den

1. Fællesskabets ejer genererer en eller flere unikke voucherkoder.
2. Ejeren uddeler koderne til betroede forfattere gennem en kanal efter eget valg (direkte besked, e-mail, personligt osv.).
3. Når en forfatter forsøger at publicere, beder udfordringssystemet om en voucherkode.
4. Koden valideres — er den ægte og endnu ikke brugt, accepteres publikationen.

Hver voucherkode bindes til en bestemt forfatter, når den er indløst, så andre ikke kan genbruge den.

## Aktuel pakkedokumentation

Denne side er bevidst et overblik og ikke en spejlet opsætningsguide. Pakkens README er kilden til sandhed om aktuelle udfordringsnavne, eksempler til Bitsocial CLI, registrering i pkc-js, understøttede indstillinger og adfærd ved indløsning:

- [README for Voucher Challenge](https://github.com/bitsocialnet/voucher-challenge#readme)

Brug den opstrøms README, når du konfigurerer et fællesskab i drift, fordi voucherindstillinger og installationsforløb versioneres sammen med pakken og ikke med dette websted.

## Hvornår den skal bruges

Voucher Challenge egner sig bedst til:

- **Fællesskaber kun for inviterede**, hvor medlemskab bevidst er begrænset.
- **Kuraterede rum**, hvor ejeren personligt godkender hver enkelt deltager.
- **Miljøer med høj tillid**, hvor automatisk spamscoring er unødvendig eller uønsket.

Fordi koderne skal uddeles manuelt, skalerer den ikke til store åbne fællesskaber. I de tilfælde kan du i stedet overveje [Spam Blocker](./spam-blocker.md) eller [EVM Contract Call Challenge](./evm-contract-call.md).
