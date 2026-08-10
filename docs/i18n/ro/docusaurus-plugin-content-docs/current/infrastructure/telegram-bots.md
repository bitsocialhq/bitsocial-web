---
title: Boți Telegram
description: Boți de flux care monitorizează listele de comunități Bitsocial și trimit postările în canale Telegram.
sidebar_position: 4
---

# Boți Telegram

Boții Telegram ai Bitsocial monitorizează listele de comunități ale clienților din rețeaua Bitsocial și trimit automat postările noi în canale Telegram. Fiecare mesaj retrimis include butoane inline care duc înapoi la postarea originală de pe 5chan și Seedit.

- **GitHub**: [bitsocialnet/bitsocial-telegram-bots](https://github.com/bitsocialnet/bitsocial-telegram-bots)

## Boți disponibili

| Bot             | Stare      | Descriere                                                                    |
| --------------- | ---------- | ---------------------------------------------------------------------------- |
| **5chan Feed**  | Activ      | Monitorizează toate directoarele 5chan și trimite postările noi în Telegram. |
| **Seedit Feed** | Planificat | Va oferi aceeași funcționalitate pentru comunitățile Seedit.                 |

## Configurare

### Cerințe preliminare

- Node.js
- Yarn
- Un token de bot Telegram (creați unul prin [BotFather](https://t.me/BotFather))

### Instalare

Clonați depozitul și instalați dependențele:

```bash
git clone https://github.com/bitsocialnet/bitsocial-telegram-bots.git
cd bitsocial-telegram-bots
yarn install
```

### Configurarea mediului

Creați un fișier `.env` în rădăcina proiectului, cu tokenul botului:

```env
BOT_TOKEN=your_telegram_bot_token
```

### Rulare

Porniți botul după ce ați configurat mediul:

```bash
yarn start
```

## Formatul postării

Când botul trimite o postare în Telegram, aceasta include două butoane inline:

- **Vezi pe 5chan** -- Deschide postarea în clientul web 5chan.
- **Vezi pe Seedit** -- Deschide postarea în clientul web Seedit.

Astfel, abonații Telegram pot ajunge direct la firul complet de discuție, în clientul pe care îl preferă.
