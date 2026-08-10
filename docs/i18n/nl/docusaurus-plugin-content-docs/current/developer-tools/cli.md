---
title: Bitsocial CLI
description: Commandoregelinterface om een Bitsocial-node te draaien, communities aan te maken en protocolhandelingen te beheren.
sidebar_position: 2
---

# Bitsocial CLI

De `bitsocial-cli` is een commandoregeltool om met de protocolbackend van Bitsocial te werken. Je draait er een lokale P2P-daemon mee, maakt communities aan en configureert ze, en publiceert inhoud -- allemaal vanuit de terminal.

De tool is gebouwd op de gedeelde clientlaag van het Bitsocial-protocol en wordt door [5chan](/apps/5chan/) en [Seedit](/apps/seedit/) gebruikt om communities aan te maken en nodes te beheren.

## Installatie

Er zijn kant-en-klare binaries voor Windows, macOS en Linux. Download de nieuwste release voor jouw platform van GitHub:

**[Downloaden via GitHub Releases](https://github.com/bitsocialnet/bitsocial-cli/releases)**

Maak de binary na het downloaden uitvoerbaar (macOS/Linux):

```bash
chmod +x bitsocial
```

## De daemon draaien

De CLI wordt het vaakst gebruikt om een Bitsocial-node te draaien. De daemon start de P2P-netwerklaag en biedt een lokale API waarmee clients verbinding kunnen maken.

```bash
bitsocial daemon
```

Bij de eerste start toont de daemon links naar de **WebUI**, een grafische interface in de browser om je node, communities en instellingen te beheren. Handig als je liever een GUI gebruikt dan terminalcommando's.

## Belangrijkste handelingen

| Handeling                | Beschrijving                                                   |
| ------------------------ | -------------------------------------------------------------- |
| De daemon starten        | De P2P-node van Bitsocial starten                              |
| Een community aanmaken   | Een nieuwe community aanmaken                                  |
| Een community bewerken   | Community-instellingen bijwerken (titel, beschrijving, regels) |
| Lokale communities tonen | De communities tonen die op deze node worden gehost            |
| Een community starten    | Een specifieke community gaan bedienen                         |
| Een community stoppen    | Een specifieke community niet langer bedienen                  |

Voer de CLI uit met `--help` om de commandonamen en vlaggen te zien die jouw geïnstalleerde release aanbiedt:

```bash
bitsocial --help
bitsocial daemon --help
```

## Typische werkwijze

Een gebruikelijke opzet voor het hosten van een nieuwe community:

```bash
# 1. Start the daemon
bitsocial daemon

# 2. In another terminal, inspect the available community-management commands
bitsocial --help
```

Gebruik van daaruit de community-beheercommando's van je geïnstalleerde release om een community aan te maken, te configureren en te gaan bedienen. Zodra de community draait, is die live op het Bitsocial-netwerk en bereikbaar vanuit compatibele clients.

## Links

- **GitHub:** [bitsocialnet/bitsocial-cli](https://github.com/bitsocialnet/bitsocial-cli)
