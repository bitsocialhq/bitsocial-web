---
title: BSO Resolver
description: Oversæt .bso-domænenavne til offentlige nøgler via Bitsocial TXT-poster.
sidebar_position: 1
---

# BSO Resolver

BSO Resolver oversætter `.bso`-domænenavne til deres tilsvarende offentlige nøgler ved at læse Bitsocial TXT-poster. Det er den resolver-pakke, Bitsocial-værktøjer bruger, når et brugervendt `.bso`-navn skal omdannes til det nøglemateriale, som peer-to-peer-stakken forstår.

- **Kildekode og aktuel README:** [github.com/bitsocialnet/bso-resolver](https://github.com/bitsocialnet/bso-resolver#readme)
- **npm-pakke:** [`@bitsocial/bso-resolver`](https://www.npmjs.com/package/@bitsocial/bso-resolver)

## Installation

```bash
npm install @bitsocial/bso-resolver
```

## Hvor den passer ind

Bitsocial-navne er tænkt som læsevenlige indgange til fællesskaber og forfattere. Resolveren holder det navnelag adskilt fra applikationskoden, så klienter kan spørge, om et navn understøttes, og derefter slå det op via pakkens runtime-specifikke indgangspunkt.

Brug den, når du integrerer en Bitsocial-bevidst klient, et kommandolinjeværktøj eller en tjeneste, der skal kunne tage imod `.bso`-navne og ikke kun rå offentlige nøgler.

## Aktuel pakkereference

Denne side er bevidst en oversigt og ikke en spejlet API-reference. Pakkens README er kilden til sandhed om constructor-indstillinger, returtyper, cachingadfærd, indgangspunkter, udbydereksempler og understøttet nedlukningssemantik:

- [README for BSO Resolver](https://github.com/bitsocialnet/bso-resolver#readme)

Foretræk README'en opstrøms, når du kopierer kode ind i et projekt, fordi resolverens adfærd versioneres sammen med pakken og ikke med dette websted.
