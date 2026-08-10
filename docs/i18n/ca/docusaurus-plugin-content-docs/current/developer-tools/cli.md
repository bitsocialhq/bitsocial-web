---
title: Bitsocial CLI
description: Interfície de línia d'ordres per executar un node de Bitsocial, crear comunitats i gestionar operacions del protocol.
sidebar_position: 2
---

# Bitsocial CLI

`bitsocial-cli` és una eina de línia d'ordres per interactuar amb el backend del protocol Bitsocial. Us permet executar un dimoni P2P local, crear i configurar comunitats i publicar contingut, tot des del terminal.

Està construïda sobre la capa compartida de client del protocol Bitsocial i la fan servir [5chan](/apps/5chan/) i [Seedit](/apps/seedit/) per crear comunitats i gestionar nodes.

## Instal·lació

Hi ha binaris precompilats per a Windows, macOS i Linux. Baixeu la versió més recent per a la vostra plataforma des de GitHub:

**[Baixeu-la des de les versions de GitHub](https://github.com/bitsocialnet/bitsocial-cli/releases)**

Un cop baixada, feu que el binari sigui executable (macOS/Linux):

```bash
chmod +x bitsocial
```

## Execució del dimoni

L'ús més habitual de la CLI és executar un node de Bitsocial. El dimoni engega la capa de xarxa P2P i exposa una API local a la qual s'hi poden connectar els clients.

```bash
bitsocial daemon
```

En el primer inici, el dimoni mostra enllaços a la **WebUI**, una interfície gràfica basada en navegador per gestionar el vostre node, les comunitats i la configuració. És pràctica si preferiu una interfície gràfica a les ordres del terminal.

## Accions principals

| Acció                     | Descripció                                                              |
| ------------------------- | ----------------------------------------------------------------------- |
| Iniciar el dimoni         | Engegar el node P2P de Bitsocial                                        |
| Crear una comunitat       | Crear una comunitat nova                                                |
| Editar una comunitat      | Actualitzar la configuració de la comunitat (títol, descripció, regles) |
| Llistar comunitats locals | Llistar les comunitats allotjades en aquest node                        |
| Iniciar una comunitat     | Començar a servir una comunitat concreta                                |
| Aturar una comunitat      | Deixar de servir una comunitat concreta                                 |

Executeu la CLI amb `--help` per veure els noms d'ordres i les opcions actuals que exposa la versió que teniu instal·lada:

```bash
bitsocial --help
bitsocial daemon --help
```

## Flux de treball habitual

Un flux de configuració típic per allotjar una comunitat nova:

```bash
# 1. Start the daemon
bitsocial daemon

# 2. In another terminal, inspect the available community-management commands
bitsocial --help
```

A partir d'aquí, feu servir les ordres de gestió de comunitats de la versió instal·lada per crear, configurar i començar a servir una comunitat. Un cop iniciada, la comunitat és activa a la xarxa Bitsocial i accessible des dels clients compatibles.

## Enllaços

- **GitHub:** [bitsocialnet/bitsocial-cli](https://github.com/bitsocialnet/bitsocial-cli)
