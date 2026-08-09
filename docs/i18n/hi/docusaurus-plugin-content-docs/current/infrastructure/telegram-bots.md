---
title: Telegram बॉट
description: फ़ीड बॉट जो Bitsocial समुदाय सूचियों पर नज़र रखते हैं और पोस्ट को Telegram चैनलों में अग्रेषित करते हैं।
sidebar_position: 4
---

# Telegram बॉट

Bitsocial के Telegram बॉट, Bitsocial नेटवर्क पर क्लाइंट की समुदाय सूचियों पर नज़र रखते हैं और नई पोस्ट अपने आप Telegram चैनलों में अग्रेषित कर देते हैं। हर अग्रेषित संदेश में इनलाइन बटन होते हैं, जो 5chan और Seedit पर मौजूद मूल पोस्ट पर वापस ले जाते हैं।

- **GitHub**: [bitsocialnet/bitsocial-telegram-bots](https://github.com/bitsocialnet/bitsocial-telegram-bots)

## उपलब्ध बॉट

| बॉट             | स्थिति  | विवरण                                                                          |
| --------------- | ------- | ------------------------------------------------------------------------------ |
| **5chan Feed**  | सक्रिय  | सभी 5chan डायरेक्टरी पर नज़र रखता है और नई पोस्ट Telegram पर अग्रेषित करता है। |
| **Seedit Feed** | नियोजित | Seedit समुदायों के लिए यही सुविधा उपलब्ध कराएगा।                               |

## सेटअप

### पूर्वापेक्षाएँ

- Node.js
- Yarn
- एक Telegram बॉट टोकन ([BotFather](https://t.me/BotFather) के ज़रिए बनाएँ)

### इंस्टॉलेशन

रिपॉज़िटरी क्लोन करें और डिपेंडेंसी इंस्टॉल करें:

```bash
git clone https://github.com/bitsocialnet/bitsocial-telegram-bots.git
cd bitsocial-telegram-bots
yarn install
```

### कॉन्फ़िगरेशन

प्रोजेक्ट रूट में अपने बॉट टोकन के साथ एक `.env` फ़ाइल बनाएँ:

```env
BOT_TOKEN=your_telegram_bot_token
```

### चलाना

एनवायरनमेंट कॉन्फ़िगर करने के बाद बॉट शुरू करें:

```bash
yarn start
```

## पोस्ट का प्रारूप

जब बॉट कोई पोस्ट Telegram पर अग्रेषित करता है, तो उसमें दो इनलाइन बटन होते हैं:

- **5chan पर देखें** -- पोस्ट को 5chan वेब क्लाइंट में खोलता है।
- **Seedit पर देखें** -- पोस्ट को Seedit वेब क्लाइंट में खोलता है।

इससे Telegram सब्सक्राइबर सीधे उसी क्लाइंट पर पूरे चर्चा थ्रेड तक पहुँच जाते हैं जो उन्हें पसंद हो।
