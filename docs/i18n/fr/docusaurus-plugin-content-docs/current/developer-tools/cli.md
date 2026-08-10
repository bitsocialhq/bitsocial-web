---
title: CLI Bitsocial
description: Interface en ligne de commande pour exécuter un nœud Bitsocial, créer des communautés et gérer les opérations de protocole.
sidebar_position: 2
---

# CLI Bitsocial

`bitsocial-cli` est un outil en ligne de commande permettant d'interagir avec le backend du protocole Bitsocial. Il vous permet de faire tourner un démon P2P local, de créer et configurer des communautés et de publier du contenu -- le tout depuis le terminal.

Il repose sur la couche cliente partagée du protocole Bitsocial et est utilisé par [5chan](/apps/5chan/) et [Seedit](/apps/seedit/) pour la création de communautés et la gestion des nœuds.

## Installation

Des binaires précompilés sont disponibles pour Windows, macOS et Linux. Téléchargez la dernière version pour votre plateforme depuis GitHub :

**[Télécharger depuis les releases GitHub](https://github.com/bitsocialnet/bitsocial-cli/releases)**

Après le téléchargement, rendez le binaire exécutable (macOS/Linux) :

```bash
chmod +x bitsocial
```

## Exécuter le démon

L'usage le plus courant de la CLI est de faire tourner un nœud Bitsocial. Le démon démarre la couche réseau P2P et expose une API locale à laquelle les clients peuvent se connecter.

```bash
bitsocial daemon
```

Au premier lancement, le démon affiche des liens vers la **WebUI**, une interface graphique dans le navigateur pour gérer votre nœud, vos communautés et vos réglages. C'est pratique si vous préférez une interface graphique aux commandes du terminal.

## Actions principales

| Action                         | Description                                                                |
| ------------------------------ | -------------------------------------------------------------------------- |
| Démarrer le démon              | Lancer le nœud P2P Bitsocial                                               |
| Créer une communauté           | Créer une nouvelle communauté                                              |
| Modifier une communauté        | Mettre à jour les paramètres de la communauté (titre, description, règles) |
| Lister les communautés locales | Lister les communautés hébergées sur ce nœud                               |
| Démarrer une communauté        | Commencer à servir une communauté précise                                  |
| Arrêter une communauté         | Arrêter de servir une communauté précise                                   |

Exécutez la CLI avec `--help` pour voir les noms de commandes et les options exposés par la version que vous avez installée :

```bash
bitsocial --help
bitsocial daemon --help
```

## Flux de travail typique

Un enchaînement courant pour héberger une nouvelle communauté :

```bash
# 1. Start the daemon
bitsocial daemon

# 2. In another terminal, inspect the available community-management commands
bitsocial --help
```

À partir de là, utilisez les commandes de gestion de communauté de la version installée pour créer, configurer et commencer à servir une communauté. Une fois démarrée, la communauté est en ligne sur le réseau Bitsocial et accessible depuis les clients compatibles.

## Liens

- **GitHub :** [bitsocialnet/bitsocial-cli](https://github.com/bitsocialnet/bitsocial-cli)
