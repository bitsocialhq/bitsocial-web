---
title: Bot Telegram
description: Bot feed yang memantau daftar komunitas Bitsocial dan meneruskan postingan ke kanal Telegram.
sidebar_position: 4
---

# Bot Telegram

Bot Telegram Bitsocial memantau daftar komunitas milik klien di jaringan Bitsocial dan otomatis meneruskan postingan baru ke kanal Telegram. Setiap pesan yang diteruskan menyertakan tombol inline yang mengarah kembali ke postingan aslinya di 5chan dan Seedit.

- **GitHub**: [bitsocialnet/bitsocial-telegram-bots](https://github.com/bitsocialnet/bitsocial-telegram-bots)

## Bot yang Tersedia

| Bot             | Status       | Deskripsi                                                                 |
| --------------- | ------------ | ------------------------------------------------------------------------- |
| **5chan Feed**  | Aktif        | Memantau semua direktori 5chan dan meneruskan postingan baru ke Telegram. |
| **Seedit Feed** | Direncanakan | Akan menyediakan fungsi yang sama untuk komunitas Seedit.                 |

## Penyiapan

### Prasyarat

- Node.js
- Yarn
- Token bot Telegram (buat satu lewat [BotFather](https://t.me/BotFather))

### Instalasi

Kloning repositorinya lalu pasang dependensinya:

```bash
git clone https://github.com/bitsocialnet/bitsocial-telegram-bots.git
cd bitsocial-telegram-bots
yarn install
```

### Konfigurasi

Buat berkas `.env` di akar proyek berisi token bot Anda:

```env
BOT_TOKEN=your_telegram_bot_token
```

### Menjalankan

Jalankan bot setelah lingkungan Anda dikonfigurasi:

```bash
yarn start
```

## Format Postingan

Ketika bot meneruskan sebuah postingan ke Telegram, ada dua tombol inline yang disertakan:

- **Lihat di 5chan** -- Membuka postingan tersebut di klien web 5chan.
- **Lihat di Seedit** -- Membuka postingan tersebut di klien web Seedit.

Dengan begitu, pelanggan Telegram bisa langsung melompat ke utas diskusi lengkap pada klien mana pun yang mereka sukai.
