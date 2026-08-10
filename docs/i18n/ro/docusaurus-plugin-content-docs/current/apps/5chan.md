---
title: 5chan
description: Un imageboard descentralizat și fără server, construit pe protocolul Bitsocial, unde oricine poate crea și deține board-uri.
sidebar_position: 1
---

# 5chan

5chan este un imageboard fără server, fără administrator și complet descentralizat, care rulează pe protocolul Bitsocial. Păstrează structura familiară de directoare a imageboard-urilor, introducând în același timp proprietatea descentralizată — oricine poate crea un board, iar mai multe board-uri pot concura pentru același slot de director printr-un mecanism de vot.

## Descărcări

| Platformă | Link                                    |
| --------- | --------------------------------------- |
| Web       | [5chan.app](https://5chan.app)          |
| Desktop   | Disponibil pentru Mac, Windows și Linux |
| Mobil     | Disponibil pentru Android               |

## Cum funcționează board-urile

5chan organizează conținutul în board-uri, folosind o structură clasică de directoare (de exemplu, `/b/`, `/g/`). Spre deosebire de imageboard-urile tradiționale, unde un administrator central controlează fiecare board, 5chan permite oricărui utilizator să creeze și să dețină în întregime propriul board. Când mai multe board-uri vizează același slot de director, concurează pentru acea poziție prin vot.

### Crearea unui board

Pentru a crea un board nou, trebuie să rulezi `bitsocial-cli` ca nod peer-to-peer. Astfel, board-ul tău este găzduit în mod descentralizat, fără să depindă de vreun server central.

### Atribuirea directoarelor

Atribuirea sloturilor de director (care board apare la ce cale) este gestionată în prezent prin pull request-uri pe GitHub către fișierul `5chan-directories.json`. Este un proces temporar — versiunile viitoare vor permite crearea board-urilor direct în aplicație și vot prin pubsub, astfel încât atribuirea directoarelor să se facă automat.

## Funcționare internă

În spate, 5chan folosește stratul de client comun al protocolului Bitsocial pentru interacțiunile sale de rețea.
Aplicația web de la 5chan.app rulează implicit un nod Helia în browser, așa că o filă obișnuită se alătură
rețelei ca peer: încarcă board-uri de la alți peers și publică prin pubsub, fără niciun gateway IPFS
centralizat pe traseul conținutului. Vezi [Peer-to-peer în browser](/browser-p2p/) pentru ce presupune
asta și ce nu poate face încă un nod din browser.

## Legături

- **GitHub**: [github.com/bitsocialnet/5chan](https://github.com/bitsocialnet/5chan)
- **Telegram**: [t.me/fivechandev](https://t.me/fivechandev)
- **Licență**: GPL-2.0-only
