---
title: BSO Resolver
description: Slå upp .bso-domännamn till publika nycklar via Bitsocials TXT-poster.
sidebar_position: 1
---

# BSO Resolver

BSO Resolver översätter `.bso`-domännamn till motsvarande publika nycklar genom att läsa Bitsocials TXT-poster. Det är resolverpaketet som Bitsocials verktyg använder när ett `.bso`-namn som visas för användaren ska bli det nyckelmaterial som peer-to-peer-stacken förstår.

- **Källkod och aktuell README:** [github.com/bitsocialnet/bso-resolver](https://github.com/bitsocialnet/bso-resolver#readme)
- **npm-paket:** [`@bitsocial/bso-resolver`](https://www.npmjs.com/package/@bitsocial/bso-resolver)

## Installation

```bash
npm install @bitsocial/bso-resolver
```

## Var det passar in

Bitsocial-namn är tänkta att vara läsbara ingångar till communities och skribenter. Resolvern håller det namnlagret skilt från applikationskoden, så att klienter först kan fråga om ett namn stöds och sedan slå upp det via paketets runtime-specifika ingångspunkt.

Använd den när du bygger en Bitsocial-medveten klient, ett kommandoradsverktyg eller en tjänst som behöver kunna ta emot `.bso`-namn och inte bara råa publika nycklar.

## Aktuell paketreferens

Den här sidan är medvetet en översikt och inte en spegling av API-referensen. Paketets README är källan till sanning för konstruktoralternativ, returtyper, cachningsbeteende, ingångspunkter, leverantörsexempel och semantiken för nedstängning:

- [README för BSO Resolver](https://github.com/bitsocialnet/bso-resolver#readme)

Utgå från README uppströms när du kopierar kod till ett projekt, eftersom resolverns beteende versionshanteras med paketet och inte med den här webbplatsen.
