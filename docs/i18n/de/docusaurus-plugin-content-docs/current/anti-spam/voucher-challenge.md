---
title: Voucher Challenge
description: Anti-Spam-Prüfung, die das Veröffentlichen an eindeutige Gutscheincodes bindet, die von den Betreibern einer Community verteilt werden.
sidebar_position: 3
---

# Voucher Challenge

Voucher Challenge bindet die Veröffentlichung von Inhalten an eindeutige Gutscheincodes, die der Betreiber einer Community verteilt. Statt auf automatische Bewertung zu setzen, verlagert sie das Vertrauen auf einen manuellen Einladungsablauf, bei dem bekannte Personen ihre Codes über einen Kanal erhalten, den der Betreiber kontrolliert.

- **Quellcode und aktuelle README:** [github.com/bitsocialnet/voucher-challenge](https://github.com/bitsocialnet/voucher-challenge#readme)
- **npm-Paket:** [`@bitsocial/voucher-challenge`](https://www.npmjs.com/package/@bitsocial/voucher-challenge)

## Installation

```bash
npm install @bitsocial/voucher-challenge
```

## So funktioniert es

1. Der Betreiber einer Community erzeugt einen oder mehrere eindeutige Gutscheincodes.
2. Er verteilt diese Codes über einen Kanal seiner Wahl an vertrauenswürdige Autoren (Direktnachricht, E-Mail, persönlich usw.).
3. Versucht ein Autor zu veröffentlichen, fragt das System nach einem Gutscheincode.
4. Der Code wird geprüft. Ist er echt und noch nicht eingelöst, wird die Veröffentlichung angenommen.

Jeder Gutscheincode ist nach dem Einlösen an einen bestimmten Autor gebunden, sodass andere ihn nicht erneut verwenden können.

## Aktuelle Paketreferenz

Diese Seite ist bewusst eine Übersicht und keine gespiegelte Einrichtungsanleitung. Die README des Pakets ist die maßgebliche Quelle für aktuelle Namen der Prüfungen, Beispiele für die Bitsocial CLI, die Registrierung in pkc-js, unterstützte Optionen und das Verhalten beim Einlösen:

- [README von Voucher Challenge](https://github.com/bitsocialnet/voucher-challenge#readme)

Halten Sie sich beim Einrichten einer produktiven Community lieber an die README im Upstream, denn Gutscheinoptionen und Installationsabläufe werden mit diesem Paket versioniert und nicht mit dieser Website.

## Wann Sie sie einsetzen sollten

Voucher Challenge passt am besten zu:

- **Communities nur mit Einladung**, in denen die Mitgliedschaft bewusst beschränkt ist.
- **Kuratierten Räumen**, in denen der Betreiber jeden Teilnehmer persönlich prüft.
- **Umgebungen mit hohem Vertrauen**, in denen eine automatische Spam-Bewertung unnötig oder unerwünscht ist.

Da die Codes von Hand verteilt werden müssen, skaliert das Verfahren nicht auf große, offene Communities. Für solche Fälle kommen [Spam Blocker](./spam-blocker.md) oder [EVM Contract Call Challenge](./evm-contract-call.md) infrage.
