---
title: Bitsocial CLI
description: Command-line interface para sa pagpapatakbo ng Bitsocial node, paggawa ng mga komunidad, at pamamahala ng mga operasyon ng protocol.
sidebar_position: 2
---

# Bitsocial CLI

Ang `bitsocial-cli` ay isang command-line tool para sa pakikipag-ugnayan sa Bitsocial protocol backend. Hinahayaan ka nitong magpatakbo ng lokal na P2P daemon, gumawa at mag-configure ng mga komunidad, at maglathala ng content -- lahat mula sa terminal.

Nakabuo ito sa ibabaw ng nakabahaging protocol client layer ng Bitsocial at ginagamit ng [5chan](/apps/5chan/) at [Seedit](/apps/seedit/) para sa paggawa ng komunidad at pamamahala ng node.

## Pag-install

May mga pre-built na binary para sa Windows, macOS, at Linux. I-download ang pinakabagong release para sa iyong platform mula sa GitHub:

**[I-download mula sa GitHub Releases](https://github.com/bitsocialnet/bitsocial-cli/releases)**

Pagkatapos i-download, gawing executable ang binary (macOS/Linux):

```bash
chmod +x bitsocial
```

## Pagpapatakbo ng Daemon

Ang pinakakaraniwang gamit ng CLI ay ang pagpapatakbo ng isang Bitsocial node. Sinisimulan ng daemon ang P2P networking layer at inilalantad ang isang lokal na API na maaaring konektahan ng mga client.

```bash
bitsocial daemon
```

Sa unang paglulunsad, naglalabas ang daemon ng mga link papunta sa **WebUI**, isang graphical na interface na nakabase sa browser para pamahalaan ang iyong node, mga komunidad, at mga setting. Kapaki-pakinabang ito kung mas gusto mo ang GUI kaysa sa mga utos sa terminal.

## Mga Pangunahing Aksyon

| Aksyon                            | Paglalarawan                                                                  |
| --------------------------------- | ----------------------------------------------------------------------------- |
| Simulan ang daemon                | Ilunsad ang Bitsocial P2P node                                                |
| Gumawa ng komunidad               | Gumawa ng bagong komunidad                                                    |
| I-edit ang komunidad              | I-update ang mga setting ng komunidad (pamagat, paglalarawan, mga panuntunan) |
| Ilista ang mga lokal na komunidad | Ilista ang mga komunidad na naka-host sa node na ito                          |
| Simulan ang isang komunidad       | Simulan ang paghahatid ng isang partikular na komunidad                       |
| Ihinto ang isang komunidad        | Ihinto ang paghahatid ng isang partikular na komunidad                        |

Patakbuhin ang CLI gamit ang `--help` upang makita ang kasalukuyang mga pangalan ng utos at flag na inilalantad ng iyong naka-install na release:

```bash
bitsocial --help
bitsocial daemon --help
```

## Karaniwang Daloy ng Trabaho

Isang karaniwang daloy ng setup para sa pag-host ng bagong komunidad:

```bash
# 1. Start the daemon
bitsocial daemon

# 2. In another terminal, inspect the available community-management commands
bitsocial --help
```

Mula roon, gamitin ang mga utos sa pamamahala ng komunidad ng naka-install na release upang gumawa, mag-configure, at simulan ang paghahatid ng isang komunidad. Kapag nasimulan na, live na ang komunidad sa Bitsocial network at maa-access mula sa mga compatible na client.

## Mga Link

- **GitHub:** [bitsocialnet/bitsocial-cli](https://github.com/bitsocialnet/bitsocial-cli)
