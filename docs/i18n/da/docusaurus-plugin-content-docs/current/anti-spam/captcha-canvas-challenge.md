---
title: Captcha Canvas Challenge
description: Selvstændig billedbaseret captcha-udfordring til Bitsocial-fællesskaber.
sidebar_position: 2
---

# Captcha Canvas Challenge

Captcha Canvas Challenge er en selvstændig pakke med billed-captcha til Bitsocial-fællesskaber. Den tegner tilfældigt genereret tekst på et canvas og lader et fællesskab bede forfattere om at løse billedet, før en publikation accepteres.

- **Kildekode og aktuel README:** [github.com/bitsocialnet/captcha-canvas-challenge](https://github.com/bitsocialnet/captcha-canvas-challenge#readme)
- **npm-pakke:** [`@bitsocial/captcha-canvas-challenge`](https://www.npmjs.com/package/@bitsocial/captcha-canvas-challenge)

## Installation

```bash
npm install @bitsocial/captcha-canvas-challenge
```

## Hvor den passer ind

Captcha-udfordringer er nyttige, når et fællesskab vil have en enkel interaktiv barriere mod spam i situationer med lav risiko. Denne pakke er bevidst snæver: den leverer selve udfordringen, mens fællesskabet eller Bitsocial-noden bestemmer, hvornår og hvordan den skal vises.

Vil du have stærkere beskyttelse, så kombinér den med bredere moderering eller risikoscoring i stedet for at betragte en captcha som en komplet anti-spam-strategi.

## Aktuel pakkedokumentation

Denne side er bevidst et overblik og ikke en spejlet opsætningsguide. Pakkens README er kilden til sandhed om aktuelle udfordringsnavne, registreringseksempler, CLI-eksempler, understøttede indstillinger, krav og sikkerhedsnoter:

- [README for Captcha Canvas Challenge](https://github.com/bitsocialnet/captcha-canvas-challenge#readme)

Brug den opstrøms README, når du konfigurerer et fællesskab i drift, fordi pakkens indstillinger og installationsforløb versioneres sammen med pakken og ikke med dette websted.
