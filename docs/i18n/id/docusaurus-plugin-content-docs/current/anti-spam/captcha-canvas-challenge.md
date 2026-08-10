---
title: Tantangan Captcha Canvas
description: Tantangan captcha berbasis gambar yang berdiri sendiri untuk komunitas Bitsocial.
sidebar_position: 2
---

# Tantangan Captcha Canvas

Tantangan Captcha Canvas adalah paket captcha gambar yang berdiri sendiri untuk komunitas Bitsocial. Paket ini menggambar teks acak ke atas sebuah canvas dan memungkinkan komunitas meminta penulis memecahkan gambar tersebut sebelum publikasinya diterima.

- **Kode sumber dan README terkini:** [github.com/bitsocialnet/captcha-canvas-challenge](https://github.com/bitsocialnet/captcha-canvas-challenge#readme)
- **Paket npm:** [`@bitsocial/captcha-canvas-challenge`](https://www.npmjs.com/package/@bitsocial/captcha-canvas-challenge)

## Instalasi

```bash
npm install @bitsocial/captcha-canvas-challenge
```

## Kapan Cocok Digunakan

Tantangan captcha berguna ketika sebuah komunitas menginginkan gerbang interaktif sederhana untuk menahan spam dengan risiko rendah. Paket ini sengaja dibuat sempit: paket ini menyediakan implementasi tantangannya, sedangkan komunitas atau node Bitsocial yang menentukan kapan dan bagaimana tantangan itu ditampilkan.

Untuk perlindungan yang lebih kuat, padukan dengan sistem moderasi atau penilaian risiko yang lebih luas, alih-alih memperlakukan captcha sebagai strategi anti-spam yang lengkap.

## Rujukan Paket Terkini

Halaman ini sengaja hanya berupa ikhtisar, bukan salinan panduan penyiapan. README paket adalah sumber kebenaran untuk nama tantangan terkini, contoh pendaftaran, contoh CLI, opsi yang didukung, persyaratan, dan catatan keamanan:

- [README Tantangan Captcha Canvas](https://github.com/bitsocialnet/captcha-canvas-challenge#readme)

Utamakan README upstream saat mengonfigurasi komunitas yang sudah berjalan, karena opsi paket dan alur instalasinya mengikuti versi paket tersebut, bukan versi situs web ini.
