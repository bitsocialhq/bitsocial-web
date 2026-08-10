---
title: 5chan
description: Een serverloos, gedecentraliseerd imageboard op het Bitsocial-protocol waar iedereen boards kan maken en bezitten.
sidebar_position: 1
---

# 5chan

5chan is een serverloos, beheerdersloos en volledig gedecentraliseerd imageboard dat op het Bitsocial-protocol draait. Het houdt de vertrouwde mapstructuur van imageboards aan en voegt daar gedecentraliseerd eigendom aan toe: iedereen kan een board aanmaken, en meerdere boards kunnen via een stemmechanisme strijden om dezelfde plek in de directory.

## Downloads

| Platform | Link                                   |
| -------- | -------------------------------------- |
| Web      | [5chan.app](https://5chan.app)         |
| Desktop  | Beschikbaar voor Mac, Windows en Linux |
| Mobiel   | Beschikbaar voor Android               |

## Hoe boards werken

5chan ordent inhoud in boards volgens een klassieke mapindeling (bijvoorbeeld `/b/`, `/g/`). Anders dan bij traditionele imageboards, waar één centrale beheerder elk board bestuurt, kan bij 5chan elke gebruiker een eigen board aanmaken en volledig in eigendom houden. Wanneer meerdere boards dezelfde plek in de directory willen, strijden ze via een stemming om die positie.

### Een board aanmaken

Om een nieuw board aan te maken, moet je `bitsocial-cli` als peer-to-peer node draaien. Zo wordt je board op gedecentraliseerde wijze gehost, zonder afhankelijk te zijn van een centrale server.

### Toewijzing van directoryplekken

De toewijzing van directoryplekken (welk board op welk pad verschijnt) verloopt momenteel via pull requests op GitHub naar het bestand `5chan-directories.json`. Dat is een tijdelijke werkwijze: toekomstige releases ondersteunen het aanmaken van boards in de app zelf en stemmen via pubsub, zodat toewijzingen automatisch worden geregeld.

## Onder de motorkap

Intern gebruikt 5chan de gedeelde clientlaag van het Bitsocial-protocol voor al het netwerkverkeer.
De webapp op 5chan.app draait standaard een Helia-node in de browser, waardoor een gewoon tabblad als
peer aan het netwerk deelneemt: het laadt boards van andere peers en publiceert via pubsub, zonder
gecentraliseerde IPFS-gateway in het contentpad. Zie [Peer-to-peer in de browser](/browser-p2p/) voor wat
daarbij komt kijken en wat een browsernode nog steeds niet kan.

## Links

- **GitHub**: [github.com/bitsocialnet/5chan](https://github.com/bitsocialnet/5chan)
- **Telegram**: [t.me/fivechandev](https://t.me/fivechandev)
- **Licentie**: GPL-2.0-only
