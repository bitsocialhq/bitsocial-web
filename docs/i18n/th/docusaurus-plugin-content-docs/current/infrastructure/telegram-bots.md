---
title: บอท Telegram
description: บอทฟีดที่คอยเฝ้าดูรายชื่อชุมชน Bitsocial และส่งต่อโพสต์ไปยังช่อง Telegram
sidebar_position: 4
---

# บอท Telegram

บอท Telegram ของ Bitsocial คอยเฝ้าดูรายชื่อชุมชนของไคลเอ็นต์บนเครือข่าย Bitsocial และส่งต่อโพสต์ใหม่เข้าไปยังช่อง Telegram โดยอัตโนมัติ ข้อความที่ส่งต่อแต่ละรายการจะมีปุ่มอินไลน์ที่ลิงก์กลับไปยังโพสต์ต้นทางบน 5chan และ Seedit

- **GitHub**: [bitsocialnet/bitsocial-telegram-bots](https://github.com/bitsocialnet/bitsocial-telegram-bots)

## บอทที่มีให้ใช้งาน

| บอท             | สถานะ      | รายละเอียด                                                       |
| --------------- | ---------- | ---------------------------------------------------------------- |
| **5chan Feed**  | ใช้งานอยู่ | เฝ้าดูไดเรกทอรีทั้งหมดของ 5chan และส่งต่อโพสต์ใหม่ไปยัง Telegram |
| **Seedit Feed** | อยู่ในแผน  | จะให้ความสามารถแบบเดียวกันนี้กับชุมชนบน Seedit                   |

## การติดตั้งและตั้งค่า

### สิ่งที่ต้องมีก่อน

- Node.js
- Yarn
- โทเค็นบอท Telegram (สร้างได้ผ่าน [BotFather](https://t.me/BotFather))

### การติดตั้ง

โคลนที่เก็บโค้ดแล้วติดตั้ง dependency:

```bash
git clone https://github.com/bitsocialnet/bitsocial-telegram-bots.git
cd bitsocial-telegram-bots
yarn install
```

### การตั้งค่า

สร้างไฟล์ `.env` ที่รากของโปรเจกต์ พร้อมใส่โทเค็นบอทของคุณ:

```env
BOT_TOKEN=your_telegram_bot_token
```

### การรัน

เริ่มบอทหลังจากตั้งค่าสภาพแวดล้อมเรียบร้อยแล้ว:

```bash
yarn start
```

## รูปแบบของโพสต์

เมื่อบอทส่งต่อโพสต์ไปยัง Telegram มันจะแนบปุ่มอินไลน์มาสองปุ่ม:

- **ดูบน 5chan** -- เปิดโพสต์ในเว็บไคลเอ็นต์ของ 5chan
- **ดูบน Seedit** -- เปิดโพสต์ในเว็บไคลเอ็นต์ของ Seedit

ทำให้ผู้ติดตามบน Telegram กระโดดตรงไปยังเธรดสนทนาฉบับเต็มบนไคลเอ็นต์ที่ตนถนัดได้ทันที
