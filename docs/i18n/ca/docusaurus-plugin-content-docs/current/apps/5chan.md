---
title: 5chan
description: Un tauler d'imatges descentralitzat i sense servidor, construït sobre el protocol Bitsocial, on qualsevol pot crear i posseir taulers.
sidebar_position: 1
---

# 5chan

5chan és un tauler d'imatges sense servidor, sense administradors i totalment descentralitzat que funciona sobre el protocol Bitsocial. Segueix l'estructura de directoris habitual dels taulers d'imatges i hi afegeix la propietat descentralitzada: qualsevol pot crear un tauler, i diversos taulers poden competir per la mateixa posició del directori mitjançant un mecanisme de votació.

## Descàrregues

| Plataforma | Enllaç                                |
| ---------- | ------------------------------------- |
| Web        | [5chan.app](https://5chan.app)        |
| Escriptori | Disponible per a Mac, Windows i Linux |
| Mòbil      | Disponible per a Android              |

## Com funcionen els taulers

5chan organitza el contingut en taulers seguint una disposició de directoris clàssica (p. ex., `/b/`, `/g/`). A diferència dels taulers d'imatges tradicionals, on un administrador central controla tots els taulers, 5chan permet que qualsevol usuari creï i sigui plenament propietari del seu propi tauler. Quan diversos taulers apunten a la mateixa posició del directori, competeixen per aquesta posició mitjançant votació.

### Crear un tauler

Per crear un tauler nou, cal executar `bitsocial-cli` com a node peer-to-peer. Així el vostre tauler s'allotja de manera descentralitzada, sense dependre de cap servidor central.

### Assignacions de directori

Les assignacions de les posicions del directori (quin tauler apareix a quina ruta) es gestionen actualment mitjançant pull requests a GitHub sobre el fitxer `5chan-directories.json`. És un procés temporal: les versions futures admetran la creació de taulers dins de l'aplicació i la votació per pubsub per resoldre les assignacions de directori automàticament.

## Interioritats

Per sota, 5chan fa servir la capa de client compartida del protocol Bitsocial per a les seves
interaccions de xarxa. L'aplicació web de 5chan.app executa per defecte un node Helia al navegador,
de manera que una pestanya normal s'uneix a la xarxa com a parell: carrega taulers d'altres parells i
publica per pubsub, sense cap passarel·la IPFS centralitzada al camí del contingut. Vegeu
[Peer-to-peer al navegador](/browser-p2p/) per saber què implica això i què encara no pot fer un node
de navegador.

## Enllaços

- **GitHub**: [github.com/bitsocialnet/5chan](https://github.com/bitsocialnet/5chan)
- **Telegram**: [t.me/fivechandev](https://t.me/fivechandev)
- **Llicència**: GPL-2.0-only
