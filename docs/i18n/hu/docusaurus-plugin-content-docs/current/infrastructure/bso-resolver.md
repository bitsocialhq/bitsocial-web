---
title: BSO Resolver
description: A .bso tartománynevek feloldása nyilvános kulcsokká a Bitsocial TXT rekordok alapján.
sidebar_position: 1
---

# BSO Resolver

A BSO Resolver a `.bso` tartományneveket a hozzájuk tartozó nyilvános kulcsokká fordítja a Bitsocial TXT rekordok beolvasásával. Ez az a feloldócsomag, amelyet a Bitsocial eszközei használnak, amikor egy felhasználó által látott `.bso` névből azt a kulcsanyagot kell előállítani, amelyet a peer-to-peer réteg megért.

- **Forráskód és aktuális README:** [github.com/bitsocialnet/bso-resolver](https://github.com/bitsocialnet/bso-resolver#readme)
- **npm csomag:** [`@bitsocial/bso-resolver`](https://www.npmjs.com/package/@bitsocial/bso-resolver)

## Telepítés

```bash
npm install @bitsocial/bso-resolver
```

## Hova illeszkedik

A Bitsocial nevek célja, hogy ember által olvasható belépési pontot adjanak a közösségekhez és a szerzőkhöz. A feloldó ezt a névréteget elkülönítve tartja az alkalmazáskódtól, így a kliensek először megkérdezhetik, hogy egy név támogatott-e, majd feloldhatják a csomag futtatókörnyezet-specifikus belépési pontján keresztül.

Akkor használja, amikor olyan Bitsocial-kompatibilis klienst, parancssori eszközt vagy szolgáltatást integrál, amelynek nemcsak nyers nyilvános kulcsokat, hanem `.bso` neveket is el kell fogadnia.

## Aktuális csomagreferencia

Ez az oldal szándékosan áttekintés, nem pedig tükrözött API-referencia. A konstruktoropciók, a visszatérési típusok, a gyorsítótárazás viselkedése, a belépési pontok, a szolgáltatópéldák és a támogatott leállítási szemantika tekintetében a csomag README-je az igazság forrása:

- [BSO Resolver README](https://github.com/bitsocialnet/bso-resolver#readme)

Ha kódot másol egy projektbe, inkább az upstream README-t vegye alapul, mert a feloldó viselkedése azzal a csomaggal együtt van verziózva, nem ezzel a weboldallal.
