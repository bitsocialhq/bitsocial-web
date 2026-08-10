---
title: 5chan
description: En serverlös, decentraliserad imageboard byggd på Bitsocial-protokollet där vem som helst kan skapa och äga boards.
sidebar_position: 1
---

# 5chan

5chan är en serverlös, adminlös och fullständigt decentraliserad imageboard som körs på Bitsocial-protokollet. Den följer den välbekanta katalogstrukturen från imageboards men inför decentraliserat ägande — vem som helst kan skapa en board, och flera boards kan konkurrera om samma katalogplats genom en röstningsmekanism.

## Nedladdningar

| Plattform | Länk                                   |
| --------- | -------------------------------------- |
| Webb      | [5chan.app](https://5chan.app)         |
| Dator     | Tillgänglig för Mac, Windows och Linux |
| Mobil     | Tillgänglig för Android                |

## Så fungerar boards

5chan organiserar innehåll i boards med en klassisk kataloglayout (t.ex. `/b/`, `/g/`). Till skillnad från traditionella imageboards där en central administratör styr varje board kan vilken användare som helst skapa och fullt ut äga sin egen board på 5chan. När flera boards siktar på samma katalogplats konkurrerar de om den positionen genom röstning.

### Skapa en board

För att skapa en ny board behöver du köra `bitsocial-cli` som en peer-to-peer-nod. Det säkerställer att din board hostas decentraliserat utan att förlita sig på någon central server.

### Katalogtilldelningar

Tilldelningen av katalogplatser (vilken board som visas på vilken sökväg) hanteras för närvarande genom pull requests på GitHub till filen `5chan-directories.json`. Det är en tillfällig process — kommande versioner kommer att stödja skapande av boards direkt i appen och pubsub-baserad röstning som sköter katalogtilldelningarna automatiskt.

## Interna detaljer

Under huven använder 5chan det delade klientlagret för Bitsocial-protokollet för sina
nätverksinteraktioner. Webbappen på 5chan.app kör som standard en Helia-nod i webbläsaren, så en
vanlig flik ansluter till nätverket som en peer: den läser in boards från andra peers och publicerar
över pubsub, utan någon centraliserad IPFS-gateway i innehållets väg. Se
[Peer-to-peer i webbläsaren](/browser-p2p/) för vad det innebär och vad en webbläsarnod fortfarande
inte kan göra.

## Länkar

- **GitHub**: [github.com/bitsocialnet/5chan](https://github.com/bitsocialnet/5chan)
- **Telegram**: [t.me/fivechandev](https://t.me/fivechandev)
- **Licens**: GPL-2.0-only
