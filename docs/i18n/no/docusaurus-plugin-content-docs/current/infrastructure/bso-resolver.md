---
title: BSO Resolver
description: Slå opp .bso-domenenavn til offentlige nøkler via Bitsocial TXT-poster.
sidebar_position: 1
---

# BSO Resolver

BSO Resolver oversetter `.bso`-domenenavn til de tilhørende offentlige nøklene ved å lese Bitsocial TXT-poster. Det er resolver-pakken Bitsocial-verktøyene bruker når et brukervendt `.bso`-navn skal bli til nøkkelmaterialet som peer-to-peer-stakken forstår.

- **Kildekode og gjeldende README:** [github.com/bitsocialnet/bso-resolver](https://github.com/bitsocialnet/bso-resolver#readme)
- **npm-pakke:** [`@bitsocial/bso-resolver`](https://www.npmjs.com/package/@bitsocial/bso-resolver)

## Installasjon

```bash
npm install @bitsocial/bso-resolver
```

## Hvor den hører hjemme

Bitsocial-navn er ment som lesbare inngangsporter til fellesskap og forfattere. Resolveren holder dette navnelaget adskilt fra applikasjonskoden, slik at klienter kan spørre om et navn støttes og deretter slå det opp gjennom pakkens kjøretidsspesifikke inngangspunkt.

Bruk den når du integrerer en Bitsocial-bevisst klient, et kommandolinjeverktøy eller en tjeneste som må kunne ta imot `.bso`-navn og ikke bare rå offentlige nøkler.

## Referanse for gjeldende pakke

Denne siden er bevisst en oversikt, ikke en speilet API-referanse. Pakkens README er fasit for konstruktøralternativer, returtyper, hurtigbufring, inngangspunkter, leverandøreksempler og støttet semantikk for nedstenging:

- [README for BSO Resolver](https://github.com/bitsocialnet/bso-resolver#readme)

Bruk heller README-en oppstrøms når du kopierer kode inn i et prosjekt, fordi resolverens oppførsel versjoneres sammen med pakken og ikke med dette nettstedet.
