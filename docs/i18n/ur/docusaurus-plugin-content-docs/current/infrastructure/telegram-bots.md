---
title: Telegram بوٹس
description: فیڈ بوٹس جو Bitsocial کمیونٹی فہرستوں کی نگرانی کرتے ہیں اور پوسٹس کو Telegram چینلز میں آگے بھیجتے ہیں۔
sidebar_position: 4
---

# Telegram بوٹس

Bitsocial کے Telegram بوٹس، Bitsocial نیٹ ورک پر کلائنٹ کمیونٹی فہرستوں کی نگرانی کرتے ہیں اور نئی پوسٹس خودکار طور پر Telegram چینلز میں آگے بھیج دیتے ہیں۔ ہر آگے بھیجے گئے پیغام میں اِن لائن بٹن شامل ہوتے ہیں جو 5chan اور Seedit پر اصل پوسٹ کی طرف واپس لے جاتے ہیں۔

- **GitHub**: [bitsocialnet/bitsocial-telegram-bots](https://github.com/bitsocialnet/bitsocial-telegram-bots)

## دستیاب بوٹس

| بوٹ             | حیثیت      | تفصیل                                                                     |
| --------------- | ---------- | ------------------------------------------------------------------------- |
| **5chan Feed**  | فعال       | تمام 5chan ڈائریکٹریز کی نگرانی کرتا اور نئی پوسٹس Telegram پر بھیجتا ہے۔ |
| **Seedit Feed** | منصوبے میں | Seedit کمیونٹیز کے لیے یہی سہولت فراہم کرے گا۔                            |

## سیٹ اپ

### پیشگی تقاضے

- Node.js
- Yarn
- ایک Telegram بوٹ ٹوکن ([BotFather](https://t.me/BotFather) کے ذریعے بنائیں)

### تنصیب

ریپازٹری کلون کریں اور انحصارات انسٹال کریں:

```bash
git clone https://github.com/bitsocialnet/bitsocial-telegram-bots.git
cd bitsocial-telegram-bots
yarn install
```

### کنفیگریشن

پروجیکٹ کی جڑ میں اپنے بوٹ ٹوکن کے ساتھ ایک `.env` فائل بنائیں:

```env
BOT_TOKEN=your_telegram_bot_token
```

### چلانا

اپنا ماحول ترتیب دینے کے بعد بوٹ شروع کریں:

```bash
yarn start
```

## پوسٹ کی ساخت

جب بوٹ کوئی پوسٹ Telegram پر بھیجتا ہے، تو اس میں دو اِن لائن بٹن شامل ہوتے ہیں:

- **5chan پر دیکھیں** -- پوسٹ کو 5chan ویب کلائنٹ میں کھولتا ہے۔
- **Seedit پر دیکھیں** -- پوسٹ کو Seedit ویب کلائنٹ میں کھولتا ہے۔

اس سے Telegram کے سبسکرائبرز اپنی پسند کے کلائنٹ پر براہِ راست مکمل گفتگو کے دھاگے تک پہنچ سکتے ہیں۔
