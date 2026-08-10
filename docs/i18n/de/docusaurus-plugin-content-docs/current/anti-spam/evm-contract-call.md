---
title: EVM Contract Call Challenge
description: Anti-Spam-Prüfung, die On-Chain-Bedingungen über den Aufruf eines EVM-Smart-Contracts überprüft.
sidebar_position: 4
---

# EVM Contract Call Challenge

EVM Contract Call Challenge prüft den On-Chain-Zustand eines Autors, bevor eine Veröffentlichung zugelassen wird. Betreiber einer Community können verlangen, dass eine Wallet oder eine aufgelöste Identität vor dem Posten eine nur lesende Bedingung in einem Smart Contract erfüllt, etwa ein Mindestguthaben an Token.

- **Quellcode und aktuelle README:** [github.com/bitsocialnet/evm-contract-challenge](https://github.com/bitsocialnet/evm-contract-challenge#readme)
- **npm-Paket:** [`@bitsocial/evm-contract-challenge`](https://www.npmjs.com/package/@bitsocial/evm-contract-challenge)

## Installation

```bash
npm install @bitsocial/evm-contract-challenge
```

## Wofür es gedacht ist

Nutzen Sie diese Prüfung für Communities, in denen die Teilnahme von einem externen EVM-Signal abhängen soll: Token-Besitz, NFT-Besitz, Bewertungen aus Proof of Personhood, Governance-Mitgliedschaft oder eine andere aus einem Contract auslesbare Bedingung.

Aus Sicht des Autors läuft die Prüfung nach der Konfiguration automatisch ab. Sie sieht sich die infrage kommenden Wallet- oder Identitätsquellen an, ruft die konfigurierte Contract-Methode auf und vergleicht den zurückgegebenen Wert mit der Bedingung der Community.

## Aktuelle Paketreferenz

Diese Seite ist bewusst eine Übersicht und keine gespiegelte Konfigurationsreferenz. Die README des Pakets ist die maßgebliche Quelle für die Namen der Prüfungen, Beispiele für die Bitsocial CLI, die Registrierung in pkc-js, Standardwerte der Optionen, ABI-Beispiele, RPC-Verhalten und unterstützte Wallet-Quellen:

- [README von EVM Contract Challenge](https://github.com/bitsocialnet/evm-contract-challenge#readme)

Halten Sie sich beim Einrichten einer produktiven Community lieber an die README im Upstream, denn Contract-Optionen und Beispiele werden mit diesem Paket versioniert und nicht mit dieser Website.

## Wann Sie sie einsetzen sollten

EVM Contract Call Challenge eignet sich besonders für:

- **Communities mit Token-Zugang**, die das Posten auf Token-Halter beschränken.
- **Zugang über NFTs**, bei dem der Besitz eines bestimmten NFT verlangt wird.
- **Räume für DAO-Governance**, in denen nur Halter des Governance-Tokens teilnehmen.

Für Communities, die nicht auf eine On-Chain-Identität setzen, kommen stattdessen [Spam Blocker](./spam-blocker.md) oder [Voucher Challenge](./voucher-challenge.md) infrage.
