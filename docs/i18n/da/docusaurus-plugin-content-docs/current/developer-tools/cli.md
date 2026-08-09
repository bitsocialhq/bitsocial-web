---
title: Bitsocial CLI
description: Kommandolinjeværktøj til at køre en Bitsocial-node, oprette fællesskaber og styre protokoloperationer.
sidebar_position: 2
---

# Bitsocial CLI

`bitsocial-cli` er et kommandolinjeværktøj til at arbejde med Bitsocial-protokollens backend. Det lader dig køre en lokal P2P-dæmon, oprette og konfigurere fællesskaber og publicere indhold -- alt sammen fra terminalen.

Det er bygget oven på det fælles klientlag til Bitsocial-protokollen og bruges af [5chan](/apps/5chan/) og [Seedit](/apps/seedit/) til oprettelse af fællesskaber og administration af noder.

## Installation

Der findes færdigbyggede binærfiler til Windows, macOS og Linux. Hent den nyeste udgivelse til din platform fra GitHub:

**[Download fra GitHub Releases](https://github.com/bitsocialnet/bitsocial-cli/releases)**

Når du har hentet den, skal du gøre binærfilen eksekverbar (macOS/Linux):

```bash
chmod +x bitsocial
```

## Kørsel af dæmonen

Den mest almindelige brug af CLI'en er at køre en Bitsocial-node. Dæmonen starter P2P-netværkslaget og eksponerer et lokalt API, som klienter kan forbinde til.

```bash
bitsocial daemon
```

Ved første start udskriver dæmonen links til **WebUI'en**, en browserbaseret grafisk grænseflade til at administrere din node, dine fællesskaber og dine indstillinger. Det er nyttigt, hvis du foretrækker en GUI frem for terminalkommandoer.

## Vigtige handlinger

| Handling                | Beskrivelse                                                      |
| ----------------------- | ---------------------------------------------------------------- |
| Start dæmonen           | Start Bitsocial-P2P-noden                                        |
| Opret et fællesskab     | Opret et nyt fællesskab                                          |
| Rediger et fællesskab   | Opdater fællesskabets indstillinger (titel, beskrivelse, regler) |
| Vis lokale fællesskaber | Vis de fællesskaber, der hostes på denne node                    |
| Start et fællesskab     | Begynd at servere et bestemt fællesskab                          |
| Stop et fællesskab      | Stop med at servere et bestemt fællesskab                        |

Kør CLI'en med `--help` for at se de aktuelle kommandonavne og flag, som din installerede udgivelse stiller til rådighed:

```bash
bitsocial --help
bitsocial daemon --help
```

## Typisk arbejdsgang

Et almindeligt opsætningsforløb for at hoste et nyt fællesskab:

```bash
# 1. Start the daemon
bitsocial daemon

# 2. In another terminal, inspect the available community-management commands
bitsocial --help
```

Derfra bruger du den installerede udgivelses kommandoer til fællesskabsadministration til at oprette, konfigurere og begynde at servere et fællesskab. Når det er startet, er fællesskabet live på Bitsocial-netværket og tilgængeligt fra kompatible klienter.

## Links

- **GitHub:** [bitsocialnet/bitsocial-cli](https://github.com/bitsocialnet/bitsocial-cli)
