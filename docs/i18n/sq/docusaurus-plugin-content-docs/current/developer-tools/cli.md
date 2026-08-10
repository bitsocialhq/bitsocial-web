---
title: Bitsocial CLI
description: Ndërfaqe e linjës së komandës për të drejtuar një nyje Bitsocial, për të krijuar komunitete dhe për të menaxhuar operacionet e protokollit.
sidebar_position: 2
---

# Bitsocial CLI

`bitsocial-cli` është një mjet i linjës së komandës për të ndërvepruar me backend-in e protokollit Bitsocial. Ai ju lejon të drejtoni një daemon lokal P2P, të krijoni dhe të konfiguroni komunitete dhe të publikoni përmbajtje -- gjithçka nga terminali.

Është ndërtuar mbi shtresën e përbashkët të klientit të protokollit Bitsocial dhe përdoret nga [5chan](/apps/5chan/) dhe [Seedit](/apps/seedit/) për krijimin e komuniteteve dhe menaxhimin e nyjeve.

## Instalimi

Binarë të parandërtuar janë të disponueshëm për Windows, macOS dhe Linux. Shkarkoni versionin më të fundit për platformën tuaj nga GitHub:

**[Shkarkoni nga GitHub Releases](https://github.com/bitsocialnet/bitsocial-cli/releases)**

Pas shkarkimit, bëjeni binarin të ekzekutueshëm (macOS/Linux):

```bash
chmod +x bitsocial
```

## Drejtimi i Daemon-it

Përdorimi më i zakonshëm i CLI-së është drejtimi i një nyjeje Bitsocial. Daemon-i nis shtresën e rrjetit P2P dhe ekspozon një API lokale me të cilën mund të lidhen klientët.

```bash
bitsocial daemon
```

Në nisjen e parë, daemon-i nxjerr lidhje drejt **WebUI**-t, një ndërfaqeje grafike në shfletues për të menaxhuar nyjen, komunitetet dhe cilësimet tuaja. Kjo është e dobishme nëse preferoni një GUI në vend të komandave në terminal.

## Veprimet Kryesore

| Veprimi                  | Përshkrimi                                                           |
| ------------------------ | -------------------------------------------------------------------- |
| Nis daemon-in            | Nis nyjen P2P të Bitsocial                                           |
| Krijo një komunitet      | Krijo një komunitet të ri                                            |
| Redakto një komunitet    | Përditëso cilësimet e komunitetit (titullin, përshkrimin, rregullat) |
| Listo komunitetet lokale | Listo komunitetet e strehuara në këtë nyje                           |
| Nis një komunitet        | Fillo t'i shërbesh një komuniteti të caktuar                         |
| Ndalo një komunitet      | Ndalo shërbimin e një komuniteti të caktuar                          |

Ekzekutoni CLI-në me `--help` për të parë emrat aktualë të komandave dhe flamujt që ekspozon versioni juaj i instaluar:

```bash
bitsocial --help
bitsocial daemon --help
```

## Rrjedha Tipike e Punës

Një rrjedhë e zakonshme konfigurimi për të strehuar një komunitet të ri:

```bash
# 1. Start the daemon
bitsocial daemon

# 2. In another terminal, inspect the available community-management commands
bitsocial --help
```

Prej aty, përdorni komandat e menaxhimit të komuniteteve që ofron versioni juaj i instaluar për të krijuar, konfiguruar dhe nisur shërbimin e një komuniteti. Pasi të niset, komuniteti është i drejtpërdrejtë në rrjetin Bitsocial dhe i aksesueshëm nga klientët e pajtueshëm.

## Lidhjet

- **GitHub:** [bitsocialnet/bitsocial-cli](https://github.com/bitsocialnet/bitsocial-cli)
