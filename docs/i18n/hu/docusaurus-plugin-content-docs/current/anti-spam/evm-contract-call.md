---
title: EVM Contract Call Challenge
description: Spamellenes kihívás, amely EVM okosszerződés hívásával ellenőrzi a láncon lévő feltételeket.
sidebar_position: 4
---

# EVM Contract Call Challenge

Az EVM Contract Call Challenge a szerző láncon lévő állapotát ellenőrzi, mielőtt engedélyezné a közzétételt. A közösség tulajdonosa előírhatja, hogy egy tárca vagy feloldott identitás a bejegyzés elküldése előtt megfeleljen egy csak olvasható okosszerződés-feltételnek, például rendelkezzen egy minimális tokenegyenleggel.

- **Forráskód és aktuális README:** [github.com/bitsocialnet/evm-contract-challenge](https://github.com/bitsocialnet/evm-contract-challenge#readme)
- **npm csomag:** [`@bitsocial/evm-contract-challenge`](https://www.npmjs.com/package/@bitsocial/evm-contract-challenge)

## Telepítés

```bash
npm install @bitsocial/evm-contract-challenge
```

## Hol a helye

Ezt a kihívást olyan közösségekben érdemes használni, ahol a részvétel egy külső EVM-jeltől függ: tokentulajdonlástól, NFT-tulajdonlástól, proof-of-personhood pontszámoktól, kormányzási tagságtól vagy más, szerződésből kiolvasható feltételtől.

Beállítás után a kihívás a szerző szempontjából automatikus. Ellenőrzi a szóba jöhető tárca- vagy identitásforrásokat, meghívja a beállított szerződésmetódust, majd a visszakapott értéket összeveti a közösség feltételével.

## A csomag aktuális dokumentációja

Ez az oldal szándékosan áttekintés, nem pedig lemásolt konfigurációs referencia. A kihívásnevek, a Bitsocial CLI-példák, a pkc-js regisztráció, az alapértelmezett beállítások, az ABI-példák, az RPC-viselkedés és a támogatott tárcaforrások tekintetében a csomag README-je a mérvadó forrás:

- [EVM Contract Challenge README](https://github.com/bitsocialnet/evm-contract-challenge#readme)

Éles közösség beállításakor mindig az eredeti README-t vegye alapul, mert a szerződéssel kapcsolatos beállítások és példák a csomaggal együtt verziózódnak, nem ezzel a weboldallal.

## Mikor érdemes használni

Az EVM Contract Call Challenge a következő esetekben ideális:

- **Tokenhez kötött közösségek**, ahol csak a tokentulajdonosok tehetnek közzé tartalmat.
- **NFT-hez kötött hozzáférés**, ahol egy adott NFT tulajdonlása kötelező.
- **DAO kormányzási terek**, ahol a részvétel a kormányzási token tulajdonosaira korlátozódik.

Azoknak a közösségeknek, amelyek nem támaszkodnak láncon lévő identitásra, inkább a [Spam Blocker](./spam-blocker.md) vagy a [Voucher Challenge](./voucher-challenge.md) ajánlott.
