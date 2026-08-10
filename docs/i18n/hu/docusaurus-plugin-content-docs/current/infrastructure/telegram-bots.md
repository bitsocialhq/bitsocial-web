---
title: Telegram botok
description: Feed botok, amelyek figyelik a Bitsocial közösséglistákat, és továbbítják a bejegyzéseket Telegram csatornákba.
sidebar_position: 4
---

# Telegram botok

A Bitsocial Telegram botjai figyelik a kliensek közösséglistáit a Bitsocial hálózaton, és automatikusan továbbítják az új bejegyzéseket Telegram csatornákba. Minden továbbított üzenet olyan beágyazott gombokat tartalmaz, amelyek visszavezetnek az eredeti bejegyzésre az 5chanen és a Seediten.

- **GitHub**: [bitsocialnet/bitsocial-telegram-bots](https://github.com/bitsocialnet/bitsocial-telegram-bots)

## Elérhető botok

| Bot             | Állapot   | Leírás                                                                              |
| --------------- | --------- | ----------------------------------------------------------------------------------- |
| **5chan Feed**  | Aktív     | Figyeli az összes 5chan könyvtárat, és továbbítja az új bejegyzéseket a Telegramra. |
| **Seedit Feed** | Tervezett | Ugyanezt fogja nyújtani a Seedit közösségekhez.                                     |

## Beállítás

### Előfeltételek

- Node.js
- Yarn
- Egy Telegram bot token (hozzon létre egyet a [BotFather](https://t.me/BotFather) segítségével)

### Telepítés

Klónozza a tárolót, és telepítse a függőségeket:

```bash
git clone https://github.com/bitsocialnet/bitsocial-telegram-bots.git
cd bitsocial-telegram-bots
yarn install
```

### Konfiguráció

Hozzon létre egy `.env` fájlt a projekt gyökerében a bot tokenjével:

```env
BOT_TOKEN=your_telegram_bot_token
```

### Futtatás

A környezet beállítása után indítsa el a botot:

```bash
yarn start
```

## A bejegyzések formátuma

Amikor a bot továbbít egy bejegyzést a Telegramra, két beágyazott gombot helyez el rajta:

- **Megtekintés az 5chanen** -- Megnyitja a bejegyzést az 5chan webes kliensében.
- **Megtekintés a Seediten** -- Megnyitja a bejegyzést a Seedit webes kliensében.

Így a Telegram-feliratkozók közvetlenül a teljes beszélgetésszálhoz ugorhatnak azon a kliensen, amelyiket előnyben részesítik.
