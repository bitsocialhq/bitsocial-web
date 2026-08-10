---
title: BSO Resolver
description: Zamiana nazw domen .bso na klucze publiczne przy użyciu rekordów TXT Bitsocial.
sidebar_position: 1
---

# BSO Resolver

BSO Resolver zamienia nazwy domen `.bso` na odpowiadające im klucze publiczne, odczytując rekordy TXT Bitsocial. To pakiet rozwiązywania nazw używany przez narzędzia Bitsocial wtedy, gdy widoczna dla użytkownika nazwa `.bso` musi zostać przełożona na materiał klucza rozumiany przez stos peer-to-peer.

- **Kod źródłowy i aktualny plik README:** [github.com/bitsocialnet/bso-resolver](https://github.com/bitsocialnet/bso-resolver#readme)
- **Pakiet npm:** [`@bitsocial/bso-resolver`](https://www.npmjs.com/package/@bitsocial/bso-resolver)

## Instalacja

```bash
npm install @bitsocial/bso-resolver
```

## Gdzie się to wpisuje

Nazwy Bitsocial mają być czytelnymi dla człowieka punktami wejścia do społeczności i profili autorów. Resolver trzyma tę warstwę nazewnictwa poza kodem aplikacji, dzięki czemu klienty mogą najpierw zapytać, czy dana nazwa jest obsługiwana, a potem rozwiązać ją przez punkt wejścia właściwy dla danego środowiska uruchomieniowego.

Sięgnij po niego, gdy budujesz klienta, narzędzie wiersza poleceń lub usługę współpracującą z Bitsocial, które mają przyjmować nazwy `.bso`, a nie wyłącznie surowe klucze publiczne.

## Aktualna dokumentacja pakietu

Ta strona jest celowo przeglądem, a nie kopią dokumentacji API. Źródłem prawdy dla opcji konstruktora, typów zwracanych, zachowania pamięci podręcznej, punktów wejścia, przykładów dostawców i obsługiwanej semantyki zamykania jest plik README pakietu:

- [README pakietu BSO Resolver](https://github.com/bitsocialnet/bso-resolver#readme)

Kopiując kod do projektu, korzystaj z pliku README w repozytorium źródłowym, ponieważ zachowanie resolvera jest wersjonowane razem z pakietem, a nie z tą witryną.
