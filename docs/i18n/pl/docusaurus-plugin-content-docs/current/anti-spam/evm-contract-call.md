---
title: EVM Contract Call Challenge
description: Wyzwanie antyspamowe, które sprawdza warunki on-chain, wywołując smart kontrakt EVM.
sidebar_position: 4
---

# EVM Contract Call Challenge

EVM Contract Call Challenge weryfikuje stan autora on-chain, zanim pozwoli mu opublikować treść. Właściciele społeczności mogą wymagać, aby portfel lub rozwiązana tożsamość spełniały warunek odczytywany ze smart kontraktu — na przykład posiadanie minimalnego salda tokenów — zanim pojawi się wpis.

- **Kod źródłowy i aktualny README:** [github.com/bitsocialnet/evm-contract-challenge](https://github.com/bitsocialnet/evm-contract-challenge#readme)
- **Pakiet npm:** [`@bitsocial/evm-contract-challenge`](https://www.npmjs.com/package/@bitsocial/evm-contract-challenge)

## Instalacja

```bash
npm install @bitsocial/evm-contract-challenge
```

## Gdzie się sprawdza

Użyj tego wyzwania w społecznościach, w których udział ma zależeć od zewnętrznego sygnału z EVM: posiadania tokenów, posiadania NFT, wyniku proof-of-personhood, członkostwa w organie zarządzającym albo innego warunku dającego się odczytać z kontraktu.

Po skonfigurowaniu wyzwanie jest z perspektywy autora automatyczne. Sprawdza kwalifikujące się portfele lub źródła tożsamości, wywołuje wskazaną metodę kontraktu i porównuje zwróconą wartość z warunkiem ustalonym przez społeczność.

## Aktualna dokumentacja pakietu

Ta strona jest z założenia przeglądem, a nie kopią dokumentacji konfiguracji. Źródłem prawdy o nazwach wyzwań, przykładach dla Bitsocial CLI, rejestracji w pkc-js, domyślnych wartościach opcji, przykładach ABI, zachowaniu RPC i obsługiwanych źródłach portfeli jest README pakietu:

- [README EVM Contract Challenge](https://github.com/bitsocialnet/evm-contract-challenge#readme)

Konfigurując działającą społeczność, kieruj się README z repozytorium źródłowego, ponieważ opcje kontraktu i przykłady są wersjonowane razem z tym pakietem, a nie z tą stroną.

## Kiedy go używać

EVM Contract Call Challenge sprawdza się idealnie w przypadku:

- **Społeczności z bramką tokenową**, które ograniczają publikowanie do posiadaczy tokenów.
- **Dostępu opartego na NFT**, gdy wymagane jest posiadanie konkretnego NFT.
- **Przestrzeni zarządzania DAO**, w których udział jest ograniczony do posiadaczy tokenów zarządczych.

W społecznościach, które nie opierają się na tożsamości on-chain, rozważ zamiast tego [Spam Blocker](./spam-blocker.md) lub [Voucher Challenge](./voucher-challenge.md).
