---
title: Tantangan Voucher
description: Tantangan anti-spam yang mengunci penerbitan konten di balik kode voucher unik yang dibagikan oleh pemilik komunitas.
sidebar_position: 3
---

# Tantangan Voucher

Tantangan Voucher mengunci penerbitan konten di balik kode voucher unik yang dibagikan oleh pemilik komunitas. Alih-alih mengandalkan penilaian otomatis, tantangan ini memindahkan kepercayaan ke alur undangan manual, yaitu ketika orang-orang yang sudah dikenal menerima kode melalui kanal yang dikendalikan pemilik komunitas.

- **Kode sumber dan README terkini:** [github.com/bitsocialnet/voucher-challenge](https://github.com/bitsocialnet/voucher-challenge#readme)
- **Paket npm:** [`@bitsocial/voucher-challenge`](https://www.npmjs.com/package/@bitsocial/voucher-challenge)

## Instalasi

```bash
npm install @bitsocial/voucher-challenge
```

## Cara Kerjanya

1. Pemilik komunitas membuat satu atau beberapa kode voucher unik.
2. Pemilik membagikan kode-kode tersebut kepada penulis tepercaya melalui kanal pilihannya (pesan langsung, email, tatap muka, dan sebagainya).
3. Ketika seorang penulis hendak menerbitkan konten, sistem tantangan meminta kode voucher kepadanya.
4. Kode itu divalidasi -- jika asli dan belum pernah dipakai, publikasinya diterima.

Setiap kode voucher terikat pada satu penulis tertentu begitu ditukarkan, sehingga tidak dapat dipakai ulang oleh orang lain.

## Rujukan Paket Terkini

Halaman ini sengaja hanya berupa ikhtisar, bukan salinan panduan penyiapan. README paket adalah sumber kebenaran untuk nama tantangan terkini, contoh Bitsocial CLI, pendaftaran pkc-js, opsi yang didukung, dan perilaku penukaran kode:

- [README Tantangan Voucher](https://github.com/bitsocialnet/voucher-challenge#readme)

Utamakan README upstream saat mengonfigurasi komunitas yang sudah berjalan, karena opsi voucher dan alur instalasinya mengikuti versi paket tersebut, bukan versi situs web ini.

## Kapan Menggunakannya

Tantangan Voucher paling cocok untuk:

- **Komunitas khusus undangan** yang keanggotaannya memang sengaja dibatasi.
- **Ruang terkurasi** yang setiap pesertanya diseleksi langsung oleh pemiliknya.
- **Lingkungan berkepercayaan tinggi** yang tidak memerlukan atau tidak menginginkan penilaian spam otomatis.

Karena menuntut distribusi kode secara manual, pendekatan ini tidak bisa diperbesar skalanya untuk komunitas terbuka yang besar. Untuk skenario semacam itu, pertimbangkan [Pemblokir Spam](./spam-blocker.md) atau [Tantangan Panggilan Kontrak EVM](./evm-contract-call.md).
