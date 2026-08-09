---
title: 5chan
description: Palvelimeton, hajautettu kuvalauta, joka on rakennettu Bitsocial-protokollan päälle ja jossa kuka tahansa voi luoda ja omistaa lautoja.
sidebar_position: 1
---

# 5chan

5chan on palvelimeton, ylläpitäjätön ja täysin hajautettu kuvalauta, joka toimii Bitsocial-protokollan päällä. Se noudattaa tuttua kuvalautojen hakemistorakennetta, mutta tuo mukaan hajautetun omistajuuden — kuka tahansa voi luoda laudan, ja useampi lauta voi kilpailla samasta hakemistopaikasta äänestyksen kautta.

## Lataukset

| Alusta   | Linkki                                       |
| -------- | -------------------------------------------- |
| Web      | [5chan.app](https://5chan.app)               |
| Työpöytä | Saatavilla Macille, Windowsille ja Linuxille |
| Mobiili  | Saatavilla Androidille                       |

## Miten laudat toimivat

5chan järjestää sisällön laudoiksi klassisen hakemistorakenteen avulla (esimerkiksi `/b/`, `/g/`). Toisin kuin perinteisillä kuvalaudoilla, joissa keskitetty ylläpitäjä hallitsee jokaista lautaa, 5chanissa kuka tahansa käyttäjä voi luoda oman lautansa ja omistaa sen kokonaan. Kun useampi lauta tavoittelee samaa hakemistopaikkaa, ne kilpailevat siitä äänestämällä.

### Laudan luominen

Uuden laudan luominen edellyttää, että ajat `bitsocial-cli`-ohjelmaa vertaisverkkosolmuna. Näin lautaasi isännöidään hajautetusti ilman riippuvuutta keskitetystä palvelimesta.

### Hakemistopaikkojen jako

Hakemistopaikkojen jakoa (mikä lauta näkyy missäkin polussa) hallitaan tällä hetkellä GitHubin pull requesteilla `5chan-directories.json`-tiedostoon. Tämä on väliaikainen käytäntö — tulevat julkaisut tukevat laudan luomista suoraan sovelluksessa ja pubsub-pohjaista äänestystä, joka hoitaa hakemistopaikkojen jaon automaattisesti.

## Sisäinen toteutus

Konepellin alla 5chan käyttää verkkoliikenteeseensä Bitsocial-protokollan yhteistä asiakaskerrosta.
Osoitteessa 5chan.app toimiva verkkosovellus ajaa oletuksena Helia-solmua selaimessa, joten
tavallinen välilehti liittyy verkkoon vertaisena: se lataa lautoja muilta vertaisilta ja julkaisee
pubsubin kautta ilman keskitettyä IPFS-yhdyskäytävää sisältöpolussa. Katso
[Selaimen vertaisverkko](/browser-p2p/), niin näet mitä se edellyttää ja mihin selainsolmu ei
edelleenkään pysty.

## Linkit

- **GitHub**: [github.com/bitsocialnet/5chan](https://github.com/bitsocialnet/5chan)
- **Telegram**: [t.me/fivechandev](https://t.me/fivechandev)
- **Lisenssi**: GPL-2.0-only
