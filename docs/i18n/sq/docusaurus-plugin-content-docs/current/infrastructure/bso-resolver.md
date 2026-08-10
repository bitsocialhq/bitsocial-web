---
title: BSO Resolver
description: Përktheni emrat e domeneve .bso në çelësa publikë përmes regjistrimeve TXT të Bitsocial.
sidebar_position: 1
---

# BSO Resolver

BSO Resolver i përkthen emrat e domeneve `.bso` në çelësat publikë përkatës duke lexuar regjistrimet TXT të Bitsocial. Është paketa zgjidhëse që përdoret nga mjetet e Bitsocial kur një emër `.bso` i drejtuar përdoruesit duhet të kthehet në materialin e çelësit që kupton stiva peer-to-peer.

- **Kodi burimor dhe README-ja aktuale:** [github.com/bitsocialnet/bso-resolver](https://github.com/bitsocialnet/bso-resolver#readme)
- **Paketa npm:** [`@bitsocial/bso-resolver`](https://www.npmjs.com/package/@bitsocial/bso-resolver)

## Instalimi

```bash
npm install @bitsocial/bso-resolver
```

## Ku Vendoset

Emrat e Bitsocial janë menduar si pika hyrëse të lexueshme nga njeriu për komunitetet dhe autorët. Zgjidhësi e mban atë shtresë emërtimi të ndarë nga kodi i aplikacionit, kështu që klientët mund të pyesin nëse një emër mbështetet dhe më pas ta zgjidhin atë përmes pikës hyrëse të paketës që i përgjigjet mjedisit të ekzekutimit.

Përdoreni kur po integroni një klient, një mjet të linjës së komandës ose një shërbim që njeh Bitsocial-in dhe që duhet të pranojë emra `.bso`, jo vetëm çelësa publikë të papërpunuar.

## Referenca Aktuale e Paketës

Kjo faqe është qëllimisht një përmbledhje, jo një pasqyrim i referencës së API-së. README-ja e paketës është burimi i së vërtetës për opsionet e konstruktorit, tipat e kthimit, sjelljen e ruajtjes në kesh, pikat hyrëse, shembujt e ofruesve dhe semantikën e mbështetur të mbylljes:

- [README-ja e BSO Resolver](https://github.com/bitsocialnet/bso-resolver#readme)

Kur kopjoni kod në një projekt, preferoni README-në në rrjedhën e sipërme, sepse sjellja e zgjidhësit versionohet bashkë me atë paketë dhe jo me këtë sajt.
