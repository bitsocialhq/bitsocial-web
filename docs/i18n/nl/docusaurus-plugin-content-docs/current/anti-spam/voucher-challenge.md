---
title: Voucher Challenge
description: Antispam-challenge die publiceren afschermt achter unieke vouchercodes die community-eigenaren uitdelen.
sidebar_position: 3
---

# Voucher Challenge

Voucher Challenge schermt het publiceren van inhoud af achter unieke vouchercodes die de eigenaar van de community uitdeelt. In plaats van te leunen op geautomatiseerde scores verschuift het vertrouwen naar een handmatig uitnodigingsproces, waarbij bekende mensen een code krijgen via een kanaal dat de eigenaar zelf beheert.

- **Broncode en actuele README:** [github.com/bitsocialnet/voucher-challenge](https://github.com/bitsocialnet/voucher-challenge#readme)
- **npm-pakket:** [`@bitsocial/voucher-challenge`](https://www.npmjs.com/package/@bitsocial/voucher-challenge)

## Installatie

```bash
npm install @bitsocial/voucher-challenge
```

## Hoe het werkt

1. De eigenaar van een community genereert een of meer unieke vouchercodes.
2. De eigenaar deelt die codes uit aan vertrouwde auteurs via een kanaal naar keuze (direct bericht, e-mail, persoonlijk, enzovoort).
3. Wanneer een auteur probeert te publiceren, vraagt het challengesysteem om een vouchercode.
4. De code wordt gevalideerd -- is hij echt en nog niet gebruikt, dan wordt de publicatie geaccepteerd.

Elke vouchercode wordt na inwisseling aan één specifieke auteur gekoppeld, zodat anderen hem niet opnieuw kunnen gebruiken.

## Actuele pakketdocumentatie

Deze pagina is bewust een overzicht en geen gekopieerde installatiehandleiding. De README van het pakket is de bron van waarheid voor de actuele namen van challenges, voorbeelden met de Bitsocial CLI, registratie in pkc-js, ondersteunde opties en het gedrag bij inwisselen:

- [README van Voucher Challenge](https://github.com/bitsocialnet/voucher-challenge#readme)

Gebruik bij voorkeur de upstream README wanneer je een live community configureert, omdat voucheropties en installatiestappen met dat pakket meeversioneren en niet met deze website.

## Wanneer je het gebruikt

Voucher Challenge past het best bij:

- **Community's op uitnodiging** waar het lidmaatschap bewust beperkt blijft.
- **Zorgvuldig samengestelde ruimtes** waar de eigenaar elke deelnemer persoonlijk beoordeelt.
- **Omgevingen met veel onderling vertrouwen** waar geautomatiseerde spamscores overbodig of ongewenst zijn.

Omdat codes handmatig verspreid moeten worden, schaalt het niet naar grote, open community's. Overweeg voor die situaties [Spam Blocker](./spam-blocker.md) of [EVM Contract Call Challenge](./evm-contract-call.md).
