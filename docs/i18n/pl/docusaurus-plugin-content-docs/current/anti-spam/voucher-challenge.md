---
title: Voucher Challenge
description: Wyzwanie antyspamowe, które warunkuje publikowanie unikalnymi kodami voucherów rozdawanymi przez właścicieli społeczności.
sidebar_position: 3
---

# Voucher Challenge

Voucher Challenge uzależnia publikację treści od unikalnych kodów voucherów rozdawanych przez właściciela społeczności. Zamiast polegać na automatycznej ocenie, przenosi zaufanie na ręczny proces zaproszeń, w którym znane osoby dostają kody kanałem kontrolowanym przez właściciela.

- **Kod źródłowy i aktualny README:** [github.com/bitsocialnet/voucher-challenge](https://github.com/bitsocialnet/voucher-challenge#readme)
- **Pakiet npm:** [`@bitsocial/voucher-challenge`](https://www.npmjs.com/package/@bitsocial/voucher-challenge)

## Instalacja

```bash
npm install @bitsocial/voucher-challenge
```

## Jak to działa

1. Właściciel społeczności generuje jeden lub więcej unikalnych kodów voucherów.
2. Rozdaje te kody zaufanym autorom wybranym przez siebie kanałem (wiadomość prywatna, e-mail, osobiście itp.).
3. Kiedy autor próbuje opublikować treść, system wyzwań prosi go o kod vouchera.
4. Kod zostaje zweryfikowany — jeśli jest prawdziwy i nie został jeszcze użyty, publikacja jest przyjmowana.

Każdy kod vouchera po zrealizowaniu zostaje przypisany do konkretnego autora, co uniemożliwia ponowne użycie przez inne osoby.

## Aktualna dokumentacja pakietu

Ta strona jest z założenia przeglądem, a nie kopią instrukcji konfiguracji. Źródłem prawdy o aktualnych nazwach wyzwań, przykładach dla Bitsocial CLI, rejestracji w pkc-js, obsługiwanych opcjach i zachowaniu przy realizacji kodów jest README pakietu:

- [README Voucher Challenge](https://github.com/bitsocialnet/voucher-challenge#readme)

Konfigurując działającą społeczność, kieruj się README z repozytorium źródłowego, ponieważ opcje voucherów i sposoby instalacji są wersjonowane razem z tym pakietem, a nie z tą stroną.

## Kiedy go używać

Voucher Challenge najlepiej nadaje się do:

- **Społeczności tylko na zaproszenie**, w których członkostwo jest celowo ograniczone.
- **Przestrzeni kuratorowanych**, w których właściciel osobiście sprawdza każdego uczestnika.
- **Środowisk o wysokim zaufaniu**, w których automatyczna ocena spamu jest zbędna lub niepożądana.

Ponieważ wymaga ręcznego rozdawania kodów, nie skaluje się do dużych, otwartych społeczności. W takich scenariuszach rozważ zamiast tego [Spam Blocker](./spam-blocker.md) lub [EVM Contract Call Challenge](./evm-contract-call.md).
