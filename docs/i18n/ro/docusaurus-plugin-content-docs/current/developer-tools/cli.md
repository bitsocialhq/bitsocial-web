---
title: Bitsocial CLI
description: Interfață de linie de comandă pentru rularea unui nod Bitsocial, crearea comunităților și gestionarea operațiunilor de protocol.
sidebar_position: 2
---

# Bitsocial CLI

`bitsocial-cli` este o unealtă de linie de comandă pentru interacțiunea cu backendul protocolului Bitsocial. Vă permite să rulați un daemon P2P local, să creați și să configurați comunități și să publicați conținut -- totul din terminal.

Este construită peste stratul comun de client al protocolului Bitsocial și este folosită de [5chan](/apps/5chan/) și [Seedit](/apps/seedit/) pentru crearea comunităților și administrarea nodurilor.

## Instalare

Sunt disponibile binare precompilate pentru Windows, macOS și Linux. Descărcați cea mai recentă versiune pentru platforma dumneavoastră de pe GitHub:

**[Descărcați din GitHub Releases](https://github.com/bitsocialnet/bitsocial-cli/releases)**

După descărcare, faceți binarul executabil (macOS/Linux):

```bash
chmod +x bitsocial
```

## Rularea daemonului

Cea mai frecventă utilizare a CLI-ului este rularea unui nod Bitsocial. Daemonul pornește stratul de rețea P2P și expune un API local la care se pot conecta clienții.

```bash
bitsocial daemon
```

La prima pornire, daemonul afișează linkuri către **WebUI**, o interfață grafică din browser pentru administrarea nodului, a comunităților și a setărilor. Este utilă dacă preferați o interfață grafică în locul comenzilor din terminal.

## Acțiuni principale

| Acțiune                       | Descriere                                                    |
| ----------------------------- | ------------------------------------------------------------ |
| Pornirea daemonului           | Lansează nodul P2P Bitsocial                                 |
| Crearea unei comunități       | Creează o comunitate nouă                                    |
| Editarea unei comunități      | Actualizează setările comunității (titlu, descriere, reguli) |
| Listarea comunităților locale | Listează comunitățile găzduite pe acest nod                  |
| Pornirea unei comunități      | Începe servirea unei anumite comunități                      |
| Oprirea unei comunități       | Oprește servirea unei anumite comunități                     |

Rulați CLI-ul cu `--help` pentru a vedea numele de comenzi și opțiunile expuse de versiunea instalată:

```bash
bitsocial --help
bitsocial daemon --help
```

## Flux de lucru tipic

Un flux obișnuit de configurare pentru găzduirea unei comunități noi:

```bash
# 1. Start the daemon
bitsocial daemon

# 2. In another terminal, inspect the available community-management commands
bitsocial --help
```

De acolo, folosiți comenzile de administrare a comunităților din versiunea instalată pentru a crea, configura și începe să serviți o comunitate. Odată pornită, comunitatea este activă în rețeaua Bitsocial și accesibilă din clienții compatibili.

## Linkuri

- **GitHub:** [bitsocialnet/bitsocial-cli](https://github.com/bitsocialnet/bitsocial-cli)
