---
title: Boti pro Telegram
description: Feedoví boti, kteří sledují seznamy komunit Bitsocial a přeposílají příspěvky do kanálů na Telegramu.
sidebar_position: 4
---

# Boti pro Telegram

Boti Bitsocial pro Telegram sledují klientské seznamy komunit v síti Bitsocial a automaticky přeposílají nové příspěvky do kanálů na Telegramu. Každá přeposlaná zpráva obsahuje vložená tlačítka, která vedou zpět na původní příspěvek na 5chan a Seedit.

- **GitHub**: [bitsocialnet/bitsocial-telegram-bots](https://github.com/bitsocialnet/bitsocial-telegram-bots)

## Dostupní boti

| Bot             | Stav      | Popis                                                                  |
| --------------- | --------- | ---------------------------------------------------------------------- |
| **5chan Feed**  | Aktivní   | Sleduje všechny adresáře 5chan a přeposílá nové příspěvky na Telegram. |
| **Seedit Feed** | Plánováno | Nabídne stejnou funkci pro komunity na Seeditu.                        |

## Nastavení

### Předpoklady

- Node.js
- Yarn
- Token bota pro Telegram (vytvoříte ho přes [BotFather](https://t.me/BotFather))

### Instalace

Naklonujte repozitář a nainstalujte závislosti:

```bash
git clone https://github.com/bitsocialnet/bitsocial-telegram-bots.git
cd bitsocial-telegram-bots
yarn install
```

### Konfigurace

V kořeni projektu vytvořte soubor `.env` s tokenem svého bota:

```env
BOT_TOKEN=your_telegram_bot_token
```

### Spuštění

Po nastavení prostředí bota spusťte:

```bash
yarn start
```

## Formát příspěvku

Když bot přeposílá příspěvek na Telegram, přidá k němu dvě vložená tlačítka:

- **Zobrazit na 5chan** – otevře příspěvek ve webovém klientu 5chan.
- **Zobrazit na Seedit** – otevře příspěvek ve webovém klientu Seedit.

Odběratelé na Telegramu tak mohou přejít rovnou na celé diskusní vlákno v tom klientu, který jim vyhovuje víc.
