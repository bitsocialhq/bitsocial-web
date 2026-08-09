---
title: Bitsocial CLI
description: Kommandolinjegrensesnitt for å kjøre en Bitsocial-node, opprette fellesskap og håndtere protokolloperasjoner.
sidebar_position: 2
---

# Bitsocial CLI

`bitsocial-cli` er et kommandolinjeverktøy for å samhandle med backend-en i Bitsocial-protokollen. Med det kan du kjøre en lokal P2P-daemon, opprette og konfigurere fellesskap og publisere innhold -- alt fra terminalen.

Det er bygget på det delte klientlaget for Bitsocial-protokollen og brukes av [5chan](/apps/5chan/) og [Seedit](/apps/seedit/) til å opprette fellesskap og administrere noder.

## Installasjon

Ferdigbygde binærfiler finnes for Windows, macOS og Linux. Last ned den nyeste utgivelsen for plattformen din fra GitHub:

**[Last ned fra GitHub Releases](https://github.com/bitsocialnet/bitsocial-cli/releases)**

Gjør binærfilen kjørbar etter nedlasting (macOS/Linux):

```bash
chmod +x bitsocial
```

## Kjøre daemonen

Den vanligste bruken av CLI-en er å kjøre en Bitsocial-node. Daemonen starter P2P-nettverkslaget og eksponerer et lokalt API som klienter kan koble seg til.

```bash
bitsocial daemon
```

Ved første oppstart skriver daemonen ut lenker til **WebUI**, et nettleserbasert grafisk grensesnitt for å administrere noden, fellesskapene og innstillingene dine. Det er nyttig hvis du foretrekker et GUI framfor terminalkommandoer.

## Sentrale handlinger

| Handling                   | Beskrivelse                                                           |
| -------------------------- | --------------------------------------------------------------------- |
| Start daemonen             | Start Bitsocial-P2P-noden                                             |
| Opprett et fellesskap      | Opprett et nytt fellesskap                                            |
| Rediger et fellesskap      | Oppdater innstillinger for fellesskapet (tittel, beskrivelse, regler) |
| List opp lokale fellesskap | List opp fellesskapene som driftes på denne noden                     |
| Start et fellesskap        | Begynn å servere et bestemt fellesskap                                |
| Stopp et fellesskap        | Slutt å servere et bestemt fellesskap                                 |

Kjør CLI-en med `--help` for å se kommandonavnene og flaggene som den installerte utgivelsen din tilbyr:

```bash
bitsocial --help
bitsocial daemon --help
```

## Typisk arbeidsflyt

En vanlig oppsettsflyt for å drifte et nytt fellesskap:

```bash
# 1. Start the daemon
bitsocial daemon

# 2. In another terminal, inspect the available community-management commands
bitsocial --help
```

Derfra bruker du kommandoene for fellesskapsadministrasjon i den installerte utgivelsen til å opprette, konfigurere og begynne å servere et fellesskap. Når det er startet, er fellesskapet live på Bitsocial-nettverket og tilgjengelig fra kompatible klienter.

## Lenker

- **GitHub:** [bitsocialnet/bitsocial-cli](https://github.com/bitsocialnet/bitsocial-cli)
