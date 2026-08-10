---
title: BSO Resolver
description: Resol els noms de domini .bso a claus públiques mitjançant els registres TXT de Bitsocial.
sidebar_position: 1
---

# BSO Resolver

BSO Resolver tradueix els noms de domini `.bso` a les claus públiques corresponents llegint els registres TXT de Bitsocial. És el paquet de resolució que fan servir les eines de Bitsocial quan un nom `.bso` pensat per a les persones s'ha de convertir en el material de claus que entén la pila peer-to-peer.

- **Codi font i README actual:** [github.com/bitsocialnet/bso-resolver](https://github.com/bitsocialnet/bso-resolver#readme)
- **Paquet npm:** [`@bitsocial/bso-resolver`](https://www.npmjs.com/package/@bitsocial/bso-resolver)

## Instal·lació

```bash
npm install @bitsocial/bso-resolver
```

## Quin lloc ocupa

Els noms de Bitsocial volen ser punts d'entrada llegibles per a les persones cap a comunitats i autors. El resolutor manté aquesta capa de noms separada del codi de l'aplicació, de manera que els clients poden preguntar si un nom és compatible i tot seguit resoldre'l a través del punt d'entrada específic de cada entorn d'execució del paquet.

Feu-lo servir quan integreu un client, una eina de línia d'ordres o un servei compatible amb Bitsocial que hagi d'acceptar noms `.bso` i no només claus públiques en brut.

## Referència del paquet actual

Aquesta pàgina és intencionadament una visió general, no una còpia de la referència de l'API. El README del paquet és la font de veritat pel que fa a les opcions del constructor, els tipus de retorn, el comportament de la memòria cau, els punts d'entrada, els exemples de proveïdors i la semàntica d'aturada admesa:

- [README de BSO Resolver](https://github.com/bitsocialnet/bso-resolver#readme)

Quan copieu codi en un projecte, feu servir el README original, perquè el comportament del resolutor es versiona amb aquell paquet i no amb aquest lloc web.
