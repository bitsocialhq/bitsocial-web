---
title: Défi Voucher
description: Défi anti-spam qui conditionne la publication à des codes voucher uniques distribués par les propriétaires de communauté.
sidebar_position: 3
---

# Défi Voucher

Voucher Challenge conditionne la publication de contenu à des codes voucher uniques distribués par le propriétaire de la communauté. Plutôt que de s'appuyer sur une notation automatisée, il déplace la confiance vers un parcours d'invitation manuel, où des personnes connues reçoivent des codes par un canal que le propriétaire contrôle.

- **Code source et README à jour :** [github.com/bitsocialnet/voucher-challenge](https://github.com/bitsocialnet/voucher-challenge#readme)
- **Package npm :** [`@bitsocial/voucher-challenge`](https://www.npmjs.com/package/@bitsocial/voucher-challenge)

## Installation

```bash
npm install @bitsocial/voucher-challenge
```

## Comment ça marche

1. Le propriétaire d'une communauté génère un ou plusieurs codes voucher uniques.
2. Il distribue ces codes à des auteurs de confiance par le canal de son choix (message direct, e-mail, remise en main propre, etc.).
3. Lorsqu'un auteur tente de publier, le système de défi lui demande un code voucher.
4. Le code est validé : s'il est authentique et n'a pas déjà servi, la publication est acceptée.

Chaque code voucher est lié à un auteur précis dès qu'il est utilisé, ce qui empêche sa réutilisation par d'autres.

## Référence du package actuel

Cette page est volontairement une vue d'ensemble, et non un guide d'installation dupliqué. Le README du package fait autorité pour les noms de défis actuels, les exemples avec la CLI Bitsocial, l'enregistrement dans pkc-js, les options prises en charge et le comportement à l'utilisation des codes :

- [README de Voucher Challenge](https://github.com/bitsocialnet/voucher-challenge#readme)

Privilégiez le README en amont lorsque vous configurez une communauté en production, car les options de voucher et les procédures d'installation sont versionnées avec ce package plutôt qu'avec ce site.

## Quand l'utiliser

Voucher Challenge convient particulièrement aux :

- **Communautés sur invitation uniquement**, dont l'adhésion est volontairement restreinte.
- **Espaces curatés**, où le propriétaire valide personnellement chaque participant.
- **Environnements de forte confiance**, où une notation automatisée du spam est inutile ou indésirable.

Parce qu'il exige une distribution manuelle des codes, il ne passe pas à l'échelle des grandes communautés ouvertes. Dans ces cas-là, envisagez plutôt [Spam Blocker](./spam-blocker.md) ou le [Défi d'appel de contrat EVM](./evm-contract-call.md).
