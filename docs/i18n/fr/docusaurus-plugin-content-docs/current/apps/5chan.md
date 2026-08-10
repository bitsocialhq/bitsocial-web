---
title: 5chan
description: Un imageboard sans serveur et décentralisé, construit sur le protocole Bitsocial, où chacun peut créer et posséder ses propres boards.
sidebar_position: 1
---

# 5chan

5chan est un imageboard sans serveur, sans administrateur et entièrement décentralisé, qui fonctionne sur le protocole Bitsocial. Il reprend la structure de répertoires familière des imageboards tout en y introduisant une propriété décentralisée : n'importe qui peut créer un board, et plusieurs boards peuvent se disputer le même emplacement de répertoire au moyen d'un mécanisme de vote.

## Téléchargements

| Plateforme | Lien                                  |
| ---------- | ------------------------------------- |
| Web        | [5chan.app](https://5chan.app)        |
| Bureau     | Disponible pour Mac, Windows et Linux |
| Mobile     | Disponible pour Android               |

## Comment fonctionnent les boards

5chan organise le contenu en boards selon une disposition de répertoires classique (par exemple `/b/`, `/g/`). Contrairement aux imageboards traditionnels, où un administrateur central contrôle chaque board, 5chan permet à n'importe quel utilisateur de créer et de posséder pleinement son propre board. Lorsque plusieurs boards visent le même emplacement de répertoire, ils se disputent cette position par un vote.

### Créer un board

Pour créer un board, vous devez exécuter `bitsocial-cli` en tant que nœud peer-to-peer. Cela garantit que votre board est hébergé de manière décentralisée, sans dépendre d'un serveur central.

### Attribution des répertoires

L'attribution des emplacements de répertoire (quel board apparaît à quel chemin) passe actuellement par des pull requests GitHub sur le fichier `5chan-directories.json`. Ce processus est temporaire : de futures versions permettront la création de boards directement dans l'application ainsi qu'un vote via pubsub pour gérer automatiquement l'attribution des répertoires.

## Fonctionnement interne

Sous le capot, 5chan utilise la couche client partagée du protocole Bitsocial pour ses échanges
réseau. L'application web de 5chan.app exécute par défaut un nœud Helia dans le navigateur : un
onglet ordinaire rejoint donc le réseau en tant que pair, il charge les boards depuis d'autres pairs
et publie via pubsub, sans passerelle IPFS centralisée sur le chemin du contenu. Voir
[Peer-to-peer dans le navigateur](/browser-p2p/) pour ce que cela implique et ce qu'un nœud de
navigateur ne sait toujours pas faire.

## Liens

- **GitHub** : [github.com/bitsocialnet/5chan](https://github.com/bitsocialnet/5chan)
- **Telegram** : [t.me/fivechandev](https://t.me/fivechandev)
- **Licence** : GPL-2.0-only
