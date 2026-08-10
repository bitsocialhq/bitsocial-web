---
title: 5chan
description: Szerver nélküli, decentralizált imageboard a Bitsocial protokollra építve, ahol bárki létrehozhat és birtokolhat táblákat.
sidebar_position: 1
---

# 5chan

Az 5chan egy szerver nélküli, adminisztrátor nélküli, teljesen decentralizált imageboard, amely a Bitsocial protokollon fut. Az ismerős imageboard-könyvtárszerkezetet követi, de decentralizált tulajdonlást vezet be – bárki létrehozhat táblát, és több tábla is versenghet ugyanazért a könyvtárhelyért egy szavazási mechanizmuson keresztül.

## Letöltések

| Platform | Link                                        |
| -------- | ------------------------------------------- |
| Web      | [5chan.app](https://5chan.app)              |
| Asztali  | Elérhető Mac, Windows és Linux rendszerekre |
| Mobil    | Elérhető Androidra                          |

## Hogyan működnek a táblák

Az 5chan klasszikus könyvtárelrendezés szerint (például `/b/`, `/g/`) rendezi táblákba a tartalmat. A hagyományos imageboardokkal ellentétben, ahol egy központi adminisztrátor felügyel minden táblát, itt bármelyik felhasználó létrehozhat saját táblát, amely teljes egészében az övé marad. Ha több tábla ugyanarra a könyvtárhelyre pályázik, szavazással versenyeznek az adott pozícióért.

### Tábla létrehozása

Új tábla létrehozásához a `bitsocial-cli` eszközt peer-to-peer csomópontként kell futtatnia. Így a tábla decentralizált módon érhető el, anélkül hogy bármilyen központi szerverre támaszkodna.

### Címtár-hozzárendelések

A könyvtárhelyek kiosztását (vagyis hogy melyik tábla melyik útvonalon jelenik meg) jelenleg a `5chan-directories.json` fájlhoz beküldött GitHub pull requestek kezelik. Ez ideiglenes megoldás – a jövőbeli kiadások támogatni fogják az alkalmazáson belüli tábla-létrehozást és a pubsub-alapú szavazást, hogy a címtár-hozzárendelések automatikusan történjenek.

## Belső működés

A motorháztető alatt az 5chan a közös Bitsocial protokoll kliensrétegét használja a hálózati
kommunikációhoz. Az 5chan.app webalkalmazása alapértelmezés szerint Helia csomópontot futtat a
böngészőben, így egy szokásos böngészőfül peerként csatlakozik a hálózathoz: más peerektől tölti be a
táblákat, és pubsubon keresztül publikál, központi IPFS-átjáró nélkül a tartalom útvonalában. A
[böngészős peer-to-peer](/browser-p2p/) oldal írja le, hogy ez mivel jár, és mit nem tud továbbra sem
egy böngészőben futó csomópont.

## Linkek

- **GitHub**: [github.com/bitsocialnet/5chan](https://github.com/bitsocialnet/5chan)
- **Telegram**: [t.me/fivechandev](https://t.me/fivechandev)
- **Licenc**: GPL-2.0-only
