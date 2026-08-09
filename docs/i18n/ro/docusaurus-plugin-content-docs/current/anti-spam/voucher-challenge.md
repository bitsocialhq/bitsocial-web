---
title: Voucher Challenge
description: Provocare anti-spam care condiționează publicarea de coduri voucher unice, distribuite de proprietarii comunităților.
sidebar_position: 3
---

# Voucher Challenge

Voucher Challenge condiționează publicarea conținutului de coduri voucher unice, distribuite de proprietarul comunității. În loc să se bazeze pe punctare automată, mută încrederea către un flux manual de invitații, în care persoane cunoscute primesc coduri printr-un canal controlat de proprietar.

- **Cod sursă și README actual:** [github.com/bitsocialnet/voucher-challenge](https://github.com/bitsocialnet/voucher-challenge#readme)
- **Pachet npm:** [`@bitsocial/voucher-challenge`](https://www.npmjs.com/package/@bitsocial/voucher-challenge)

## Instalare

```bash
npm install @bitsocial/voucher-challenge
```

## Cum funcționează

1. Proprietarul unei comunități generează unul sau mai multe coduri voucher unice.
2. Proprietarul distribuie acele coduri autorilor de încredere printr-un canal la alegere (mesaj direct, e-mail, personal etc.).
3. Când un autor încearcă să publice, sistemul de provocare îi cere un cod voucher.
4. Codul este validat -- dacă este autentic și nu a mai fost folosit, publicarea este acceptată.

Fiecare cod voucher este legat de un anumit autor odată revendicat, ceea ce împiedică reutilizarea lui de către altcineva.

## Referința actuală a pachetului

Această pagină este intenționat o prezentare generală, nu o copie a ghidului de configurare. README-ul pachetului este sursa de adevăr pentru numele actuale ale provocărilor, exemplele de Bitsocial CLI, înregistrarea în pkc-js, opțiunile acceptate și comportamentul la revendicare:

- [README-ul Voucher Challenge](https://github.com/bitsocialnet/voucher-challenge#readme)

Preferă README-ul din amonte atunci când configurezi o comunitate activă, deoarece opțiunile de voucher și fluxurile de instalare sunt versionate împreună cu acel pachet, nu cu acest site.

## Când să o folosești

Voucher Challenge este cea mai potrivită pentru:

- **Comunități doar pe bază de invitație**, unde apartenența este restricționată intenționat.
- **Spații curatoriate**, unde proprietarul verifică personal fiecare participant.
- **Medii cu grad ridicat de încredere**, unde punctarea automată a spamului este inutilă sau nedorită.

Pentru că necesită distribuirea manuală a codurilor, nu se scalează la comunități mari și deschise. Pentru acele scenarii, ia în calcul în schimb [Spam Blocker](./spam-blocker.md) sau [EVM Contract Call Challenge](./evm-contract-call.md).
