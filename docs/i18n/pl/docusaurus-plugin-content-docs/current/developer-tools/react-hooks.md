---
title: Hooki React
description: Biblioteka hooków React do budowania zdecentralizowanych aplikacji społecznościowych opartych na protokole Bitsocial.
sidebar_position: 1
---

# Hooki React

Pakiet `bitsocial-react-hooks` udostępnia znajome API hooków React do pracy z protokołem Bitsocial. Obsługuje pobieranie kanałów, komentarzy i profili autorów, zarządzanie kontami, publikowanie treści oraz subskrybowanie społeczności -- wszystko bez udziału centralnego serwera.

Ta biblioteka jest podstawowym interfejsem, z którego korzystają [5chan](/apps/5chan/) i inne aplikacje klienckie Bitsocial.

:::note
`bitsocial-react-hooks` nie jest obecnie publikowany w npm -- pobiera się go bezpośrednio z GitHub.
:::

## Instalacja

Ponieważ pakiet nie trafił jeszcze do npm, zainstaluj go bezpośrednio z GitHub, przypinając konkretny hash commita:

```bash
yarn add https://github.com/bitsocialnet/bitsocial-react-hooks.git#<commit-hash>
```

W miejsce `<commit-hash>` wstaw commit, którego chcesz użyć.

## Przegląd API

Hooki są pogrupowane w kategorie funkcjonalne. Poniżej znajdziesz podsumowanie tych najczęściej używanych w każdej kategorii. Pełne sygnatury, parametry i typy zwracane opisuje [pełna dokumentacja API na GitHub](https://github.com/bitsocialnet/bitsocial-react-hooks).

### Konta

Zarządzanie lokalnymi kontami użytkownika, tożsamością i ustawieniami.

- `useAccount(accountName?)` -- zwraca obiekt aktywnego (lub wskazanego z nazwy) konta
- `useAccounts()` -- zwraca wszystkie konta zapisane lokalnie
- `useAccountComments(options?)` -- zwraca komentarze opublikowane z aktywnego konta

### Komentarze

Pobieranie pojedynczych komentarzy i wątków oraz praca z nimi.

- `useComment(commentCid?)` -- pobiera pojedynczy komentarz na podstawie jego CID
- `useComments(commentCids?)` -- pobiera wiele komentarzy naraz
- `useEditedComment(comment?)` -- zwraca najnowszą, edytowaną wersję komentarza

### Społeczności

Pobieranie metadanych i ustawień społeczności.

- Hook wyszukiwania pojedynczej społeczności -- pobiera społeczność na podstawie adresu
- Hook wyszukiwania wielu społeczności -- pobiera wiele społeczności naraz
- Hook statystyk społeczności -- zwraca liczbę subskrybentów i wpisów

### Autorzy

Wyszukiwanie profili autorów i ich metadanych.

- `useAuthor(authorAddress?)` -- pobiera profil autora
- `useAuthorComments(options?)` -- zwraca komentarze konkretnego autora
- `useResolvedAuthorAddress(authorAddress?)` -- rozwiązuje adres czytelny dla człowieka (np. ENS) na adres protokołu

### Kanały

Subskrybowanie kanałów treści i przechodzenie przez kolejne strony.

- `useFeed(options?)` -- zwraca stronicowany kanał wpisów z jednej lub wielu społeczności
- `useBufferedFeeds(feedOptions?)` -- buforuje z wyprzedzeniem wiele kanałów, aby przyspieszyć renderowanie
- `useAuthorFeed(authorAddress?)` -- zwraca kanał wpisów konkretnego autora

### Akcje

Publikowanie treści i operacje zapisu.

- `usePublishComment(options?)` -- publikuje nowy komentarz lub odpowiedź
- `usePublishVote(options?)` -- oddaje głos w górę lub w dół
- `useSubscribe(options?)` -- subskrybuje społeczność albo anuluje subskrypcję

### Stany i RPC

Śledzenie stanu połączenia i praca ze zdalnym demonem Bitsocial.

- `useClientsStates(options?)` -- zwraca stan połączenia klientów IPFS/pubsub
- Hook ustawień RPC -- zwraca aktualną konfigurację demona RPC

## Rozwój

Aby pracować nad biblioteką hooków lokalnie:

**Wymagania wstępne:** Node.js, włączony Corepack, Yarn 4

```bash
git clone https://github.com/bitsocialnet/bitsocial-react-hooks.git
cd bitsocial-react-hooks
corepack enable
yarn install
```

Polecenia testów i budowania znajdziesz w pliku README repozytorium.

## Linki

- **GitHub:** [bitsocialnet/bitsocial-react-hooks](https://github.com/bitsocialnet/bitsocial-react-hooks)
- **Licencja:** GPL-2.0-only
