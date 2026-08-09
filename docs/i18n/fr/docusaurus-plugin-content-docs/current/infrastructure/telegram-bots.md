---
title: Bots Telegram
description: Bots de flux qui surveillent les listes de communautés Bitsocial et transfèrent les publications vers des canaux Telegram.
sidebar_position: 4
---

# Bots Telegram

Les bots Telegram de Bitsocial surveillent les listes de communautés des clients sur le réseau Bitsocial et transfèrent automatiquement les nouvelles publications vers des canaux Telegram. Chaque message transféré comporte des boutons intégrés qui renvoient à la publication d'origine sur 5chan et Seedit.

- **GitHub** : [bitsocialnet/bitsocial-telegram-bots](https://github.com/bitsocialnet/bitsocial-telegram-bots)

## Bots disponibles

| Bot             | Statut | Description                                                                                 |
| --------------- | ------ | ------------------------------------------------------------------------------------------- |
| **5chan Feed**  | Actif  | Surveille tous les répertoires 5chan et transfère les nouvelles publications vers Telegram. |
| **Seedit Feed** | Prévu  | Offrira les mêmes fonctionnalités pour les communautés Seedit.                              |

## Mise en place

### Prérequis

- Node.js
- Yarn
- Un jeton de bot Telegram (créez-en un via [BotFather](https://t.me/BotFather))

### Installation

Clonez le dépôt et installez les dépendances :

```bash
git clone https://github.com/bitsocialnet/bitsocial-telegram-bots.git
cd bitsocial-telegram-bots
yarn install
```

### Configuration

Créez un fichier `.env` à la racine du projet avec votre jeton de bot :

```env
BOT_TOKEN=your_telegram_bot_token
```

### Exécution

Démarrez le bot une fois votre environnement configuré :

```bash
yarn start
```

## Format des publications

Lorsque le bot transfère une publication vers Telegram, il y ajoute deux boutons intégrés :

- **Voir sur 5chan** -- Ouvre la publication dans le client web 5chan.
- **Voir sur Seedit** -- Ouvre la publication dans le client web Seedit.

Les abonnés Telegram peuvent ainsi accéder directement au fil de discussion complet sur le client de leur choix.
