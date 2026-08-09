---
title: Bot Telegram
description: Bot di feed che monitorano gli elenchi di comunità Bitsocial e inoltrano i post ai canali Telegram.
sidebar_position: 4
---

# Bot Telegram

I bot Telegram di Bitsocial monitorano gli elenchi di comunità dei client sulla rete Bitsocial e inoltrano automaticamente i nuovi post nei canali Telegram. Ogni messaggio inoltrato include pulsanti inline che rimandano al post originale su 5chan e Seedit.

- **GitHub**: [bitsocialnet/bitsocial-telegram-bots](https://github.com/bitsocialnet/bitsocial-telegram-bots)

## Bot disponibili

| Bot             | Stato       | Descrizione                                                              |
| --------------- | ----------- | ------------------------------------------------------------------------ |
| **5chan Feed**  | Attivo      | Monitora tutte le directory di 5chan e inoltra i nuovi post su Telegram. |
| **Seedit Feed** | Pianificato | Offrirà la stessa funzionalità per le comunità Seedit.                   |

## Preparazione

### Prerequisiti

- Node.js
- Yarn
- Un token per bot Telegram (creane uno tramite [BotFather](https://t.me/BotFather))

### Installazione

Clona il repository e installa le dipendenze:

```bash
git clone https://github.com/bitsocialnet/bitsocial-telegram-bots.git
cd bitsocial-telegram-bots
yarn install
```

### Configurazione

Crea un file `.env` nella radice del progetto con il token del tuo bot:

```env
BOT_TOKEN=your_telegram_bot_token
```

### Esecuzione

Avvia il bot dopo aver configurato l'ambiente:

```bash
yarn start
```

## Formato dei post

Quando il bot inoltra un post su Telegram, include due pulsanti inline:

- **Visualizza su 5chan** -- Apre il post nel client web di 5chan.
- **Visualizza su Seedit** -- Apre il post nel client web di Seedit.

Così chi è iscritto al canale Telegram può passare direttamente al thread di discussione completo sul client che preferisce.
