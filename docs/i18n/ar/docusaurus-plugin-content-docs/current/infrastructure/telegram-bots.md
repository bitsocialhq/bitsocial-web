---
title: بوتات Telegram
description: بوتات تغذية تراقب قوائم مجتمعات Bitsocial وتعيد توجيه المنشورات إلى قنوات Telegram.
sidebar_position: 4
---

# بوتات Telegram

تراقب بوتات Bitsocial على Telegram قوائم المجتمعات لدى العملاء على شبكة Bitsocial، وتعيد توجيه المنشورات الجديدة تلقائيًا إلى قنوات Telegram. وتتضمن كل رسالة مُعاد توجيهها أزرارًا مضمّنة تعيدك إلى المنشور الأصلي على 5chan وSeedit.

- **GitHub**: [bitsocialnet/bitsocial-telegram-bots](https://github.com/bitsocialnet/bitsocial-telegram-bots)

## البوتات المتاحة

| البوت           | الحالة  | الوصف                                                             |
| --------------- | ------- | ----------------------------------------------------------------- |
| **5chan Feed**  | نشط     | يراقب جميع أدلة 5chan ويعيد توجيه المنشورات الجديدة إلى Telegram. |
| **Seedit Feed** | مخطط له | سيوفّر الوظيفة نفسها لمجتمعات Seedit.                             |

## الإعداد

### المتطلبات المسبقة

- Node.js
- Yarn
- رمز بوت Telegram (أنشئ واحدًا عبر [BotFather](https://t.me/BotFather))

### التثبيت

استنسخ المستودع وثبّت الاعتماديات:

```bash
git clone https://github.com/bitsocialnet/bitsocial-telegram-bots.git
cd bitsocial-telegram-bots
yarn install
```

### الإعدادات

أنشئ ملف `.env` في جذر المشروع يحتوي على رمز البوت الخاص بك:

```env
BOT_TOKEN=your_telegram_bot_token
```

### التشغيل

شغّل البوت بعد ضبط بيئتك:

```bash
yarn start
```

## شكل المنشور

عندما يعيد البوت توجيه منشور إلى Telegram، فإنه يضيف زرّين مضمّنين:

- **عرض على 5chan** -- يفتح المنشور في عميل الويب الخاص بـ 5chan.
- **عرض على Seedit** -- يفتح المنشور في عميل الويب الخاص بـ Seedit.

يتيح ذلك لمشتركي Telegram الانتقال مباشرة إلى خيط النقاش الكامل على العميل الذي يفضّلونه.
