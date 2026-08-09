---
title: Telegram-bottar
description: Flödesbottar som bevakar Bitsocials community-listor och vidarebefordrar inlägg till Telegram-kanaler.
sidebar_position: 4
---

# Telegram-bottar

Bitsocials Telegram-bottar bevakar klienternas community-listor på Bitsocial-nätverket och vidarebefordrar automatiskt nya inlägg till Telegram-kanaler. Varje vidarebefordrat meddelande innehåller inbyggda knappar som länkar tillbaka till originalinlägget på 5chan och Seedit.

- **GitHub**: [bitsocialnet/bitsocial-telegram-bots](https://github.com/bitsocialnet/bitsocial-telegram-bots)

## Tillgängliga bottar

| Bott            | Status   | Beskrivning                                                        |
| --------------- | -------- | ------------------------------------------------------------------ |
| **5chan Feed**  | Aktiv    | Bevakar alla 5chan-kataloger och skickar nya inlägg till Telegram. |
| **Seedit Feed** | Planerad | Kommer att erbjuda samma funktion för Seedit-communities.          |

## Installation

### Förutsättningar

- Node.js
- Yarn
- En bottoken för Telegram (skapa en via [BotFather](https://t.me/BotFather))

### Installera

Klona förvaret och installera beroendena:

```bash
git clone https://github.com/bitsocialnet/bitsocial-telegram-bots.git
cd bitsocial-telegram-bots
yarn install
```

### Konfiguration

Skapa en `.env`-fil i projektroten med din bottoken:

```env
BOT_TOKEN=your_telegram_bot_token
```

### Körning

Starta botten när miljön är konfigurerad:

```bash
yarn start
```

## Inläggsformat

När botten vidarebefordrar ett inlägg till Telegram följer två inbyggda knappar med:

- **Visa på 5chan** -- Öppnar inlägget i webbklienten för 5chan.
- **Visa på Seedit** -- Öppnar inlägget i webbklienten för Seedit.

Det låter Telegram-prenumeranter hoppa direkt till hela diskussionstråden i den klient de föredrar.
