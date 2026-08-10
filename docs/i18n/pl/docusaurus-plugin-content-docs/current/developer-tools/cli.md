---
title: Bitsocial CLI
description: Interfejs wiersza poleceń do uruchamiania węzła Bitsocial, tworzenia społeczności i obsługi operacji protokołu.
sidebar_position: 2
---

# Bitsocial CLI

`bitsocial-cli` to narzędzie wiersza poleceń do pracy z backendem protokołu Bitsocial. Pozwala uruchomić lokalnego demona P2P, tworzyć i konfigurować społeczności oraz publikować treści -- wszystko z poziomu terminala.

Zbudowano je na wspólnej warstwie klienta protokołu Bitsocial, a korzystają z niego [5chan](/apps/5chan/) i [Seedit](/apps/seedit/) przy tworzeniu społeczności i zarządzaniu węzłami.

## Instalacja

Gotowe pliki binarne są dostępne dla systemów Windows, macOS i Linux. Pobierz najnowsze wydanie dla swojej platformy z GitHub:

**[Pobierz z wydań na GitHub](https://github.com/bitsocialnet/bitsocial-cli/releases)**

Po pobraniu nadaj plikowi binarnemu prawo do wykonywania (macOS/Linux):

```bash
chmod +x bitsocial
```

## Uruchamianie demona

Najczęstszym zastosowaniem CLI jest uruchomienie węzła Bitsocial. Demon startuje warstwę sieciową P2P i udostępnia lokalne API, z którym mogą łączyć się klienty.

```bash
bitsocial daemon
```

Przy pierwszym uruchomieniu demon wypisuje odnośniki do **WebUI**, czyli działającego w przeglądarce interfejsu graficznego do zarządzania węzłem, społecznościami i ustawieniami. Przyda się, jeśli wolisz GUI od poleceń w terminalu.

## Kluczowe operacje

| Operacja                     | Opis                                                  |
| ---------------------------- | ----------------------------------------------------- |
| Uruchomienie demona          | Uruchamia węzeł P2P Bitsocial                         |
| Utworzenie społeczności      | Tworzy nową społeczność                               |
| Edycja społeczności          | Zmienia ustawienia społeczności (tytuł, opis, zasady) |
| Lista lokalnych społeczności | Wypisuje społeczności hostowane na tym węźle          |
| Uruchomienie społeczności    | Zaczyna udostępniać wybraną społeczność               |
| Zatrzymanie społeczności     | Przestaje udostępniać wybraną społeczność             |

Uruchom CLI z `--help`, aby zobaczyć aktualne nazwy poleceń i flagi udostępniane przez zainstalowane wydanie:

```bash
bitsocial --help
bitsocial daemon --help
```

## Typowy przebieg pracy

Częsty scenariusz konfiguracji przy hostowaniu nowej społeczności:

```bash
# 1. Start the daemon
bitsocial daemon

# 2. In another terminal, inspect the available community-management commands
bitsocial --help
```

Dalej korzystaj z poleceń zarządzania społecznością dostępnych w zainstalowanym wydaniu, aby utworzyć i skonfigurować społeczność oraz zacząć ją udostępniać. Po uruchomieniu społeczność jest widoczna w sieci Bitsocial i dostępna ze zgodnych klientów.

## Linki

- **GitHub:** [bitsocialnet/bitsocial-cli](https://github.com/bitsocialnet/bitsocial-cli)
