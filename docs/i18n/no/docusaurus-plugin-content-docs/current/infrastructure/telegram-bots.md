---
title: Telegram-boter
description: Feed-boter som overvåker fellesskapslister på Bitsocial og videresender innlegg til Telegram-kanaler.
sidebar_position: 4
---

# Telegram-boter

Bitsocials Telegram-boter overvåker klientenes fellesskapslister på Bitsocial-nettverket og videresender automatisk nye innlegg til Telegram-kanaler. Hver videresendte melding har innebygde knapper som lenker tilbake til det opprinnelige innlegget på 5chan og Seedit.

- **GitHub**: [bitsocialnet/bitsocial-telegram-bots](https://github.com/bitsocialnet/bitsocial-telegram-bots)

## Tilgjengelige boter

| Bot             | Status   | Beskrivelse                                                              |
| --------------- | -------- | ------------------------------------------------------------------------ |
| **5chan Feed**  | Aktiv    | Overvåker alle 5chan-kataloger og videresender nye innlegg til Telegram. |
| **Seedit Feed** | Planlagt | Vil gi den samme funksjonaliteten for Seedit-fellesskap.                 |

## Oppsett

### Forutsetninger

- Node.js
- Yarn
- Et Telegram-bot-token (opprett ett via [BotFather](https://t.me/BotFather))

### Installasjon

Klon repoet og installer avhengighetene:

```bash
git clone https://github.com/bitsocialnet/bitsocial-telegram-bots.git
cd bitsocial-telegram-bots
yarn install
```

### Konfigurasjon

Opprett en `.env`-fil i prosjektroten med bot-tokenet ditt:

```env
BOT_TOKEN=your_telegram_bot_token
```

### Kjøring

Start boten når miljøet er satt opp:

```bash
yarn start
```

## Innleggsformat

Når boten videresender et innlegg til Telegram, legger den ved to innebygde knapper:

- **Vis på 5chan** -- Åpner innlegget i 5chan-nettklienten.
- **Vis på Seedit** -- Åpner innlegget i Seedit-nettklienten.

Slik kan Telegram-abonnenter hoppe rett til hele diskusjonstråden i den klienten de selv foretrekker.
