---
title: 5chan
description: En serverløs, desentralisert bildetavle bygget på Bitsocial-protokollen der hvem som helst kan opprette og eie tavler.
sidebar_position: 1
---

# 5chan

5chan er en serverløs bildetavle uten administrator, fullstendig desentralisert og drevet av Bitsocial-protokollen. Den følger den velkjente katalogstrukturen fra bildetavler, men innfører desentralisert eierskap – hvem som helst kan opprette en tavle, og flere tavler kan konkurrere om den samme katalogplassen gjennom en avstemningsmekanisme.

## Nedlastinger

| Plattform | Lenke                                  |
| --------- | -------------------------------------- |
| Web       | [5chan.app](https://5chan.app)         |
| Desktop   | Tilgjengelig for Mac, Windows og Linux |
| Mobil     | Tilgjengelig for Android               |

## Slik fungerer tavler

5chan organiserer innhold i tavler med et klassisk katalogoppsett (f.eks. `/b/`, `/g/`). I motsetning til tradisjonelle bildetavler, der én sentral administrator styrer hver tavle, lar 5chan hvilken som helst bruker opprette og eie sin egen tavle fullt ut. Når flere tavler sikter mot den samme katalogplassen, konkurrerer de om plasseringen gjennom avstemning.

### Opprette en tavle

For å opprette en ny tavle må du kjøre `bitsocial-cli` som en peer-to-peer-node. Slik blir tavlen din hostet på en desentralisert måte, uten å være avhengig av noen sentral server.

### Katalogtildelinger

Tildeling av katalogplasser (hvilken tavle som vises på hvilken sti) håndteres foreløpig gjennom pull requests på GitHub til filen `5chan-directories.json`. Dette er en midlertidig prosess – fremtidige versjoner vil støtte oppretting av tavler direkte i appen og pubsub-basert avstemning som håndterer katalogtildelinger automatisk.

## Under panseret

5chan bruker det delte klientlaget for Bitsocial-protokollen til nettverkskommunikasjonen sin.
Nettappen på 5chan.app kjører som standard en Helia-node i nettleseren, slik at en helt vanlig fane
blir med i nettverket som en peer: den henter tavler fra andre peers og publiserer over pubsub, uten
en sentralisert IPFS-gateway i innholdsbanen. Se [Nettleser-P2P](/browser-p2p/) for hva det
innebærer, og hva en nettlesernode fortsatt ikke kan gjøre.

## Lenker

- **GitHub**: [github.com/bitsocialnet/5chan](https://github.com/bitsocialnet/5chan)
- **Telegram**: [t.me/fivechandev](https://t.me/fivechandev)
- **Lisens**: GPL-2.0-only
