---
title: Bitsocial CLI
description: Kommandoradsverktyg för att köra en Bitsocial-nod, skapa communities och hantera protokolloperationer.
sidebar_position: 2
---

# Bitsocial CLI

`bitsocial-cli` är ett kommandoradsverktyg för att arbeta mot Bitsocial-protokollets backend. Med det kan du köra en lokal P2P-daemon, skapa och konfigurera communities och publicera innehåll -- allt från terminalen.

Det bygger på det gemensamma klientlagret för Bitsocial-protokollet och används av [5chan](/apps/5chan/) och [Seedit](/apps/seedit/) för att skapa communities och hantera noder.

## Installation

Färdigbyggda binärer finns för Windows, macOS och Linux. Ladda ned den senaste versionen för din plattform från GitHub:

**[Ladda ned från GitHub Releases](https://github.com/bitsocialnet/bitsocial-cli/releases)**

Gör binären körbar efter nedladdningen (macOS/Linux):

```bash
chmod +x bitsocial
```

## Köra daemonen

Den vanligaste användningen av CLI:t är att köra en Bitsocial-nod. Daemonen startar P2P-nätverkslagret och exponerar ett lokalt API som klienter kan ansluta till.

```bash
bitsocial daemon
```

Vid första starten skriver daemonen ut länkar till **WebUI**, ett webbläsarbaserat grafiskt gränssnitt för att hantera din nod, dina communities och dina inställningar. Det är praktiskt om du föredrar ett GUI framför terminalkommandon.

## Viktiga åtgärder

| Åtgärd                   | Beskrivning                                          |
| ------------------------ | ---------------------------------------------------- |
| Starta daemonen          | Starta Bitsocials P2P-nod                            |
| Skapa en community       | Skapa en ny community                                |
| Redigera en community    | Uppdatera inställningar (titel, beskrivning, regler) |
| Lista lokala communities | Lista communities som ligger på den här noden        |
| Starta en community      | Börja leverera en viss community                     |
| Stoppa en community      | Sluta leverera en viss community                     |

Kör CLI:t med `--help` för att se vilka kommandonamn och flaggor din installerade version erbjuder:

```bash
bitsocial --help
bitsocial daemon --help
```

## Typiskt arbetsflöde

Ett vanligt flöde för att börja vara värd för en ny community:

```bash
# 1. Start the daemon
bitsocial daemon

# 2. In another terminal, inspect the available community-management commands
bitsocial --help
```

Därifrån använder du din versions kommandon för community-hantering för att skapa, konfigurera och börja leverera en community. När den väl är igång är communityn live på Bitsocial-nätverket och nåbar från kompatibla klienter.

## Länkar

- **GitHub:** [bitsocialnet/bitsocial-cli](https://github.com/bitsocialnet/bitsocial-cli)
