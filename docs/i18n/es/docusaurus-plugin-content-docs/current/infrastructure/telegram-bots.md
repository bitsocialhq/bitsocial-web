---
title: Bots de Telegram
description: Bots de feed que vigilan las listas de comunidades de Bitsocial y reenvían las publicaciones a canales de Telegram.
sidebar_position: 4
---

# Bots de Telegram

Los bots de Telegram de Bitsocial vigilan las listas de comunidades de los clientes en la red de Bitsocial y reenvían automáticamente las publicaciones nuevas a canales de Telegram. Cada mensaje reenviado incluye botones en línea que enlazan de vuelta a la publicación original en 5chan y Seedit.

- **GitHub**: [bitsocialnet/bitsocial-telegram-bots](https://github.com/bitsocialnet/bitsocial-telegram-bots)

## Bots disponibles

| Bot             | Estado   | Descripción                                                                          |
| --------------- | -------- | ------------------------------------------------------------------------------------ |
| **5chan Feed**  | Activo   | Vigila todos los directorios de 5chan y reenvía las publicaciones nuevas a Telegram. |
| **Seedit Feed** | Previsto | Ofrecerá la misma funcionalidad para las comunidades de Seedit.                      |

## Puesta en marcha

### Requisitos previos

- Node.js
- Yarn
- Un token de bot de Telegram (crea uno con [BotFather](https://t.me/BotFather))

### Instalación

Clona el repositorio e instala las dependencias:

```bash
git clone https://github.com/bitsocialnet/bitsocial-telegram-bots.git
cd bitsocial-telegram-bots
yarn install
```

### Configuración

Crea un archivo `.env` en la raíz del proyecto con el token de tu bot:

```env
BOT_TOKEN=your_telegram_bot_token
```

### Ejecución

Arranca el bot una vez configurado el entorno:

```bash
yarn start
```

## Formato de las publicaciones

Cuando el bot reenvía una publicación a Telegram, incluye dos botones en línea:

- **Ver en 5chan** -- Abre la publicación en el cliente web de 5chan.
- **Ver en Seedit** -- Abre la publicación en el cliente web de Seedit.

Así, quienes están suscritos en Telegram pueden saltar directamente al hilo completo de la discusión en el cliente que prefieran.
