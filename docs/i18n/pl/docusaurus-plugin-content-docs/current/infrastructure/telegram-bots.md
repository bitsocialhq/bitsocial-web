---
title: Boty Telegram
description: Boty kanałów, które śledzą listy społeczności Bitsocial i przekazują posty na kanały Telegram.
sidebar_position: 4
---

# Boty Telegram

Boty Telegram od Bitsocial śledzą listy społeczności klientów w sieci Bitsocial i automatycznie przekazują nowe posty na kanały Telegram. Każda przekazana wiadomość zawiera przyciski inline prowadzące z powrotem do oryginalnego posta na 5chan i w Seedit.

- **GitHub**: [bitsocialnet/bitsocial-telegram-bots](https://github.com/bitsocialnet/bitsocial-telegram-bots)

## Dostępne boty

| Bot             | Status    | Opis                                                                 |
| --------------- | --------- | -------------------------------------------------------------------- |
| **5chan Feed**  | Aktywny   | Śledzi wszystkie katalogi 5chan i przekazuje nowe posty na Telegram. |
| **Seedit Feed** | Planowany | Zapewni tę samą funkcjonalność dla społeczności Seedit.              |

## Konfiguracja

### Wymagania wstępne

- Node.js
- Yarn
- Token bota Telegram (utwórz go przez [BotFather](https://t.me/BotFather))

### Instalacja

Sklonuj repozytorium i zainstaluj zależności:

```bash
git clone https://github.com/bitsocialnet/bitsocial-telegram-bots.git
cd bitsocial-telegram-bots
yarn install
```

### Konfiguracja środowiska

Utwórz plik `.env` w katalogu głównym projektu i wpisz w nim token bota:

```env
BOT_TOKEN=your_telegram_bot_token
```

### Uruchamianie

Po skonfigurowaniu środowiska uruchom bota:

```bash
yarn start
```

## Format posta

Gdy bot przekazuje post na Telegram, dołącza do niego dwa przyciski inline:

- **View on 5chan** -- otwiera post w kliencie webowym 5chan.
- **View on Seedit** -- otwiera post w kliencie webowym Seedit.

Dzięki temu subskrybenci Telegrama mogą przejść wprost do pełnego wątku dyskusji w wybranym przez siebie kliencie.
