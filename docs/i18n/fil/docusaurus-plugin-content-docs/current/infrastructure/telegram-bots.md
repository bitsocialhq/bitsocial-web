---
title: Mga Telegram Bot
description: Mga feed bot na sumusubaybay sa mga listahan ng komunidad ng Bitsocial at nagpapasa ng mga post sa mga Telegram channel.
sidebar_position: 4
---

# Mga Telegram Bot

Sinusubaybayan ng mga Bitsocial Telegram bot ang mga listahan ng komunidad ng client sa Bitsocial network at awtomatikong ipinapasa ang mga bagong post sa mga Telegram channel. Bawat mensaheng ipinapasa ay may kasamang mga inline button na nag-uugnay pabalik sa orihinal na post sa 5chan at Seedit.

- **GitHub**: [bitsocialnet/bitsocial-telegram-bots](https://github.com/bitsocialnet/bitsocial-telegram-bots)

## Mga Available na Bot

| Bot             | Katayuan  | Paglalarawan                                                                                  |
| --------------- | --------- | --------------------------------------------------------------------------------------------- |
| **5chan Feed**  | Aktibo    | Sinusubaybayan ang lahat ng direktoryo ng 5chan at ipinapasa ang mga bagong post sa Telegram. |
| **Seedit Feed** | Nakaplano | Magbibigay ng parehong functionality para sa mga komunidad ng Seedit.                         |

## Pag-setup

### Mga Kinakailangan

- Node.js
- Yarn
- Isang Telegram bot token (gumawa ng isa sa pamamagitan ng [BotFather](https://t.me/BotFather))

### Pag-install

I-clone ang repository at i-install ang mga dependency:

```bash
git clone https://github.com/bitsocialnet/bitsocial-telegram-bots.git
cd bitsocial-telegram-bots
yarn install
```

### Konpigurasyon

Gumawa ng `.env` file sa root ng proyekto na naglalaman ng iyong bot token:

```env
BOT_TOKEN=your_telegram_bot_token
```

### Pagpapatakbo

Simulan ang bot pagkatapos i-configure ang iyong environment:

```bash
yarn start
```

## Format ng Post

Kapag ipinapasa ng bot ang isang post sa Telegram, may kasama itong dalawang inline button:

- **Tingnan sa 5chan** -- Binubuksan ang post sa 5chan web client.
- **Tingnan sa Seedit** -- Binubuksan ang post sa Seedit web client.

Nagbibigay-daan ito sa mga subscriber ng Telegram na tumalon nang diretso sa buong thread ng talakayan sa alinmang client ang mas gusto nila.
