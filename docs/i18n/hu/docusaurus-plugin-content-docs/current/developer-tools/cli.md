---
title: Bitsocial CLI
description: Parancssori felület Bitsocial csomópont futtatásához, közösségek létrehozásához és protokollműveletek kezeléséhez.
sidebar_position: 2
---

# Bitsocial CLI

A `bitsocial-cli` egy parancssori eszköz a Bitsocial protokoll háttérrétegével való munkához. Lehetővé teszi helyi P2P démon futtatását, közösségek létrehozását és konfigurálását, valamint tartalom közzétételét -- mindezt a terminálból.

A megosztott Bitsocial protokoll-kliensrétegre épül, és az [5chan](/apps/5chan/), valamint a [Seedit](/apps/seedit/) is ezt használja közösségek létrehozásához és a csomópontok kezeléséhez.

## Telepítés

Előre elkészített binárisok érhetők el Windows, macOS és Linux rendszerre. Töltse le a platformjához tartozó legfrissebb kiadást a GitHubról:

**[Letöltés a GitHub Releases oldaláról](https://github.com/bitsocialnet/bitsocial-cli/releases)**

A letöltés után tegye futtathatóvá a binárist (macOS/Linux):

```bash
chmod +x bitsocial
```

## A démon futtatása

A CLI leggyakoribb felhasználása egy Bitsocial csomópont futtatása. A démon elindítja a P2P hálózati réteget, és elérhetővé tesz egy helyi API-t, amelyhez a kliensek csatlakozhatnak.

```bash
bitsocial daemon
```

Az első indításkor a démon kiírja a **WebUI** hivatkozásait; ez egy böngészőalapú grafikus felület a csomópont, a közösségek és a beállítások kezeléséhez. Akkor hasznos, ha a grafikus felületet részesíti előnyben a terminálparancsokkal szemben.

## Fő műveletek

| Művelet                    | Leírás                                                    |
| -------------------------- | --------------------------------------------------------- |
| A démon indítása           | A Bitsocial P2P csomópont elindítása                      |
| Közösség létrehozása       | Új közösség létrehozása                                   |
| Közösség szerkesztése      | Közösségi beállítások frissítése (cím, leírás, szabályok) |
| Helyi közösségek listázása | Az ezen a csomóponton hosztolt közösségek listázása       |
| Közösség indítása          | Egy adott közösség kiszolgálásának megkezdése             |
| Közösség leállítása        | Egy adott közösség kiszolgálásának leállítása             |

Futtassa a CLI-t a `--help` kapcsolóval, hogy lássa a telepített kiadásban elérhető aktuális parancsneveket és kapcsolókat:

```bash
bitsocial --help
bitsocial daemon --help
```

## Tipikus munkafolyamat

Egy gyakori beállítási folyamat új közösség hosztolásához:

```bash
# 1. Start the daemon
bitsocial daemon

# 2. In another terminal, inspect the available community-management commands
bitsocial --help
```

Innentől a telepített kiadás közösségkezelő parancsaival hozhat létre, konfigurálhat és indíthat el egy közösséget. Az indítás után a közösség élőben elérhető a Bitsocial hálózaton, és a kompatibilis kliensekből is elérhető.

## Hivatkozások

- **GitHub:** [bitsocialnet/bitsocial-cli](https://github.com/bitsocialnet/bitsocial-cli)
