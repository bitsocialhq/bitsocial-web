---
title: Telegram-Bots
description: Feed-Bots, die Bitsocial-Community-Listen überwachen und Beiträge an Telegram-Kanäle weiterleiten.
sidebar_position: 4
---

# Telegram-Bots

Die Bitsocial-Telegram-Bots überwachen die Community-Listen der Clients im Bitsocial-Netzwerk und leiten neue Beiträge automatisch in Telegram-Kanäle weiter. Jede weitergeleitete Nachricht enthält Inline-Schaltflächen, die zurück zum ursprünglichen Beitrag auf 5chan und Seedit führen.

- **GitHub**: [bitsocialnet/bitsocial-telegram-bots](https://github.com/bitsocialnet/bitsocial-telegram-bots)

## Verfügbare Bots

| Bot             | Status  | Beschreibung                                                                    |
| --------------- | ------- | ------------------------------------------------------------------------------- |
| **5chan Feed**  | Aktiv   | Überwacht alle 5chan-Verzeichnisse und leitet neue Beiträge an Telegram weiter. |
| **Seedit Feed** | Geplant | Wird dieselbe Funktion für Seedit-Communities bereitstellen.                    |

## Einrichtung

### Voraussetzungen

- Node.js
- Yarn
- Ein Telegram-Bot-Token (über [BotFather](https://t.me/BotFather) anlegen)

### Installation

Repository klonen und Abhängigkeiten installieren:

```bash
git clone https://github.com/bitsocialnet/bitsocial-telegram-bots.git
cd bitsocial-telegram-bots
yarn install
```

### Konfiguration

Legen Sie im Projektverzeichnis eine `.env`-Datei mit Ihrem Bot-Token an:

```env
BOT_TOKEN=your_telegram_bot_token
```

### Ausführen

Starten Sie den Bot, nachdem Sie die Umgebung konfiguriert haben:

```bash
yarn start
```

## Beitragsformat

Wenn der Bot einen Beitrag an Telegram weiterleitet, enthält dieser zwei Inline-Schaltflächen:

- **Auf 5chan ansehen** – Öffnet den Beitrag im 5chan-Webclient.
- **Auf Seedit ansehen** – Öffnet den Beitrag im Seedit-Webclient.

So springen Telegram-Abonnenten direkt zum vollständigen Diskussionsstrang in dem Client, den sie bevorzugen.
