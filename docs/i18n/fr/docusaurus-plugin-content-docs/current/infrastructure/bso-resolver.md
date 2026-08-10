---
title: BSO Resolver
description: Résolvez les noms de domaine .bso en clés publiques grâce aux enregistrements TXT Bitsocial.
sidebar_position: 1
---

# BSO Resolver

BSO Resolver traduit les noms de domaine `.bso` en leurs clés publiques correspondantes, en lisant les enregistrements TXT Bitsocial. C'est le paquet de résolution qu'utilise l'outillage Bitsocial lorsqu'un nom `.bso` destiné aux utilisateurs doit devenir le matériel de clé compris par la pile peer-to-peer.

- **Code source et README à jour :** [github.com/bitsocialnet/bso-resolver](https://github.com/bitsocialnet/bso-resolver#readme)
- **Paquet npm :** [`@bitsocial/bso-resolver`](https://www.npmjs.com/package/@bitsocial/bso-resolver)

## Installation

```bash
npm install @bitsocial/bso-resolver
```

## Où il s'insère

Les noms Bitsocial sont pensés comme des points d'entrée lisibles par des humains vers les communautés et les auteurs. Le résolveur garde cette couche de nommage séparée du code applicatif : les clients peuvent ainsi demander si un nom est pris en charge, puis le résoudre via le point d'entrée propre à leur environnement d'exécution.

Utilisez-le lorsque vous intégrez un client, un outil en ligne de commande ou un service compatible Bitsocial qui doit accepter des noms `.bso` et pas seulement des clés publiques brutes.

## Référence du paquet à jour

Cette page est volontairement une vue d'ensemble, et non une copie de la référence d'API. Le README du paquet fait autorité pour les options du constructeur, les types de retour, le comportement de mise en cache, les points d'entrée, les exemples de fournisseurs et la sémantique d'arrêt prise en charge :

- [README de BSO Resolver](https://github.com/bitsocialnet/bso-resolver#readme)

Privilégiez le README amont lorsque vous copiez du code dans un projet, car le comportement du résolveur est versionné avec ce paquet et non avec ce site.
