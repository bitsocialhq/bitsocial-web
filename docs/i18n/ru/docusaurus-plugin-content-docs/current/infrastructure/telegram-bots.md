---
title: Telegram-боты
description: Фид-боты, которые следят за списками сообществ Bitsocial и пересылают записи в каналы Telegram.
sidebar_position: 4
---

# Telegram-боты

Telegram-боты Bitsocial следят за клиентскими списками сообществ в сети Bitsocial и автоматически пересылают новые записи в каналы Telegram. В каждое пересланное сообщение добавляются встроенные кнопки со ссылками на исходную запись в 5chan и Seedit.

- **GitHub**: [bitsocialnet/bitsocial-telegram-bots](https://github.com/bitsocialnet/bitsocial-telegram-bots)

## Доступные боты

| Бот             | Статус   | Описание                                                               |
| --------------- | -------- | ---------------------------------------------------------------------- |
| **5chan Feed**  | Работает | Следит за всеми каталогами 5chan и пересылает новые записи в Telegram. |
| **Seedit Feed** | В планах | Даст те же возможности для сообществ Seedit.                           |

## Настройка

### Что понадобится

- Node.js
- Yarn
- Токен Telegram-бота (получите его у [BotFather](https://t.me/BotFather))

### Установка

Склонируйте репозиторий и установите зависимости:

```bash
git clone https://github.com/bitsocialnet/bitsocial-telegram-bots.git
cd bitsocial-telegram-bots
yarn install
```

### Конфигурация

Создайте в корне проекта файл `.env` и укажите в нём токен бота:

```env
BOT_TOKEN=your_telegram_bot_token
```

### Запуск

После настройки окружения запустите бота:

```bash
yarn start
```

## Формат записи

Пересылая запись в Telegram, бот добавляет к ней две встроенные кнопки:

- **View on 5chan** -- открывает запись в веб-клиенте 5chan.
- **View on Seedit** -- открывает запись в веб-клиенте Seedit.

Так подписчики канала могут сразу перейти к полному обсуждению в том клиенте, который им ближе.
