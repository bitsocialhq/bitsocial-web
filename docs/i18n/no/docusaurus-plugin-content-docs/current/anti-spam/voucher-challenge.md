---
title: Voucher-utfordring
description: Anti-spam-utfordring som sperrer publisering bak unike voucher-koder som deles ut av fellesskapseiere.
sidebar_position: 3
---

# Voucher-utfordring

Voucher-utfordringen sperrer publisering av innhold bak unike voucher-koder som deles ut av fellesskapseieren. I stedet for å basere seg på automatisk poenggiving flytter den tilliten over til en manuell invitasjonsflyt, der kjente personer får koder gjennom en kanal eieren selv kontrollerer.

- **Kildekode og gjeldende README:** [github.com/bitsocialnet/voucher-challenge](https://github.com/bitsocialnet/voucher-challenge#readme)
- **npm-pakke:** [`@bitsocial/voucher-challenge`](https://www.npmjs.com/package/@bitsocial/voucher-challenge)

## Installasjon

```bash
npm install @bitsocial/voucher-challenge
```

## Slik fungerer den

1. En fellesskapseier genererer én eller flere unike voucher-koder.
2. Eieren deler kodene ut til betrodde forfattere gjennom en kanal de selv velger (direktemelding, e-post, personlig overlevering osv.).
3. Når en forfatter forsøker å publisere, ber utfordringssystemet om en voucher-kode.
4. Koden valideres – er den ekte og ikke allerede brukt, godtas publiseringen.

Hver voucher-kode knyttes til én bestemt forfatter når den først er innløst, slik at andre ikke kan bruke den om igjen.

## Gjeldende pakkereferanse

Denne siden er bevisst en oversikt, ikke en speilet oppsettsguide. Pakkens README er kilden til sannhet for gjeldende utfordringsnavn, eksempler med Bitsocial CLI, registrering i pkc-js, støttede alternativer og innløsningsoppførsel:

- [README for Voucher Challenge](https://github.com/bitsocialnet/voucher-challenge#readme)

Foretrekk README-en oppstrøms når du konfigurerer et aktivt fellesskap, fordi voucher-alternativer og installasjonsflyter versjoneres sammen med pakken og ikke med dette nettstedet.

## Når den bør brukes

Voucher-utfordringen passer best for:

- **Fellesskap kun for inviterte** der medlemskapet bevisst er begrenset.
- **Kuraterte rom** der eieren personlig vurderer hver eneste deltaker.
- **Miljøer med høy tillit** der automatisk spam-poenggiving er unødvendig eller uønsket.

Fordi den krever manuell utdeling av koder, skalerer den ikke til store åpne fellesskap. I slike tilfeller kan du i stedet vurdere [Spam Blocker](./spam-blocker.md) eller [EVM-kontraktkallutfordringen](./evm-contract-call.md).
