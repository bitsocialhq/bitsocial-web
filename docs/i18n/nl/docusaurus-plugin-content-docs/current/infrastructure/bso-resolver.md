---
title: BSO Resolver
description: Zet .bso-domeinnamen om naar publieke sleutels via Bitsocial TXT-records.
sidebar_position: 1
---

# BSO Resolver

BSO Resolver vertaalt `.bso`-domeinnamen naar de bijbehorende publieke sleutels door Bitsocial TXT-records te lezen. Het is het resolverpakket dat Bitsocial-tooling gebruikt wanneer een `.bso`-naam die de gebruiker ziet, moet worden omgezet in het sleutelmateriaal dat de peer-to-peer-stack begrijpt.

- **Broncode en actuele README:** [github.com/bitsocialnet/bso-resolver](https://github.com/bitsocialnet/bso-resolver#readme)
- **npm-pakket:** [`@bitsocial/bso-resolver`](https://www.npmjs.com/package/@bitsocial/bso-resolver)

## Installatie

```bash
npm install @bitsocial/bso-resolver
```

## Waar het past

Bitsocial-namen zijn bedoeld als leesbare ingangen voor communities en auteurs. De resolver houdt die naamgevingslaag los van de applicatiecode, zodat clients eerst kunnen opvragen of een naam wordt ondersteund en die daarna kunnen omzetten via het runtimespecifieke entry point van het pakket.

Gebruik de resolver wanneer je een Bitsocial-bewuste client, commandoregeltool of dienst bouwt die `.bso`-namen moet accepteren in plaats van alleen ruwe publieke sleutels.

## Referentie van het huidige pakket

Deze pagina is bewust een overzicht en geen gespiegelde API-referentie. De README van het pakket is de bron van waarheid voor constructoropties, retourtypes, cachinggedrag, entry points, providervoorbeelden en de ondersteunde afsluitsemantiek:

- [README van BSO Resolver](https://github.com/bitsocialnet/bso-resolver#readme)

Ga uit van de upstream-README wanneer je code naar een project kopieert, want het gedrag van de resolver hoort bij de versie van dat pakket en niet bij deze website.
