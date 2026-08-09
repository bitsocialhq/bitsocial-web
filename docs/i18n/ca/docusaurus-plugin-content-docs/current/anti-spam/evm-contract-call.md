---
title: EVM Contract Call Challenge
description: Repte anti-spam que verifica condicions a la cadena cridant un contracte intel·ligent EVM.
sidebar_position: 4
---

# EVM Contract Call Challenge

EVM Contract Call Challenge verifica l'estat a la cadena d'un autor abans de permetre-li publicar. Els propietaris de comunitats poden exigir que una cartera o una identitat resolta compleixi una condició de contracte intel·ligent només de lectura, com ara tenir un saldo mínim de tokens, abans de publicar.

- **Codi font i README actual:** [github.com/bitsocialnet/evm-contract-challenge](https://github.com/bitsocialnet/evm-contract-challenge#readme)
- **Paquet npm:** [`@bitsocial/evm-contract-challenge`](https://www.npmjs.com/package/@bitsocial/evm-contract-challenge)

## Instal·lació

```bash
npm install @bitsocial/evm-contract-challenge
```

## On encaixa

Feu servir aquest repte en comunitats on la participació hagi de dependre d'un senyal EVM extern: propietat de tokens, propietat d'NFT, puntuacions de prova de personalitat, pertinença a una governança o qualsevol altra condició llegible des d'un contracte.

Un cop configurat, el repte és automàtic des del punt de vista de l'autor. Comprova les fonts de cartera o d'identitat elegibles, crida el mètode de contracte configurat i compara el valor retornat amb la condició de la comunitat.

## Referència actual del paquet

Aquesta pàgina és deliberadament una visió general, i no una còpia de la referència de configuració. El README del paquet és la font de veritat per als noms de repte, els exemples de la CLI de Bitsocial, el registre amb pkc-js, els valors per defecte de les opcions, els exemples d'ABI, el comportament de l'RPC i les fonts de cartera admeses:

- [README d'EVM Contract Challenge](https://github.com/bitsocialnet/evm-contract-challenge#readme)

Consulteu preferentment el README original quan configureu una comunitat en producció, perquè les opcions de contracte i els exemples es versionen amb aquest paquet i no amb aquest lloc web.

## Quan utilitzar-lo

EVM Contract Call Challenge és ideal per a:

- **Comunitats amb accés per token** que restringeixen la publicació a qui té tokens.
- **Accés restringit per NFT**, on cal ser propietari d'un NFT concret.
- **Espais de governança de DAO**, on la participació es limita a qui té tokens de governança.

Per a comunitats que no depenen de la identitat a la cadena, valoreu com a alternativa [Bloquejador de correu brossa](./spam-blocker.md) o [Voucher Challenge](./voucher-challenge.md).
