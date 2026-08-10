---
title: Défi d'appel de contrat EVM
description: Défi anti-spam qui vérifie des conditions on-chain en appelant un contrat intelligent EVM.
sidebar_position: 4
---

# Défi d'appel de contrat EVM

EVM Contract Call Challenge vérifie l'état on-chain d'un auteur avant d'autoriser une publication. Les propriétaires de communauté peuvent exiger qu'un portefeuille ou une identité résolue satisfasse une condition de contrat intelligent en lecture seule, par exemple détenir un solde minimum de tokens, avant de publier.

- **Code source et README à jour :** [github.com/bitsocialnet/evm-contract-challenge](https://github.com/bitsocialnet/evm-contract-challenge#readme)
- **Package npm :** [`@bitsocial/evm-contract-challenge`](https://www.npmjs.com/package/@bitsocial/evm-contract-challenge)

## Installation

```bash
npm install @bitsocial/evm-contract-challenge
```

## Où il s'inscrit

Utilisez ce défi pour les communautés dont la participation doit dépendre d'un signal EVM externe : détention de tokens, détention de NFT, score de preuve d'humanité, appartenance à une gouvernance ou toute autre condition lisible par un contrat.

Une fois configuré, le défi est automatique du point de vue de l'auteur. Il examine les portefeuilles ou sources d'identité éligibles, appelle la méthode de contrat configurée et compare la valeur renvoyée à la condition posée par la communauté.

## Référence du package actuel

Cette page est volontairement une vue d'ensemble, et non une référence de configuration dupliquée. Le README du package fait autorité pour les noms de défis, les exemples avec la CLI Bitsocial, l'enregistrement dans pkc-js, les valeurs par défaut des options, les exemples d'ABI, le comportement RPC et les sources de portefeuille prises en charge :

- [README d'EVM Contract Challenge](https://github.com/bitsocialnet/evm-contract-challenge#readme)

Privilégiez le README en amont lorsque vous configurez une communauté en production, car les options de contrat et les exemples sont versionnés avec ce package plutôt qu'avec ce site.

## Quand l'utiliser

EVM Contract Call Challenge est idéal pour :

- **Les communautés conditionnées par un token**, qui réservent la publication aux détenteurs de ce token.
- **L'accès conditionné par un NFT**, lorsque la détention d'un NFT précis est requise.
- **Les espaces de gouvernance DAO**, où la participation est réservée aux détenteurs du token de gouvernance.

Pour les communautés qui ne reposent pas sur une identité on-chain, envisagez plutôt [Spam Blocker](./spam-blocker.md) ou le [Défi Voucher](./voucher-challenge.md).
