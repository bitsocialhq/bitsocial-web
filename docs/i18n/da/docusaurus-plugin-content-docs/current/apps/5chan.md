---
title: 5chan
description: Et serverløst, decentraliseret imageboard bygget på Bitsocial-protokollen, hvor alle kan oprette og eje boards.
sidebar_position: 1
---

# 5chan

5chan er et serverløst, administratorløst og fuldt decentraliseret imageboard, der kører på Bitsocial-protokollen. Det følger den velkendte katalogstruktur fra imageboards, men tilføjer decentraliseret ejerskab — alle kan oprette et board, og flere boards kan konkurrere om den samme plads i kataloget gennem en afstemningsmekanisme.

## Downloads

| Platform | Link                                  |
| -------- | ------------------------------------- |
| Web      | [5chan.app](https://5chan.app)        |
| Desktop  | Tilgængelig til Mac, Windows og Linux |
| Mobil    | Tilgængelig til Android               |

## Sådan fungerer boards

5chan organiserer indhold i boards ved hjælp af et klassisk katalogopsæt (f.eks. `/b/`, `/g/`). I modsætning til traditionelle imageboards, hvor en central administrator styrer hvert board, lader 5chan enhver bruger oprette og fuldt ud eje sit eget board. Når flere boards sigter mod den samme plads i kataloget, konkurrerer de om positionen gennem afstemning.

### Sådan opretter du et board

For at oprette et nyt board skal du køre `bitsocial-cli` som en peer-to-peer-node. Det sikrer, at dit board hostes decentraliseret uden at læne sig op ad nogen central server.

### Tildeling af katalogpladser

Tildelingen af katalogpladser (hvilket board der vises på hvilken sti) styres i øjeblikket gennem pull requests på GitHub til filen `5chan-directories.json`. Det er en midlertidig proces — kommende udgivelser vil understøtte oprettelse af boards direkte i appen samt pubsub-baseret afstemning, så tildelingerne håndteres automatisk.

## Interne detaljer

Under motorhjelmen bruger 5chan det fælles klientlag i Bitsocial-protokollen til sine
netværksinteraktioner. Webappen på 5chan.app kører som standard en Helia-node i browseren, så en
helt almindelig fane tilslutter sig netværket som peer: den henter boards fra andre peers og
publicerer over pubsub, uden en centraliseret IPFS-gateway i indholdsstien. Se
[Peer-to-peer i browseren](/browser-p2p/) for, hvad det indebærer, og hvad en browsernode fortsat
ikke kan.

## Links

- **GitHub**: [github.com/bitsocialnet/5chan](https://github.com/bitsocialnet/5chan)
- **Telegram**: [t.me/fivechandev](https://t.me/fivechandev)
- **Licens**: GPL-2.0-only
