---
title: Voucher Challenge
description: Repte anti-spam que condiciona la publicació a codis de val únics distribuïts pels propietaris de la comunitat.
sidebar_position: 3
---

# Voucher Challenge

Voucher Challenge condiciona la publicació de contingut a codis de val únics distribuïts pel propietari de la comunitat. En lloc de dependre d'una puntuació automàtica, desplaça la confiança cap a un flux d'invitacions manual, on persones conegudes reben els codis per un canal que el propietari controla.

- **Codi font i README actual:** [github.com/bitsocialnet/voucher-challenge](https://github.com/bitsocialnet/voucher-challenge#readme)
- **Paquet npm:** [`@bitsocial/voucher-challenge`](https://www.npmjs.com/package/@bitsocial/voucher-challenge)

## Instal·lació

```bash
npm install @bitsocial/voucher-challenge
```

## Com funciona

1. El propietari d'una comunitat genera un o més codis de val únics.
2. El propietari distribueix aquests codis a autors de confiança pel canal que triï (missatge directe, correu electrònic, en persona, etc.).
3. Quan un autor intenta publicar, el sistema de reptes li demana un codi de val.
4. El codi es valida: si és autèntic i encara no s'ha fet servir, la publicació s'accepta.

Un cop bescanviat, cada codi de val queda lligat a un autor concret, cosa que n'impedeix la reutilització per part d'altres.

## Referència actual del paquet

Aquesta pàgina és deliberadament una visió general, i no una còpia de la guia de configuració. El README del paquet és la font de veritat per als noms de repte actuals, els exemples de la CLI de Bitsocial, el registre amb pkc-js, les opcions admeses i el comportament de bescanvi:

- [README de Voucher Challenge](https://github.com/bitsocialnet/voucher-challenge#readme)

Consulteu preferentment el README original quan configureu una comunitat en producció, perquè les opcions de vals i els fluxos d'instal·lació es versionen amb aquest paquet i no amb aquest lloc web.

## Quan utilitzar-lo

Voucher Challenge és especialment adequat per a:

- **Comunitats només per invitació**, on la pertinença és restringida de manera intencionada.
- **Espais curats**, on el propietari valida personalment cada participant.
- **Entorns d'alta confiança**, on la puntuació automàtica de correu brossa és innecessària o poc desitjable.

Com que requereix distribuir els codis manualment, no escala a comunitats obertes i grans. Per a aquests casos, valoreu com a alternativa [Bloquejador de correu brossa](./spam-blocker.md) o [EVM Contract Call Challenge](./evm-contract-call.md).
