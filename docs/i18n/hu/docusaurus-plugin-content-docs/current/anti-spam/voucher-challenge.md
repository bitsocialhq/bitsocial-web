---
title: Voucher Challenge
description: Spamellenes kihívás, amely a közösség tulajdonosa által kiosztott egyedi kuponkódokhoz köti a közzétételt.
sidebar_position: 3
---

# Voucher Challenge

A Voucher Challenge a közösség tulajdonosa által kiosztott egyedi kuponkódokhoz köti a tartalom közzétételét. Automatikus pontozás helyett a bizalmat egy kézi meghívásos folyamatra helyezi át, amelyben ismert emberek kapnak kódot a tulajdonos által felügyelt csatornán keresztül.

- **Forráskód és aktuális README:** [github.com/bitsocialnet/voucher-challenge](https://github.com/bitsocialnet/voucher-challenge#readme)
- **npm csomag:** [`@bitsocial/voucher-challenge`](https://www.npmjs.com/package/@bitsocial/voucher-challenge)

## Telepítés

```bash
npm install @bitsocial/voucher-challenge
```

## Hogyan működik

1. A közösség tulajdonosa egy vagy több egyedi kuponkódot generál.
2. A kódokat az általa választott csatornán (privát üzenetben, e-mailben, személyesen stb.) juttatja el a megbízható szerzőknek.
3. Amikor egy szerző közzé akar tenni valamit, a kihívásrendszer bekéri tőle a kuponkódot.
4. A rendszer ellenőrzi a kódot – ha valódi, és még nem használták fel, a közzététel elfogadásra kerül.

Minden kuponkód a beváltás pillanatában egy adott szerzőhöz kötődik, így mások nem használhatják fel újra.

## A csomag aktuális dokumentációja

Ez az oldal szándékosan áttekintés, nem pedig lemásolt beállítási útmutató. Az aktuális kihívásnevek, a Bitsocial CLI-példák, a pkc-js regisztráció, a támogatott beállítások és a beváltás működése tekintetében a csomag README-je a mérvadó forrás:

- [Voucher Challenge README](https://github.com/bitsocialnet/voucher-challenge#readme)

Éles közösség beállításakor mindig az eredeti README-t vegye alapul, mert a kuponokkal kapcsolatos beállítások és telepítési folyamatok a csomaggal együtt verziózódnak, nem ezzel a weboldallal.

## Mikor érdemes használni

A Voucher Challenge a következő esetekben válik be a legjobban:

- **Csak meghívásos közösségek**, ahol a tagság szándékosan korlátozott.
- **Kurált terek**, ahol a tulajdonos személyesen ellenőriz minden résztvevőt.
- **Magas bizalmi szintű környezetek**, ahol az automatikus spampontozás szükségtelen vagy nem kívánatos.

Mivel kézi kódkiosztást igényel, nagy, nyitott közösségekre nem skálázódik. Ilyen esetekben inkább a [Spam Blocker](./spam-blocker.md) vagy az [EVM Contract Call Challenge](./evm-contract-call.md) jöhet szóba.
