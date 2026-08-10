---
title: Telegram-bots
description: Feedbots die de communitylijsten van Bitsocial volgen en berichten doorsturen naar Telegram-kanalen.
sidebar_position: 4
---

# Telegram-bots

De Telegram-bots van Bitsocial volgen de communitylijsten van clients op het Bitsocial-netwerk en sturen nieuwe berichten automatisch door naar Telegram-kanalen. Elk doorgestuurd bericht bevat inline knoppen die terugverwijzen naar het originele bericht op 5chan en Seedit.

- **GitHub**: [bitsocialnet/bitsocial-telegram-bots](https://github.com/bitsocialnet/bitsocial-telegram-bots)

## Beschikbare bots

| Bot             | Status  | Beschrijving                                                                |
| --------------- | ------- | --------------------------------------------------------------------------- |
| **5chan Feed**  | Actief  | Volgt alle 5chan-directory's en stuurt nieuwe berichten door naar Telegram. |
| **Seedit Feed** | Gepland | Gaat dezelfde functionaliteit bieden voor Seedit-communities.               |

## Opzetten

### Vereisten

- Node.js
- Yarn
- Een Telegram-bottoken (maak er een aan via [BotFather](https://t.me/BotFather))

### Installatie

Kloon de repository en installeer de afhankelijkheden:

```bash
git clone https://github.com/bitsocialnet/bitsocial-telegram-bots.git
cd bitsocial-telegram-bots
yarn install
```

### Configuratie

Maak een `.env`-bestand in de projectroot met je bottoken:

```env
BOT_TOKEN=your_telegram_bot_token
```

### Draaien

Start de bot zodra je omgeving is geconfigureerd:

```bash
yarn start
```

## Berichtopmaak

Wanneer de bot een bericht doorstuurt naar Telegram, voegt hij twee inline knoppen toe:

- **Bekijken op 5chan** -- Opent het bericht in de webclient van 5chan.
- **Bekijken op Seedit** -- Opent het bericht in de webclient van Seedit.

Zo springen Telegram-abonnees rechtstreeks naar de volledige discussiethread in de client van hun voorkeur.
