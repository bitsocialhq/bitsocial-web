---
title: Botët e Telegramit
description: Bot-e feed-i që monitorojnë listat e komuniteteve Bitsocial dhe i përcjellin postimet në kanalet e Telegramit.
sidebar_position: 4
---

# Botët e Telegramit

Botët e Bitsocial për Telegram monitorojnë listat e komuniteteve të klientëve në rrjetin Bitsocial dhe i përcjellin automatikisht postimet e reja në kanalet e Telegramit. Çdo mesazh i përcjellë përmban butona inline që të kthejnë te postimi origjinal në 5chan dhe në Seedit.

- **GitHub**: [bitsocialnet/bitsocial-telegram-bots](https://github.com/bitsocialnet/bitsocial-telegram-bots)

## Botët e Disponueshëm

| Boti            | Statusi       | Përshkrimi                                                                        |
| --------------- | ------------- | --------------------------------------------------------------------------------- |
| **5chan Feed**  | Aktiv         | Monitoron të gjitha direktoritë e 5chan dhe përcjell postimet e reja në Telegram. |
| **Seedit Feed** | I planifikuar | Do të ofrojë të njëjtin funksionalitet për komunitetet e Seedit.                  |

## Përgatitja

### Parakushtet

- Node.js
- Yarn
- Një token boti të Telegramit (krijoni një të tillë përmes [BotFather](https://t.me/BotFather))

### Instalimi

Klononi depon dhe instaloni varësitë:

```bash
git clone https://github.com/bitsocialnet/bitsocial-telegram-bots.git
cd bitsocial-telegram-bots
yarn install
```

### Konfigurimi

Krijoni një skedar `.env` në rrënjën e projektit me token-in e botit tuaj:

```env
BOT_TOKEN=your_telegram_bot_token
```

### Ekzekutimi

Nisni botin pasi të keni konfiguruar mjedisin tuaj:

```bash
yarn start
```

## Formati i Postimit

Kur boti përcjell një postim në Telegram, ai përfshin dy butona inline:

- **Shihe në 5chan** -- Hap postimin në klientin ueb të 5chan.
- **Shihe në Seedit** -- Hap postimin në klientin ueb të Seedit.

Kjo u lejon abonentëve në Telegram të kalojnë drejtpërdrejt te fija e plotë e diskutimit, në atë klient që preferojnë.
