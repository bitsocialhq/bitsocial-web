---
title: BSO Resolver
description: Selvitä .bso-verkkotunnukset julkisiksi avaimiksi Bitsocial TXT -tietueiden avulla.
sidebar_position: 1
---

# BSO Resolver

BSO Resolver kääntää `.bso`-verkkotunnukset niitä vastaaviksi julkisiksi avaimiksi lukemalla Bitsocial TXT -tietueita. Se on selvityspaketti, jota Bitsocial-työkalut käyttävät, kun käyttäjälle näkyvä `.bso`-nimi täytyy muuntaa avainmateriaaliksi, jonka peer-to-peer-pino ymmärtää.

- **Lähdekoodi ja ajantasainen README:** [github.com/bitsocialnet/bso-resolver](https://github.com/bitsocialnet/bso-resolver#readme)
- **npm-paketti:** [`@bitsocial/bso-resolver`](https://www.npmjs.com/package/@bitsocial/bso-resolver)

## Asennus

```bash
npm install @bitsocial/bso-resolver
```

## Mihin se sijoittuu

Bitsocial-nimet on tarkoitettu ihmisen luettaviksi sisäänkäynneiksi yhteisöihin ja tekijöihin. Selvitin pitää tämän nimeämiskerroksen erillään sovelluskoodista, joten asiakas voi ensin kysyä, onko nimi tuettu, ja selvittää sen sitten paketin ajoympäristökohtaisen sisääntulopisteen kautta.

Käytä sitä, kun rakennat Bitsocial-tietoista asiakasta, komentorivityökalua tai palvelua, jonka on hyväksyttävä `.bso`-nimiä pelkkien raakojen julkisten avainten sijaan.

## Paketin ajantasainen viitedokumentaatio

Tämä sivu on tarkoituksella yleiskatsaus, ei peilattu API-viite. Paketin README on totuuden lähde, kun kyse on konstruktorin asetuksista, paluutyypeistä, välimuistin toiminnasta, sisääntulopisteistä, palveluntarjoajaesimerkeistä ja tuetusta sammutuslogiikasta:

- [BSO Resolver README](https://github.com/bitsocialnet/bso-resolver#readme)

Kun kopioit koodia projektiin, käytä mieluummin ylävirran README:tä, koska selvittimen toiminta versioidaan kyseisen paketin eikä tämän sivuston mukana.
