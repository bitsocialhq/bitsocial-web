---
title: Voucher Challenge
description: Anti-spam-utmaning som låser publicering bakom unika voucherkoder som delas ut av communityägare.
sidebar_position: 3
---

# Voucher Challenge

Voucher Challenge låser publicering av innehåll bakom unika voucherkoder som delas ut av communityägaren. I stället för att förlita sig på automatisk poängsättning flyttar den förtroendet till ett manuellt inbjudningsflöde där kända personer får koder via en kanal som ägaren själv kontrollerar.

- **Källkod och aktuell README:** [github.com/bitsocialnet/voucher-challenge](https://github.com/bitsocialnet/voucher-challenge#readme)
- **npm-paket:** [`@bitsocial/voucher-challenge`](https://www.npmjs.com/package/@bitsocial/voucher-challenge)

## Installation

```bash
npm install @bitsocial/voucher-challenge
```

## Så fungerar den

1. En communityägare genererar en eller flera unika voucherkoder.
2. Ägaren delar ut koderna till betrodda författare via valfri kanal (direktmeddelande, e-post, personligen och så vidare).
3. När en författare försöker publicera ber utmaningssystemet om en voucherkod.
4. Koden valideras – om den är äkta och inte redan har använts accepteras publikationen.

Varje voucherkod knyts till en specifik författare när den lösts in, vilket hindrar andra från att återanvända den.

## Aktuell paketreferens

Den här sidan är medvetet en översikt, inte en speglad installationsguide. Paketets README är källan till sanning för aktuella utmaningsnamn, exempel för Bitsocial CLI, registrering i pkc-js, alternativ som stöds och beteende vid inlösen:

- [README för Voucher Challenge](https://github.com/bitsocialnet/voucher-challenge#readme)

Utgå hellre från README:n uppströms när du konfigurerar ett community i drift, eftersom voucheralternativ och installationsflöden versioneras tillsammans med paketet snarare än med den här webbplatsen.

## När den bör användas

Voucher Challenge passar bäst för:

- **Communities med inbjudan** där medlemskapet medvetet är begränsat.
- **Kurerade utrymmen** där ägaren personligen granskar varje deltagare.
- **Miljöer med högt förtroende** där automatisk spampoängsättning är onödig eller oönskad.

Eftersom den kräver manuell distribution av koder skalar den inte till stora öppna communities. För sådana scenarier, överväg [Spam Blocker](./spam-blocker.md) eller [EVM Contract Call Challenge](./evm-contract-call.md) i stället.
