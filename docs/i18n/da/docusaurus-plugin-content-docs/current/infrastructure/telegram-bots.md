---
title: Telegram-bots
description: Feed-bots, der overvåger Bitsocial-fællesskabslister og videresender indlæg til Telegram-kanaler.
sidebar_position: 4
---

# Telegram-bots

Bitsocials Telegram-bots overvåger klienternes fællesskabslister på Bitsocial-netværket og videresender automatisk nye indlæg til Telegram-kanaler. Hver videresendt besked indeholder indlejrede knapper, der linker tilbage til det oprindelige indlæg på 5chan og Seedit.

- **GitHub**: [bitsocialnet/bitsocial-telegram-bots](https://github.com/bitsocialnet/bitsocial-telegram-bots)

## Tilgængelige bots

| Bot             | Status   | Beskrivelse                                                             |
| --------------- | -------- | ----------------------------------------------------------------------- |
| **5chan Feed**  | Aktiv    | Overvåger alle 5chan-kataloger og videresender nye indlæg til Telegram. |
| **Seedit Feed** | Planlagt | Vil levere den samme funktionalitet for Seedit-fællesskaber.            |

## Opsætning

### Forudsætninger

- Node.js
- Yarn
- Et Telegram-bot-token (opret et via [BotFather](https://t.me/BotFather))

### Installation

Klon depotet og installer afhængighederne:

```bash
git clone https://github.com/bitsocialnet/bitsocial-telegram-bots.git
cd bitsocial-telegram-bots
yarn install
```

### Konfiguration

Opret en `.env`-fil i projektets rod med dit bot-token:

```env
BOT_TOKEN=your_telegram_bot_token
```

### Kørsel

Start botten, når du har konfigureret dit miljø:

```bash
yarn start
```

## Indlægsformat

Når botten videresender et indlæg til Telegram, indeholder beskeden to indlejrede knapper:

- **Vis på 5chan** -- Åbner indlægget i 5chan-webklienten.
- **Vis på Seedit** -- Åbner indlægget i Seedit-webklienten.

Det lader Telegram-abonnenter hoppe direkte til hele diskussionstråden i den klient, de foretrækker.
