---
title: Captcha Canvas-utfordring
description: Frittstående bildebasert captcha-utfordring for Bitsocial-fellesskap.
sidebar_position: 2
---

# Captcha Canvas-utfordring

Captcha Canvas-utfordringen er en frittstående pakke for bilde-captcha til Bitsocial-fellesskap. Den tegner tilfeldig generert tekst på et lerret og lar et fellesskap be forfattere om å løse bildet før en publisering godtas.

- **Kildekode og gjeldende README:** [github.com/bitsocialnet/captcha-canvas-challenge](https://github.com/bitsocialnet/captcha-canvas-challenge#readme)
- **npm-pakke:** [`@bitsocial/captcha-canvas-challenge`](https://www.npmjs.com/package/@bitsocial/captcha-canvas-challenge)

## Installasjon

```bash
npm install @bitsocial/captcha-canvas-challenge
```

## Hvor den passer inn

Captcha-utfordringer er nyttige når et fellesskap ønsker en enkel interaktiv sperre for spamvern der lite står på spill. Denne pakken er bevisst smal: den leverer selve implementasjonen av utfordringen, mens fellesskapet eller Bitsocial-noden avgjør når og hvordan den skal vises.

For sterkere beskyttelse bør den kombineres med bredere systemer for moderering eller risikoscoring, i stedet for at en captcha behandles som en komplett anti-spam-strategi.

## Gjeldende pakkereferanse

Denne siden er bevisst en oversikt, ikke en speilet oppsettsguide. Pakkens README er kilden til sannhet for gjeldende utfordringsnavn, registreringseksempler, CLI-eksempler, støttede alternativer, krav og sikkerhetsnotater:

- [README for Captcha Canvas Challenge](https://github.com/bitsocialnet/captcha-canvas-challenge#readme)

Foretrekk README-en oppstrøms når du konfigurerer et aktivt fellesskap, fordi pakkealternativer og installasjonsflyter versjoneres sammen med pakken og ikke med dette nettstedet.
