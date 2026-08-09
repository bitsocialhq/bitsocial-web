---
title: Telegram বট
description: ফিড বট, যেগুলো Bitsocial সম্প্রদায়ের তালিকা পর্যবেক্ষণ করে এবং পোস্ট Telegram চ্যানেলে ফরওয়ার্ড করে।
sidebar_position: 4
---

# Telegram বট

Bitsocial Telegram বটগুলো Bitsocial নেটওয়ার্কে ক্লায়েন্টের সম্প্রদায় তালিকা পর্যবেক্ষণ করে এবং নতুন পোস্ট স্বয়ংক্রিয়ভাবে Telegram চ্যানেলে ফরওয়ার্ড করে। ফরওয়ার্ড করা প্রতিটি বার্তায় ইনলাইন বোতাম থাকে, যেগুলো 5chan ও Seedit-এ মূল পোস্টে ফিরিয়ে নিয়ে যায়।

- **GitHub**: [bitsocialnet/bitsocial-telegram-bots](https://github.com/bitsocialnet/bitsocial-telegram-bots)

## উপলব্ধ বট

| বট              | অবস্থা    | বর্ণনা                                                                     |
| --------------- | --------- | -------------------------------------------------------------------------- |
| **5chan Feed**  | সক্রিয়   | সব 5chan ডিরেক্টরি পর্যবেক্ষণ করে এবং নতুন পোস্ট Telegram-এ ফরওয়ার্ড করে। |
| **Seedit Feed** | পরিকল্পিত | Seedit সম্প্রদায়ের জন্য একই কার্যকারিতা দেবে।                             |

## সেটআপ

### পূর্বশর্ত

- Node.js
- Yarn
- একটি Telegram বট টোকেন ([BotFather](https://t.me/BotFather)-এর মাধ্যমে তৈরি করুন)

### ইনস্টলেশন

রিপোজিটরি ক্লোন করুন এবং ডিপেনডেন্সি ইনস্টল করুন:

```bash
git clone https://github.com/bitsocialnet/bitsocial-telegram-bots.git
cd bitsocial-telegram-bots
yarn install
```

### কনফিগারেশন

প্রকল্পের রুটে আপনার বট টোকেন দিয়ে একটি `.env` ফাইল তৈরি করুন:

```env
BOT_TOKEN=your_telegram_bot_token
```

### চালানো

এনভায়রনমেন্ট কনফিগার করার পরে বটটি চালু করুন:

```bash
yarn start
```

## পোস্টের ফরম্যাট

বট যখন Telegram-এ কোনো পোস্ট ফরওয়ার্ড করে, তখন তাতে দুটি ইনলাইন বোতাম থাকে:

- **5chan-এ দেখুন** -- 5chan ওয়েব ক্লায়েন্টে পোস্টটি খোলে।
- **Seedit-এ দেখুন** -- Seedit ওয়েব ক্লায়েন্টে পোস্টটি খোলে।

এর ফলে Telegram গ্রাহকরা তাঁদের পছন্দের যেকোনো ক্লায়েন্টে সরাসরি পুরো আলোচনার থ্রেডে চলে যেতে পারেন।
