---
title: Tantangan Panggilan Kontrak EVM
description: Tantangan anti-spam yang memverifikasi kondisi on-chain dengan memanggil smart contract EVM.
sidebar_position: 4
---

# Tantangan Panggilan Kontrak EVM

Tantangan Panggilan Kontrak EVM memverifikasi status on-chain seorang penulis sebelum mengizinkan sebuah publikasi. Pemilik komunitas dapat mewajibkan dompet atau identitas yang berhasil diresolusi untuk memenuhi kondisi smart contract yang bersifat baca-saja, misalnya memegang saldo token minimum, sebelum bisa memposting.

- **Kode sumber dan README terkini:** [github.com/bitsocialnet/evm-contract-challenge](https://github.com/bitsocialnet/evm-contract-challenge#readme)
- **Paket npm:** [`@bitsocial/evm-contract-challenge`](https://www.npmjs.com/package/@bitsocial/evm-contract-challenge)

## Instalasi

```bash
npm install @bitsocial/evm-contract-challenge
```

## Kapan Cocok Digunakan

Gunakan tantangan ini untuk komunitas yang partisipasinya perlu bergantung pada sinyal EVM eksternal: kepemilikan token, kepemilikan NFT, skor proof-of-personhood, keanggotaan tata kelola, atau kondisi lain yang bisa dibaca dari sebuah kontrak.

Dari sudut pandang penulis, tantangan ini berjalan otomatis setelah dikonfigurasi. Tantangan ini memeriksa sumber dompet atau identitas yang memenuhi syarat, memanggil metode kontrak yang telah dikonfigurasi, lalu membandingkan nilai yang dikembalikan dengan kondisi yang ditetapkan komunitas.

## Rujukan Paket Terkini

Halaman ini sengaja hanya berupa ikhtisar, bukan salinan rujukan konfigurasi. README paket adalah sumber kebenaran untuk nama tantangan, contoh Bitsocial CLI, pendaftaran pkc-js, nilai bawaan opsi, contoh ABI, perilaku RPC, dan sumber dompet yang didukung:

- [README Tantangan Kontrak EVM](https://github.com/bitsocialnet/evm-contract-challenge#readme)

Utamakan README upstream saat mengonfigurasi komunitas yang sudah berjalan, karena opsi kontrak dan contoh-contohnya mengikuti versi paket tersebut, bukan versi situs web ini.

## Kapan Menggunakannya

Tantangan Panggilan Kontrak EVM sangat cocok untuk:

- **Komunitas berbasis kepemilikan token** yang membatasi hak memposting hanya bagi pemegang token.
- **Akses berbasis NFT** yang mensyaratkan kepemilikan NFT tertentu.
- **Ruang tata kelola DAO** yang partisipasinya terbatas bagi pemegang token tata kelola.

Untuk komunitas yang tidak bergantung pada identitas on-chain, pertimbangkan [Pemblokir Spam](./spam-blocker.md) atau [Tantangan Voucher](./voucher-challenge.md).
