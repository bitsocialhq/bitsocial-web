---
title: Bitsocial CLI
description: Rozhraní příkazové řádky pro provoz uzlu Bitsocial, vytváření komunit a správu operací protokolu.
sidebar_position: 2
---

# Bitsocial CLI

`bitsocial-cli` je nástroj příkazové řádky pro práci s backendem protokolu Bitsocial. Umožňuje provozovat lokálního P2P démona, vytvářet a konfigurovat komunity a publikovat obsah – to vše z terminálu.

Staví na sdílené klientské vrstvě protokolu Bitsocial a používají ho [5chan](/apps/5chan/) a [Seedit](/apps/seedit/) k vytváření komunit a správě uzlů.

## Instalace

Předpřipravené binárky jsou k dispozici pro Windows, macOS a Linux. Nejnovější vydání pro svou platformu si stáhněte z GitHubu:

**[Stáhnout z GitHub Releases](https://github.com/bitsocialnet/bitsocial-cli/releases)**

Po stažení nastavte binárce právo ke spuštění (macOS/Linux):

```bash
chmod +x bitsocial
```

## Spuštění démona

Nejčastějším využitím CLI je provoz uzlu Bitsocial. Démon nastartuje síťovou vrstvu P2P a vystaví lokální API, ke kterému se mohou připojit klienti.

```bash
bitsocial daemon
```

Při prvním spuštění démon vypíše odkazy na **WebUI**, grafické rozhraní v prohlížeči pro správu uzlu, komunit a nastavení. Hodí se, pokud dáváte přednost GUI před příkazy v terminálu.

## Klíčové akce

| Akce                    | Popis                                              |
| ----------------------- | -------------------------------------------------- |
| Spustit démona          | Nastartovat P2P uzel Bitsocial                     |
| Vytvořit komunitu       | Založit novou komunitu                             |
| Upravit komunitu        | Změnit nastavení komunity (název, popis, pravidla) |
| Vypsat lokální komunity | Vypsat komunity hostované na tomto uzlu            |
| Spustit komunitu        | Začít poskytovat konkrétní komunitu                |
| Zastavit komunitu       | Přestat poskytovat konkrétní komunitu              |

Spusťte CLI s `--help` a uvidíte aktuální názvy příkazů a přepínačů, které vaše nainstalované vydání nabízí:

```bash
bitsocial --help
bitsocial daemon --help
```

## Typický pracovní postup

Běžný postup při zprovoznění nové komunity:

```bash
# 1. Start the daemon
bitsocial daemon

# 2. In another terminal, inspect the available community-management commands
bitsocial --help
```

Odtud použijte příkazy pro správu komunit z nainstalovaného vydání a komunitu vytvořte, nastavte a začněte poskytovat. Jakmile běží, je komunita živá v síti Bitsocial a dostupná z kompatibilních klientů.

## Odkazy

- **GitHub:** [bitsocialnet/bitsocial-cli](https://github.com/bitsocialnet/bitsocial-cli)
