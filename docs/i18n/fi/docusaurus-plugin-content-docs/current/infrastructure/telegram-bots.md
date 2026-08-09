---
title: Telegram-botit
description: Syötebotit, jotka seuraavat Bitsocial-yhteisöluetteloita ja välittävät julkaisuja Telegram-kanaville.
sidebar_position: 4
---

# Telegram-botit

Bitsocialin Telegram-botit seuraavat asiakasohjelmien yhteisöluetteloita Bitsocial-verkossa ja välittävät uudet julkaisut automaattisesti Telegram-kanaville. Jokaisessa välitetyssä viestissä on upotetut painikkeet, jotka johtavat takaisin alkuperäiseen julkaisuun 5chanissa ja Seeditissä.

- **GitHub**: [bitsocialnet/bitsocial-telegram-bots](https://github.com/bitsocialnet/bitsocial-telegram-bots)

## Saatavilla olevat botit

| Botti           | Tila          | Kuvaus                                                                    |
| --------------- | ------------- | ------------------------------------------------------------------------- |
| **5chan Feed**  | Aktiivinen    | Seuraa kaikkia 5chan-hakemistoja ja välittää uudet julkaisut Telegramiin. |
| **Seedit Feed** | Suunnitteilla | Tarjoaa saman toiminnallisuuden Seedit-yhteisöille.                       |

## Käyttöönotto

### Esivaatimukset

- Node.js
- Yarn
- Telegram-bottitunnus (luo sellainen [BotFatherin](https://t.me/BotFather) kautta)

### Asennus

Kloonaa repositorio ja asenna riippuvuudet:

```bash
git clone https://github.com/bitsocialnet/bitsocial-telegram-bots.git
cd bitsocial-telegram-bots
yarn install
```

### Määritykset

Luo projektin juureen `.env`-tiedosto, jossa on bottitunnuksesi:

```env
BOT_TOKEN=your_telegram_bot_token
```

### Käynnistäminen

Käynnistä botti, kun ympäristö on määritetty:

```bash
yarn start
```

## Julkaisun muoto

Kun botti välittää julkaisun Telegramiin, mukana on kaksi upotettua painiketta:

- **Näytä 5chanissa** – avaa julkaisun 5chanin verkkoasiakkaassa.
- **Näytä Seeditissä** – avaa julkaisun Seeditin verkkoasiakkaassa.

Näin Telegram-tilaajat pääsevät suoraan koko keskusteluketjuun haluamassaan asiakasohjelmassa.
