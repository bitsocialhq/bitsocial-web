---
title: EVM Contract Call Challenge
description: Antispam-challenge die on-chain voorwaarden verifieert door een EVM-smartcontract aan te roepen.
sidebar_position: 4
---

# EVM Contract Call Challenge

EVM Contract Call Challenge controleert de on-chain status van een auteur voordat een publicatie wordt toegestaan. Eigenaren van een community kunnen eisen dat een wallet of een herleide identiteit aan een alleen-lezen voorwaarde uit een smartcontract voldoet, bijvoorbeeld een minimaal tokensaldo, voordat er geplaatst mag worden.

- **Broncode en actuele README:** [github.com/bitsocialnet/evm-contract-challenge](https://github.com/bitsocialnet/evm-contract-challenge#readme)
- **npm-pakket:** [`@bitsocial/evm-contract-challenge`](https://www.npmjs.com/package/@bitsocial/evm-contract-challenge)

## Installatie

```bash
npm install @bitsocial/evm-contract-challenge
```

## Waar het past

Gebruik deze challenge voor community's waar deelname zou moeten afhangen van een extern EVM-signaal: tokenbezit, NFT-bezit, proof-of-personhood-scores, lidmaatschap van een bestuursorgaan of een andere voorwaarde die uit een contract te lezen is.

Vanuit het perspectief van de auteur verloopt de challenge automatisch zodra ze is ingesteld. Ze controleert de in aanmerking komende wallet- of identiteitsbronnen, roept de ingestelde contractmethode aan en vergelijkt de teruggegeven waarde met de voorwaarde van de community.

## Actuele pakketdocumentatie

Deze pagina is bewust een overzicht en geen gekopieerde configuratiehandleiding. De README van het pakket is de bron van waarheid voor namen van challenges, voorbeelden met de Bitsocial CLI, registratie in pkc-js, standaardwaarden van opties, ABI-voorbeelden, RPC-gedrag en ondersteunde walletbronnen:

- [README van EVM Contract Challenge](https://github.com/bitsocialnet/evm-contract-challenge#readme)

Gebruik bij voorkeur de upstream README wanneer je een live community configureert, omdat contractopties en voorbeelden met dat pakket meeversioneren en niet met deze website.

## Wanneer je het gebruikt

EVM Contract Call Challenge is ideaal voor:

- **Token-gated community's** die plaatsen beperken tot houders van een token.
- **NFT-gated toegang** waarbij bezit van een specifieke NFT vereist is.
- **DAO-bestuursruimtes** waar deelname beperkt is tot houders van de governancetoken.

Voor community's die niet op on-chain identiteit leunen, kun je in plaats daarvan [Spam Blocker](./spam-blocker.md) of [Voucher Challenge](./voucher-challenge.md) overwegen.
