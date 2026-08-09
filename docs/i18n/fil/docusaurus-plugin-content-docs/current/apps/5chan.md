---
title: 5chan
description: Isang walang server at desentralisadong imageboard na binuo sa Bitsocial protocol kung saan sinuman ay maaaring lumikha at magmay-ari ng mga board.
sidebar_position: 1
---

# 5chan

Ang 5chan ay isang walang server, walang admin, at ganap na desentralisadong imageboard na tumatakbo sa Bitsocial protocol. Sinusunod nito ang pamilyar na istruktura ng direktoryo ng imageboard habang nagpapasok ng desentralisadong pagmamay-ari — kahit sino ay maaaring gumawa ng board, at maraming board ang maaaring maglaban para sa iisang slot sa direktoryo sa pamamagitan ng isang mekanismo ng botohan.

## Mga download

| Platform | Link                                     |
| -------- | ---------------------------------------- |
| Web      | [5chan.app](https://5chan.app)           |
| Desktop  | Available para sa Mac, Windows, at Linux |
| Mobile   | Available para sa Android                |

## Paano gumagana ang mga board

Inaayos ng 5chan ang nilalaman sa mga board gamit ang klasikong layout ng direktoryo (hal., `/b/`, `/g/`). Hindi tulad ng tradisyonal na mga imageboard kung saan kinokontrol ng isang sentral na admin ang bawat board, hinahayaan ng 5chan ang sinumang user na gumawa at ganap na magmay-ari ng sarili niyang board. Kapag maraming board ang nagta-target sa iisang slot sa direktoryo, naglalaban sila para sa posisyong iyon sa pamamagitan ng botohan.

### Paggawa ng board

Upang gumawa ng bagong board, kailangan mong patakbuhin ang `bitsocial-cli` bilang isang peer-to-peer node. Tinitiyak nito na naka-host ang iyong board sa desentralisadong paraan nang hindi umaasa sa anumang sentral na server.

### Mga pagtatalaga sa direktoryo

Ang pagtatalaga ng mga slot sa direktoryo (kung aling board ang lumalabas sa aling path) ay kasalukuyang pinamamahalaan sa pamamagitan ng mga GitHub pull request sa file na `5chan-directories.json`. Pansamantala lamang ang prosesong ito — susuportahan ng mga susunod na release ang paggawa ng board sa loob mismo ng app at ang botohang nakabatay sa pubsub upang awtomatikong hawakan ang mga pagtatalaga sa direktoryo.

## Mga panloob na bahagi

Sa ilalim, ginagamit ng 5chan ang ibinabahaging client layer ng Bitsocial protocol para sa mga
interaksyon nito sa network. Ang web app sa 5chan.app ay nagpapatakbo ng Helia node sa browser
bilang default, kaya ang isang karaniwang tab ay sumasali sa network bilang isang peer: naglo-load
ito ng mga board mula sa ibang peer at nagpa-publish sa pamamagitan ng pubsub, nang walang
sentralisadong IPFS gateway sa daanan ng nilalaman. Tingnan ang [Browser Peer-to-Peer](/browser-p2p/)
para sa kung ano ang kaakibat nito at kung ano pa rin ang hindi kayang gawin ng isang browser node.

## Mga link

- **GitHub**: [github.com/bitsocialnet/5chan](https://github.com/bitsocialnet/5chan)
- **Telegram**: [t.me/fivechandev](https://t.me/fivechandev)
- **Lisensya**: GPL-2.0-only
