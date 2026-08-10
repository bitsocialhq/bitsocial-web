---
title: Sfida Voucher
description: Sfidë kundër spamit që e kushtëzon publikimin me kode unike voucher-i të shpërndara nga pronarët e komuniteteve.
sidebar_position: 3
---

# Sfida Voucher

Sfida Voucher e kushtëzon publikimin e përmbajtjes me kode unike voucher-i të shpërndara nga pronari i komunitetit. Në vend që të mbështetet te vlerësimi i automatizuar, ajo e zhvendos besimin te një rrjedhë manuale ftesash, ku njerëzit e njohur marrin kode përmes një kanali që e kontrollon pronari.

- **Kodi burimor dhe README-ja aktuale:** [github.com/bitsocialnet/voucher-challenge](https://github.com/bitsocialnet/voucher-challenge#readme)
- **Paketa npm:** [`@bitsocial/voucher-challenge`](https://www.npmjs.com/package/@bitsocial/voucher-challenge)

## Instalimi

```bash
npm install @bitsocial/voucher-challenge
```

## Si funksionon

1. Pronari i një komuniteti gjeneron një ose më shumë kode unike voucher-i.
2. Pronari ua shpërndan ato kode autorëve të besuar përmes një kanali sipas zgjedhjes së tij (mesazh i drejtpërdrejtë, email, personalisht etj.).
3. Kur një autor përpiqet të publikojë, sistemi i sfidës i kërkon një kod voucher-i.
4. Kodi validohet -- nëse është i vërtetë dhe nuk është përdorur më parë, publikimi pranohet.

Sapo shlyhet, çdo kod voucher-i lidhet me një autor të caktuar, duke penguar ripërdorimin nga të tjerët.

## Referenca aktuale e paketës

Kjo faqe është me qëllim një përmbledhje, jo një kopje e udhëzuesit të konfigurimit. README-ja e paketës është burimi i së vërtetës për emrat aktualë të sfidave, shembujt me Bitsocial CLI, regjistrimin në pkc-js, opsionet e mbështetura dhe sjelljen e shlyerjes:

- [README-ja e Sfidës Voucher](https://github.com/bitsocialnet/voucher-challenge#readme)

Kur konfiguroni një komunitet të gjallë, preferoni README-në e burimit, sepse opsionet e voucher-it dhe rrjedhat e instalimit versionohen bashkë me atë paketë, jo me këtë faqe.

## Kur ta përdorni

Sfida Voucher është më e përshtatshme për:

- **Komunitete vetëm me ftesë** ku anëtarësia kufizohet me qëllim.
- **Hapësira të kuruara** ku pronari verifikon personalisht çdo pjesëmarrës.
- **Mjedise me besim të lartë** ku vlerësimi i automatizuar i spamit është i panevojshëm ose i padëshiruar.

Meqë kërkon shpërndarje manuale kodesh, nuk shkallëzohet për komunitete të mëdha e të hapura. Për ato skenarë, shqyrtoni në vend të saj [Spam Blocker](./spam-blocker.md) ose [Sfidën e thirrjes së kontratës EVM](./evm-contract-call.md).
