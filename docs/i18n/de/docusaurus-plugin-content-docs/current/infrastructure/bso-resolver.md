---
title: BSO-Resolver
description: Auflösung von .bso-Domainnamen zu öffentlichen Schlüsseln über Bitsocial-TXT-Records.
sidebar_position: 1
---

# BSO-Resolver

BSO-Resolver übersetzt `.bso`-Domainnamen in die zugehörigen öffentlichen Schlüssel, indem er Bitsocial-TXT-Records ausliest. Es ist das Resolver-Paket, das die Bitsocial-Werkzeuge einsetzen, sobald aus einem für Menschen gedachten `.bso`-Namen jenes Schlüsselmaterial werden muss, das der Peer-to-Peer-Stack versteht.

- **Quellcode und aktuelle README:** [github.com/bitsocialnet/bso-resolver](https://github.com/bitsocialnet/bso-resolver#readme)
- **npm-Paket:** [`@bitsocial/bso-resolver`](https://www.npmjs.com/package/@bitsocial/bso-resolver)

## Installation

```bash
npm install @bitsocial/bso-resolver
```

## Wo es hineinpasst

Bitsocial-Namen sind als lesbare Einstiegspunkte für Communities und Autoren gedacht. Der Resolver hält diese Namensschicht vom Anwendungscode getrennt: Clients können zunächst abfragen, ob ein Name unterstützt wird, und ihn anschließend über den laufzeitspezifischen Einstiegspunkt des Pakets auflösen.

Verwenden Sie ihn, wenn Sie einen Bitsocial-fähigen Client, ein Kommandozeilenwerkzeug oder einen Dienst integrieren, der nicht nur rohe öffentliche Schlüssel, sondern auch `.bso`-Namen entgegennehmen soll.

## Referenz zum aktuellen Paket

Diese Seite ist bewusst eine Übersicht und keine gespiegelte API-Referenz. Die README des Pakets ist die maßgebliche Quelle für Konstruktoroptionen, Rückgabetypen, Caching-Verhalten, Einstiegspunkte, Provider-Beispiele und die unterstützte Shutdown-Semantik:

- [BSO-Resolver-README](https://github.com/bitsocialnet/bso-resolver#readme)

Halten Sie sich beim Kopieren von Code in ein Projekt an die Upstream-README, denn das Verhalten des Resolvers ist an die Version dieses Pakets gebunden und nicht an diese Website.
