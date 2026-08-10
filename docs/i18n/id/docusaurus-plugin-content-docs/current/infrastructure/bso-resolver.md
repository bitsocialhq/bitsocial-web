---
title: BSO Resolver
description: Mengubah nama domain .bso menjadi kunci publik melalui catatan TXT Bitsocial.
sidebar_position: 1
---

# BSO Resolver

BSO Resolver menerjemahkan nama domain `.bso` menjadi kunci publik yang bersesuaian dengan membaca catatan TXT Bitsocial. Inilah paket resolver yang dipakai perkakas Bitsocial ketika sebuah nama `.bso` yang ditampilkan ke pengguna perlu diubah menjadi materi kunci yang dipahami oleh tumpukan peer-to-peer.

- **Kode sumber dan README terkini:** [github.com/bitsocialnet/bso-resolver](https://github.com/bitsocialnet/bso-resolver#readme)
- **Paket npm:** [`@bitsocial/bso-resolver`](https://www.npmjs.com/package/@bitsocial/bso-resolver)

## Instalasi

```bash
npm install @bitsocial/bso-resolver
```

## Posisinya dalam Sistem

Nama Bitsocial dimaksudkan sebagai titik masuk yang mudah dibaca manusia untuk komunitas dan penulis. Resolver menjaga lapisan penamaan itu tetap terpisah dari kode aplikasi, sehingga klien dapat menanyakan apakah sebuah nama didukung, lalu menyelesaikannya lewat titik masuk paket yang sesuai dengan runtime-nya.

Gunakan resolver ini ketika Anda mengintegrasikan klien, perkakas baris perintah, atau layanan berbasis Bitsocial yang perlu menerima nama `.bso`, bukan hanya kunci publik mentah.

## Rujukan Paket Terkini

Halaman ini sengaja dibuat sebagai gambaran umum, bukan salinan rujukan API. README paket adalah sumber kebenaran untuk opsi konstruktor, tipe kembalian, perilaku caching, titik masuk, contoh provider, dan semantik shutdown yang didukung:

- [README BSO Resolver](https://github.com/bitsocialnet/bso-resolver#readme)

Utamakan README upstream ketika menyalin kode ke dalam proyek, karena perilaku resolver mengikuti versi paket tersebut, bukan versi situs web ini.
