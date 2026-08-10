---
title: Bitsocial CLI
description: Kommandozeilenwerkzeug zum Betreiben eines Bitsocial-Knotens, zum Erstellen von Communities und zum Verwalten von Protokolloperationen.
sidebar_position: 2
---

# Bitsocial CLI

`bitsocial-cli` ist ein Kommandozeilenwerkzeug für die Arbeit mit dem Backend des Bitsocial-Protokolls. Damit betreiben Sie einen lokalen P2P-Daemon, erstellen und konfigurieren Communities und veröffentlichen Inhalte – alles direkt im Terminal.

Es baut auf der gemeinsamen Client-Schicht des Bitsocial-Protokolls auf und wird von [5chan](/apps/5chan/) und [Seedit](/apps/seedit/) zum Erstellen von Communities und zur Knotenverwaltung genutzt.

## Installation

Für Windows, macOS und Linux stehen vorgefertigte Binärdateien bereit. Laden Sie die neueste Version für Ihre Plattform von GitHub herunter:

**[Download über GitHub Releases](https://github.com/bitsocialnet/bitsocial-cli/releases)**

Machen Sie die Binärdatei nach dem Herunterladen ausführbar (macOS/Linux):

```bash
chmod +x bitsocial
```

## Den Daemon betreiben

Am häufigsten wird die CLI genutzt, um einen Bitsocial-Knoten zu betreiben. Der Daemon startet die P2P-Netzwerkschicht und stellt eine lokale API bereit, mit der sich Clients verbinden können.

```bash
bitsocial daemon
```

Beim ersten Start gibt der Daemon Links zur **WebUI** aus, einer browserbasierten grafischen Oberfläche zur Verwaltung von Knoten, Communities und Einstellungen. Das ist praktisch, wenn Sie eine GUI den Terminalbefehlen vorziehen.

## Wichtige Aktionen

| Aktion                       | Beschreibung                                                        |
| ---------------------------- | ------------------------------------------------------------------- |
| Den Daemon starten           | Den Bitsocial-P2P-Knoten starten                                    |
| Eine Community erstellen     | Eine neue Community anlegen                                         |
| Eine Community bearbeiten    | Community-Einstellungen aktualisieren (Titel, Beschreibung, Regeln) |
| Lokale Communities auflisten | Auf diesem Knoten gehostete Communities auflisten                   |
| Eine Community starten       | Eine bestimmte Community ausliefern                                 |
| Eine Community stoppen       | Die Auslieferung einer bestimmten Community beenden                 |

Rufen Sie die CLI mit `--help` auf, um die Befehlsnamen und Optionen Ihrer installierten Version zu sehen:

```bash
bitsocial --help
bitsocial daemon --help
```

## Typischer Ablauf

Ein üblicher Einrichtungsablauf, um eine neue Community zu hosten:

```bash
# 1. Start the daemon
bitsocial daemon

# 2. In another terminal, inspect the available community-management commands
bitsocial --help
```

Nutzen Sie von dort aus die Community-Verwaltungsbefehle Ihrer installierten Version, um eine Community anzulegen, zu konfigurieren und auszuliefern. Sobald sie gestartet ist, ist die Community im Bitsocial-Netzwerk live und aus kompatiblen Clients erreichbar.

## Links

- **GitHub:** [bitsocialnet/bitsocial-cli](https://github.com/bitsocialnet/bitsocial-cli)
