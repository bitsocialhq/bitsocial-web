---
title: Bitsocial CLI
description: Interfaccia a riga di comando per eseguire un nodo Bitsocial, creare comunità e gestire le operazioni di protocollo.
sidebar_position: 2
---

# Bitsocial CLI

`bitsocial-cli` è uno strumento da riga di comando per interagire con il backend del protocollo Bitsocial. Permette di eseguire un daemon P2P locale, creare e configurare comunità e pubblicare contenuti -- tutto dal terminale.

È costruito sopra il livello client condiviso del protocollo Bitsocial ed è usato da [5chan](/apps/5chan/) e [Seedit](/apps/seedit/) per la creazione delle comunità e la gestione dei nodi.

## Installazione

Sono disponibili binari precompilati per Windows, macOS e Linux. Scarica l'ultima release per la tua piattaforma da GitHub:

**[Scarica dalle release su GitHub](https://github.com/bitsocialnet/bitsocial-cli/releases)**

Dopo il download, rendi eseguibile il binario (macOS/Linux):

```bash
chmod +x bitsocial
```

## Esecuzione del daemon

L'uso più comune della CLI è l'esecuzione di un nodo Bitsocial. Il daemon avvia il livello di rete P2P ed espone un'API locale a cui i client possono connettersi.

```bash
bitsocial daemon
```

Al primo avvio il daemon stampa i collegamenti alla **WebUI**, un'interfaccia grafica basata su browser per gestire nodo, comunità e impostazioni. È comoda se preferisci un'interfaccia grafica ai comandi da terminale.

## Azioni principali

| Azione                      | Descrizione                                                           |
| --------------------------- | --------------------------------------------------------------------- |
| Avviare il daemon           | Avvia il nodo P2P Bitsocial                                           |
| Creare una comunità         | Crea una nuova comunità                                               |
| Modificare una comunità     | Aggiorna le impostazioni della comunità (titolo, descrizione, regole) |
| Elencare le comunità locali | Elenca le comunità ospitate su questo nodo                            |
| Avviare una comunità        | Inizia a servire una comunità specifica                               |
| Fermare una comunità        | Smette di servire una comunità specifica                              |

Esegui la CLI con `--help` per vedere i nomi dei comandi e i flag esposti dalla release che hai installato:

```bash
bitsocial --help
bitsocial daemon --help
```

## Flusso di lavoro tipico

Un flusso di configurazione comune per ospitare una nuova comunità:

```bash
# 1. Start the daemon
bitsocial daemon

# 2. In another terminal, inspect the available community-management commands
bitsocial --help
```

Da lì, usa i comandi di gestione delle comunità della release installata per creare, configurare e iniziare a servire una comunità. Una volta avviata, la comunità è attiva sulla rete Bitsocial e raggiungibile dai client compatibili.

## Collegamenti

- **GitHub:** [bitsocialnet/bitsocial-cli](https://github.com/bitsocialnet/bitsocial-cli)
