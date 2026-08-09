---
title: Bitsocial CLI
description: Komentorivikäyttöliittymä Bitsocial-solmun ajamiseen, yhteisöjen luomiseen ja protokollatoimintojen hallintaan.
sidebar_position: 2
---

# Bitsocial CLI

`bitsocial-cli` on komentorivityökalu, jolla ollaan yhteydessä Bitsocial-protokollan taustajärjestelmään. Sen avulla voit ajaa paikallista P2P-taustaprosessia, luoda ja määrittää yhteisöjä sekä julkaista sisältöä – kaikki päätteestä käsin.

Se on rakennettu jaetun Bitsocial-protokollan asiakaskerroksen päälle, ja [5chan](/apps/5chan/) sekä [Seedit](/apps/seedit/) käyttävät sitä yhteisöjen luomiseen ja solmujen hallintaan.

## Asennus

Valmiit binäärit ovat saatavilla Windowsille, macOS:lle ja Linuxille. Lataa alustallesi uusin julkaisu GitHubista:

**[Lataa GitHubin julkaisuista](https://github.com/bitsocialnet/bitsocial-cli/releases)**

Tee binääristä latauksen jälkeen suoritettava (macOS/Linux):

```bash
chmod +x bitsocial
```

## Taustaprosessin ajaminen

CLI:n yleisin käyttötapa on Bitsocial-solmun ajaminen. Taustaprosessi käynnistää P2P-verkkokerroksen ja tarjoaa paikallisen rajapinnan, johon asiakasohjelmat voivat yhdistää.

```bash
bitsocial daemon
```

Ensimmäisellä käynnistyskerralla taustaprosessi tulostaa linkit **WebUI**-käyttöliittymään, joka on selainpohjainen graafinen käyttöliittymä solmun, yhteisöjen ja asetusten hallintaan. Tästä on hyötyä, jos pidät graafisesta käyttöliittymästä enemmän kuin päätekomennoista.

## Keskeiset toiminnot

| Toiminto                    | Kuvaus                                                |
| --------------------------- | ----------------------------------------------------- |
| Käynnistä taustaprosessi    | Käynnistä Bitsocialin P2P-solmu                       |
| Luo yhteisö                 | Luo uusi yhteisö                                      |
| Muokkaa yhteisöä            | Päivitä yhteisön asetukset (otsikko, kuvaus, säännöt) |
| Listaa paikalliset yhteisöt | Listaa tässä solmussa isännöidyt yhteisöt             |
| Käynnistä yhteisö           | Aloita tietyn yhteisön tarjoaminen                    |
| Pysäytä yhteisö             | Lopeta tietyn yhteisön tarjoaminen                    |

Aja CLI `--help`-valitsimella nähdäksesi asentamasi julkaisun nykyiset komentojen nimet ja valitsimet:

```bash
bitsocial --help
bitsocial daemon --help
```

## Tyypillinen työnkulku

Tavanomainen kulku uuden yhteisön isännöinnin aloittamiseen:

```bash
# 1. Start the daemon
bitsocial daemon

# 2. In another terminal, inspect the available community-management commands
bitsocial --help
```

Käytä siitä eteenpäin asentamasi julkaisun yhteisönhallintakomentoja yhteisön luomiseen, määrittämiseen ja tarjoamisen aloittamiseen. Kun yhteisö on käynnistetty, se on aktiivisena Bitsocial-verkossa ja tavoitettavissa yhteensopivista asiakasohjelmista.

## Linkit

- **GitHub:** [bitsocialnet/bitsocial-cli](https://github.com/bitsocialnet/bitsocial-cli)
