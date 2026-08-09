---
title: Voucher Challenge
description: Roskapostin torjuntahaaste, joka sulkee julkaisemisen yhteisön omistajien jakamien yksilöllisten kuponkikoodien taakse.
sidebar_position: 3
---

# Voucher Challenge

Voucher Challenge sulkee sisällön julkaisemisen yhteisön omistajan jakamien yksilöllisten kuponkikoodien taakse. Automaattisen pisteytyksen sijaan se siirtää luottamuksen manuaaliseen kutsuprosessiin, jossa tunnetut ihmiset saavat koodinsa omistajan hallitseman kanavan kautta.

- **Lähdekoodi ja ajantasainen README:** [github.com/bitsocialnet/voucher-challenge](https://github.com/bitsocialnet/voucher-challenge#readme)
- **npm-paketti:** [`@bitsocial/voucher-challenge`](https://www.npmjs.com/package/@bitsocial/voucher-challenge)

## Asennus

```bash
npm install @bitsocial/voucher-challenge
```

## Miten se toimii

1. Yhteisön omistaja luo yhden tai useamman yksilöllisen kuponkikoodin.
2. Omistaja jakaa koodit luottamilleen kirjoittajille valitsemaansa kanavaa pitkin (yksityisviesti, sähköposti, kasvokkain ja niin edelleen).
3. Kun kirjoittaja yrittää julkaista, haastejärjestelmä pyytää häneltä kuponkikoodia.
4. Koodi tarkistetaan -- jos se on aito eikä sitä ole vielä käytetty, julkaisu hyväksytään.

Jokainen kuponkikoodi sidotaan lunastuksen yhteydessä tiettyyn kirjoittajaan, mikä estää muita käyttämästä sitä uudelleen.

## Paketin ajantasainen dokumentaatio

Tämä sivu on tarkoituksella yleiskatsaus, ei peilattu asennusopas. Paketin README on luotettava lähde ajantasaisille haasteiden nimille, Bitsocial CLI -esimerkeille, pkc-js-rekisteröinnille, tuetuille asetuksille ja lunastuksen toiminnalle:

- [Voucher Challenge -paketin README](https://github.com/bitsocialnet/voucher-challenge#readme)

Suosi alkuperäistä README-tiedostoa, kun määrität käytössä olevaa yhteisöä, koska kuponkiasetukset ja asennustavat versioidaan kyseisen paketin mukana eikä tämän sivuston mukana.

## Milloin sitä kannattaa käyttää

Voucher Challenge sopii parhaiten seuraaviin:

- **Vain kutsulla toimivat yhteisöt**, joissa jäsenyyttä on tarkoituksella rajoitettu.
- **Kuratoidut tilat**, joissa omistaja tarkastaa jokaisen osallistujan henkilökohtaisesti.
- **Korkean luottamuksen ympäristöt**, joissa automaattinen roskapostipisteytys on tarpeetonta tai ei-toivottua.

Koska koodit on jaettava käsin, malli ei skaalaudu suuriin avoimiin yhteisöihin. Niitä varten harkitse sen sijaan vaihtoehtoja [Roskapostin esto](./spam-blocker.md) tai [EVM Contract Call Challenge](./evm-contract-call.md).
