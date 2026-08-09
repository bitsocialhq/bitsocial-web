---
title: BSO Resolver
description: I-resolve ang mga .bso domain name tungo sa mga public key sa pamamagitan ng mga Bitsocial TXT record.
sidebar_position: 1
---

# BSO Resolver

Isinasalin ng BSO Resolver ang mga `.bso` domain name tungo sa katumbas nilang public key sa pamamagitan ng pagbabasa ng mga Bitsocial TXT record. Ito ang resolver package na ginagamit ng mga kasangkapan ng Bitsocial kapag kailangang maging key material na nauunawaan ng peer-to-peer stack ang isang `.bso` name na nakikita ng user.

- **Source code at kasalukuyang README:** [github.com/bitsocialnet/bso-resolver](https://github.com/bitsocialnet/bso-resolver#readme)
- **npm package:** [`@bitsocial/bso-resolver`](https://www.npmjs.com/package/@bitsocial/bso-resolver)

## Pag-install

```bash
npm install @bitsocial/bso-resolver
```

## Saan Ito Naaangkop

Nilayon ang mga pangalan sa Bitsocial bilang nababasa-ng-tao na pasukan para sa mga komunidad at may-akda. Pinananatili ng resolver na hiwalay sa application code ang naming layer na iyon, kaya matatanong ng mga client kung suportado ba ang isang pangalan at pagkatapos ay maire-resolve ito sa pamamagitan ng runtime-specific na entry point ng package.

Gamitin ito kapag nag-i-integrate ka ng isang Bitsocial-aware na client, command-line tool, o serbisyo na kailangang tumanggap ng mga `.bso` name at hindi lamang ng hilaw na public key.

## Kasalukuyang Reference ng Package

Sadyang pangkalahatang-tanaw lamang ang pahinang ito, hindi isang sinalaming API reference. Ang README ng package ang pinagmumulan ng katotohanan para sa mga opsyon ng constructor, return type, gawi sa caching, entry point, halimbawa ng provider, at suportadong shutdown semantics:

- [BSO Resolver README](https://github.com/bitsocialnet/bso-resolver#readme)

Mas mainam na sumangguni sa upstream na README kapag kumokopya ng code papunta sa isang proyekto, dahil naka-version ang gawi ng resolver kasama ng package na iyon at hindi kasama ng website na ito.
