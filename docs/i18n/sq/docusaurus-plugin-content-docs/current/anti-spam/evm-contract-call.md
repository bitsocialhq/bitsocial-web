---
title: Sfida e thirrjes së kontratës EVM
description: Sfidë kundër spamit që verifikon kushte në zinxhir duke thirrur një kontratë inteligjente EVM.
sidebar_position: 4
---

# Sfida e thirrjes së kontratës EVM

Sfida e thirrjes së kontratës EVM verifikon gjendjen në zinxhir të një autori përpara se të lejojë një publikim. Pronarët e komuniteteve mund të kërkojnë që një portofol ose një identitet i zgjidhur të plotësojë një kusht të lexueshëm nga një kontratë inteligjente, si për shembull mbajtja e një bilanci minimal tokenësh, përpara se të postohet.

- **Kodi burimor dhe README-ja aktuale:** [github.com/bitsocialnet/evm-contract-challenge](https://github.com/bitsocialnet/evm-contract-challenge#readme)
- **Paketa npm:** [`@bitsocial/evm-contract-challenge`](https://www.npmjs.com/package/@bitsocial/evm-contract-challenge)

## Instalimi

```bash
npm install @bitsocial/evm-contract-challenge
```

## Ku përshtatet

Përdoreni këtë sfidë për komunitete ku pjesëmarrja duhet të varet nga një sinjal i jashtëm EVM: pronësia e tokenëve, pronësia e NFT-ve, rezultatet e provës së personit, anëtarësia në qeverisje ose një kusht tjetër i lexueshëm nga një kontratë.

Pasi konfigurohet, sfida është automatike nga këndvështrimi i autorit. Ajo kontrollon burimet e pranueshme të portofolit ose të identitetit, thërret metodën e konfiguruar të kontratës dhe krahason vlerën e kthyer me kushtin e komunitetit.

## Referenca aktuale e paketës

Kjo faqe është me qëllim një përmbledhje, jo një kopje e referencës së konfigurimit. README-ja e paketës është burimi i së vërtetës për emrat e sfidave, shembujt me Bitsocial CLI, regjistrimin në pkc-js, vlerat e parazgjedhura të opsioneve, shembujt e ABI-së, sjelljen e RPC-së dhe burimet e mbështetura të portofolave:

- [README-ja e EVM Contract Challenge](https://github.com/bitsocialnet/evm-contract-challenge#readme)

Kur konfiguroni një komunitet të gjallë, preferoni README-në e burimit, sepse opsionet dhe shembujt e kontratës versionohen bashkë me atë paketë, jo me këtë faqe.

## Kur ta përdorni

Sfida e thirrjes së kontratës EVM është ideale për:

- **Komunitete me akses sipas tokenit** që e kufizojnë postimin vetëm te mbajtësit e tokenit.
- **Akses sipas NFT-së** ku kërkohet pronësia e një NFT-je të caktuar.
- **Hapësira qeverisjeje DAO** ku pjesëmarrja kufizohet te mbajtësit e tokenit të qeverisjes.

Për komunitetet që nuk mbështeten te identiteti në zinxhir, shqyrtoni në vend të saj [Spam Blocker](./spam-blocker.md) ose [Sfidën Voucher](./voucher-challenge.md).
