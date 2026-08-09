---
title: 5chan
description: Bezserverový decentralizovaný imageboard postavený na protokolu Bitsocial, kde může kdokoli vytvářet a vlastnit boardy.
sidebar_position: 1
---

# 5chan

5chan je bezserverový imageboard bez administrátorů, plně decentralizovaný a běžící na protokolu Bitsocial. Drží se známé adresářové struktury imageboardů, ale přidává decentralizované vlastnictví — board si může vytvořit kdokoli a o stejnou pozici v adresáři může prostřednictvím hlasování soupeřit více boardů.

## Ke stažení

| Platforma | Odkaz                             |
| --------- | --------------------------------- |
| Web       | [5chan.app](https://5chan.app)    |
| Desktop   | Dostupné pro Mac, Windows a Linux |
| Mobil     | Dostupné pro Android              |

## Jak boardy fungují

5chan organizuje obsah do boardů pomocí klasického adresářového rozvržení (např. `/b/`, `/g/`). Na rozdíl od tradičních imageboardů, kde každý board řídí centrální administrátor, umožňuje 5chan komukoli vytvořit vlastní board a plně jej vlastnit. Pokud na stejnou pozici v adresáři cílí více boardů, soupeří o ni hlasováním.

### Vytvoření boardu

K vytvoření nového boardu je potřeba spustit `bitsocial-cli` jako peer-to-peer uzel. Tím je zajištěno, že je váš board hostován decentralizovaně, bez spoléhání na jakýkoli centrální server.

### Přiřazení adresářů

Přiřazení pozic v adresáři (který board se objeví na které cestě) se zatím spravuje pomocí pull requestů na GitHubu do souboru `5chan-directories.json`. Jde o dočasný postup — budoucí verze podpoří vytváření boardů přímo v aplikaci a hlasování přes pubsub, které přiřazení adresářů vyřeší automaticky.

## Vnitřní fungování

5chan pod kapotou používá pro veškerou síťovou komunikaci sdílenou klientskou vrstvu protokolu
Bitsocial. Webová aplikace na 5chan.app ve výchozím nastavení spouští uzel Helia přímo v prohlížeči,
takže se běžná karta prohlížeče připojuje k síti jako peer: načítá boardy od ostatních peerů a
publikuje přes pubsub, bez centralizované IPFS brány v cestě obsahu. Co to obnáší a co uzel
v prohlížeči stále nedokáže, popisuje [Peer-to-peer v prohlížeči](/browser-p2p/).

## Odkazy

- **GitHub**: [github.com/bitsocialnet/5chan](https://github.com/bitsocialnet/5chan)
- **Telegram**: [t.me/fivechandev](https://t.me/fivechandev)
- **Licence**: GPL-2.0-only
