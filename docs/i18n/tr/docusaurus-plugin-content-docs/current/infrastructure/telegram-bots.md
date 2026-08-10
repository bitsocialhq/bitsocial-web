---
title: Telegram Botları
description: Bitsocial topluluk listelerini izleyen ve gönderileri Telegram kanallarına ileten akış botları.
sidebar_position: 4
---

# Telegram Botları

Bitsocial Telegram botları, Bitsocial ağındaki istemci topluluk listelerini izler ve yeni gönderileri otomatik olarak Telegram kanallarına iletir. İletilen her mesajda, 5chan ve Seedit üzerindeki özgün gönderiye götüren satır içi düğmeler bulunur.

- **GitHub**: [bitsocialnet/bitsocial-telegram-bots](https://github.com/bitsocialnet/bitsocial-telegram-bots)

## Mevcut Botlar

| Bot             | Durum       | Açıklama                                                           |
| --------------- | ----------- | ------------------------------------------------------------------ |
| **5chan Feed**  | Etkin       | Tüm 5chan dizinlerini izler ve yeni gönderileri Telegram'a iletir. |
| **Seedit Feed** | Planlanıyor | Seedit toplulukları için aynı işlevi sağlayacak.                   |

## Kurulum

### Ön Koşullar

- Node.js
- Yarn
- Bir Telegram bot jetonu ([BotFather](https://t.me/BotFather) üzerinden oluşturabilirsiniz)

### Yükleme

Depoyu klonlayın ve bağımlılıkları kurun:

```bash
git clone https://github.com/bitsocialnet/bitsocial-telegram-bots.git
cd bitsocial-telegram-bots
yarn install
```

### Yapılandırma

Proje kök dizininde bot jetonunuzu içeren bir `.env` dosyası oluşturun:

```env
BOT_TOKEN=your_telegram_bot_token
```

### Çalıştırma

Ortamınızı yapılandırdıktan sonra botu başlatın:

```bash
yarn start
```

## Gönderi Biçimi

Bot bir gönderiyi Telegram'a ilettiğinde iki satır içi düğme ekler:

- **5chan'da görüntüle** — Gönderiyi 5chan web istemcisinde açar.
- **Seedit'te görüntüle** — Gönderiyi Seedit web istemcisinde açar.

Böylece Telegram aboneleri, tercih ettikleri istemci üzerinden doğrudan tartışmanın tamamına geçebilir.
