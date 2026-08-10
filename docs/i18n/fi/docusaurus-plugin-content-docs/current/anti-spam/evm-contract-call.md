---
title: EVM Contract Call Challenge
description: Roskapostin torjuntahaaste, joka tarkistaa ketjussa olevat ehdot kutsumalla EVM-älysopimusta.
sidebar_position: 4
---

# EVM Contract Call Challenge

EVM Contract Call Challenge tarkistaa kirjoittajan ketjussa olevan tilan ennen kuin julkaisu sallitaan. Yhteisön omistajat voivat vaatia, että lompakko tai selvitetty identiteetti täyttää vain lukemiseen perustuvan älysopimusehdon, kuten tietyn vähimmäissaldon, ennen julkaisemista.

- **Lähdekoodi ja ajantasainen README:** [github.com/bitsocialnet/evm-contract-challenge](https://github.com/bitsocialnet/evm-contract-challenge#readme)
- **npm-paketti:** [`@bitsocial/evm-contract-challenge`](https://www.npmjs.com/package/@bitsocial/evm-contract-challenge)

## Asennus

```bash
npm install @bitsocial/evm-contract-challenge
```

## Mihin se sopii

Käytä tätä haastetta yhteisöissä, joissa osallistumisen kuuluu riippua ulkoisesta EVM-signaalista: tokenin omistuksesta, NFT:n omistuksesta, ihmisyyden todentavista pisteistä, hallintojäsenyydestä tai jostain muusta sopimuksesta luettavasta ehdosta.

Kun haaste on kerran määritetty, se toimii kirjoittajan näkökulmasta automaattisesti. Se tarkistaa kelvolliset lompakko- tai identiteettilähteet, kutsuu määritettyä sopimusmetodia ja vertaa palautettua arvoa yhteisön asettamaan ehtoon.

## Paketin ajantasainen dokumentaatio

Tämä sivu on tarkoituksella yleiskatsaus, ei peilattu asetusviite. Paketin README on luotettava lähde haasteiden nimille, Bitsocial CLI -esimerkeille, pkc-js-rekisteröinnille, asetusten oletusarvoille, ABI-esimerkeille, RPC-käyttäytymiselle ja tuetuille lompakkolähteille:

- [EVM Contract Challenge -paketin README](https://github.com/bitsocialnet/evm-contract-challenge#readme)

Suosi alkuperäistä README-tiedostoa, kun määrität käytössä olevaa yhteisöä, koska sopimusasetukset ja esimerkit versioidaan kyseisen paketin mukana eikä tämän sivuston mukana.

## Milloin sitä kannattaa käyttää

EVM Contract Call Challenge sopii erinomaisesti seuraaviin:

- **Tokenilla rajatut yhteisöt**, joissa julkaiseminen on rajattu tokenin haltijoihin.
- **NFT:llä rajattu pääsy**, jossa vaaditaan tietyn NFT:n omistusta.
- **DAO-hallintotilat**, joissa osallistuminen on rajattu hallintotokenin haltijoihin.

Jos yhteisö ei nojaa ketjussa olevaan identiteettiin, harkitse sen sijaan vaihtoehtoja [Roskapostin esto](./spam-blocker.md) tai [Voucher Challenge](./voucher-challenge.md).
