---
title: CLI Bitsocial
description: Antarmuka baris perintah untuk menjalankan node Bitsocial, membuat komunitas, dan mengelola operasi protokol.
sidebar_position: 2
---

# CLI Bitsocial

`bitsocial-cli` adalah perkakas baris perintah untuk berinteraksi dengan backend protokol Bitsocial. Dengannya Anda bisa menjalankan daemon P2P lokal, membuat dan mengonfigurasi komunitas, serta menerbitkan konten -- semuanya dari terminal.

Perkakas ini dibangun di atas lapisan klien protokol Bitsocial bersama, dan dipakai oleh [5chan](/apps/5chan/) dan [Seedit](/apps/seedit/) untuk pembuatan komunitas dan pengelolaan node.

## Instalasi

Biner siap pakai tersedia untuk Windows, macOS, dan Linux. Unduh rilis terbaru untuk platform Anda dari GitHub:

**[Unduh dari GitHub Releases](https://github.com/bitsocialnet/bitsocial-cli/releases)**

Setelah diunduh, jadikan binernya dapat dieksekusi (macOS/Linux):

```bash
chmod +x bitsocial
```

## Menjalankan Daemon

Penggunaan CLI yang paling umum adalah menjalankan sebuah node Bitsocial. Daemon menyalakan lapisan jaringan P2P dan menyediakan API lokal yang bisa dihubungi oleh klien.

```bash
bitsocial daemon
```

Pada peluncuran pertama, daemon menampilkan tautan ke **WebUI**, yaitu antarmuka grafis berbasis browser untuk mengelola node, komunitas, dan pengaturan Anda. Ini berguna jika Anda lebih menyukai GUI ketimbang perintah terminal.

## Tindakan Utama

| Tindakan                | Deskripsi                                                   |
| ----------------------- | ----------------------------------------------------------- |
| Menjalankan daemon      | Menyalakan node P2P Bitsocial                               |
| Membuat komunitas       | Membuat komunitas baru                                      |
| Menyunting komunitas    | Memperbarui pengaturan komunitas (judul, deskripsi, aturan) |
| Melihat komunitas lokal | Menampilkan komunitas yang dihosting di node ini            |
| Memulai komunitas       | Mulai menyajikan sebuah komunitas tertentu                  |
| Menghentikan komunitas  | Berhenti menyajikan sebuah komunitas tertentu               |

Jalankan CLI dengan `--help` untuk melihat nama perintah dan flag terkini yang disediakan oleh rilis yang Anda pasang:

```bash
bitsocial --help
bitsocial daemon --help
```

## Alur Kerja Umum

Alur penyiapan yang lazim untuk menghosting komunitas baru:

```bash
# 1. Start the daemon
bitsocial daemon

# 2. In another terminal, inspect the available community-management commands
bitsocial --help
```

Dari titik itu, gunakan perintah pengelolaan komunitas dari rilis yang terpasang untuk membuat, mengonfigurasi, dan mulai menyajikan sebuah komunitas. Setelah dijalankan, komunitas tersebut aktif di jaringan Bitsocial dan bisa diakses dari klien yang kompatibel.

## Tautan

- **GitHub:** [bitsocialnet/bitsocial-cli](https://github.com/bitsocialnet/bitsocial-cli)
