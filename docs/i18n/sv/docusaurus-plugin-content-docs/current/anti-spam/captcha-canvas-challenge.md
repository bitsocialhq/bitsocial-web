---
title: Captcha Canvas Challenge
description: Fristående bildbaserad captcha-utmaning för Bitsocial-communities.
sidebar_position: 2
---

# Captcha Canvas Challenge

Captcha Canvas Challenge är ett fristående bildcaptcha-paket för Bitsocial-communities. Det ritar upp slumpad text på en canvas och låter ett community be författare att lösa bilden innan en publikation accepteras.

- **Källkod och aktuell README:** [github.com/bitsocialnet/captcha-canvas-challenge](https://github.com/bitsocialnet/captcha-canvas-challenge#readme)
- **npm-paket:** [`@bitsocial/captcha-canvas-challenge`](https://www.npmjs.com/package/@bitsocial/captcha-canvas-challenge)

## Installation

```bash
npm install @bitsocial/captcha-canvas-challenge
```

## Var det passar in

Captcha-utmaningar är användbara när ett community vill ha en enkel interaktiv spärr för spamskydd där insatserna är låga. Paketet är medvetet smalt: det tillhandahåller själva implementationen av utmaningen, medan communityn eller Bitsocial-noden avgör när och hur den ska visas.

För starkare skydd, kombinera det med bredare moderering eller riskbedömningssystem i stället för att behandla en captcha som en komplett anti-spam-strategi.

## Aktuell paketreferens

Den här sidan är medvetet en översikt, inte en speglad installationsguide. Paketets README är källan till sanning för aktuella utmaningsnamn, registreringsexempel, CLI-exempel, alternativ som stöds, krav och säkerhetsnoteringar:

- [README för Captcha Canvas Challenge](https://github.com/bitsocialnet/captcha-canvas-challenge#readme)

Utgå hellre från README:n uppströms när du konfigurerar ett community i drift, eftersom paketalternativ och installationsflöden versioneras tillsammans med paketet snarare än med den här webbplatsen.
