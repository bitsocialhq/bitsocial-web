---
title: Bots de Telegram
description: Bots de canal que supervisen les llistes de comunitats de Bitsocial i reenvien les publicacions a canals de Telegram.
sidebar_position: 4
---

# Bots de Telegram

Els bots de Telegram de Bitsocial supervisen les llistes de comunitats dels clients a la xarxa Bitsocial i reenvien automàticament les publicacions noves a canals de Telegram. Cada missatge reenviat inclou botons en línia que enllacen amb la publicació original a 5chan i a Seedit.

- **GitHub**: [bitsocialnet/bitsocial-telegram-bots](https://github.com/bitsocialnet/bitsocial-telegram-bots)

## Bots disponibles

| Bot                 | Estat   | Descripció                                                                          |
| ------------------- | ------- | ----------------------------------------------------------------------------------- |
| **Canal de 5chan**  | Actiu   | Supervisa tots els directoris de 5chan i reenvia les publicacions noves a Telegram. |
| **Canal de Seedit** | Previst | Oferirà la mateixa funcionalitat per a les comunitats de Seedit.                    |

## Posada en marxa

### Requisits previs

- Node.js
- Yarn
- Un token de bot de Telegram (creeu-ne un amb [BotFather](https://t.me/BotFather))

### Instal·lació

Cloneu el repositori i instal·leu les dependències:

```bash
git clone https://github.com/bitsocialnet/bitsocial-telegram-bots.git
cd bitsocial-telegram-bots
yarn install
```

### Configuració

Creeu un fitxer `.env` a l'arrel del projecte amb el token del vostre bot:

```env
BOT_TOKEN=your_telegram_bot_token
```

### Execució

Inicieu el bot un cop hàgiu configurat l'entorn:

```bash
yarn start
```

## Format de les publicacions

Quan el bot reenvia una publicació a Telegram, hi inclou dos botons en línia:

- **Veure a 5chan** — obre la publicació al client web de 5chan.
- **Veure a Seedit** — obre la publicació al client web de Seedit.

Així els subscriptors de Telegram poden saltar directament al fil de discussió complet al client que prefereixin.
