---
title: Telegram बॉट्स
description: Bitsocial समुदाय याद्यांवर लक्ष ठेवून पोस्ट Telegram चॅनेलवर पाठवणारे फीड बॉट्स.
sidebar_position: 4
---

# Telegram बॉट्स

Bitsocial Telegram बॉट्स Bitsocial नेटवर्कवरील क्लायंट समुदाय याद्यांवर लक्ष ठेवतात आणि नव्या पोस्ट आपोआप Telegram चॅनेलवर पाठवतात. पाठवलेल्या प्रत्येक संदेशात इनलाइन बटणे असतात, जी 5chan आणि Seedit वरील मूळ पोस्टकडे परत नेतात.

- **GitHub**: [bitsocialnet/bitsocial-telegram-bots](https://github.com/bitsocialnet/bitsocial-telegram-bots)

## उपलब्ध बॉट्स

| बॉट             | स्थिती  | वर्णन                                                                   |
| --------------- | ------- | ----------------------------------------------------------------------- |
| **5chan Feed**  | सक्रिय  | सर्व 5chan निर्देशिकांवर लक्ष ठेवते आणि नव्या पोस्ट Telegram वर पाठवते. |
| **Seedit Feed** | नियोजित | Seedit समुदायांसाठी हीच कार्यक्षमता पुरवणार आहे.                        |

## सेटअप

### पूर्वअटी

- Node.js
- Yarn
- Telegram बॉट टोकन ([BotFather](https://t.me/BotFather) द्वारे तयार करा)

### स्थापना

रेपॉझिटरी क्लोन करा आणि डिपेंडन्सी स्थापित करा:

```bash
git clone https://github.com/bitsocialnet/bitsocial-telegram-bots.git
cd bitsocial-telegram-bots
yarn install
```

### कॉन्फिगरेशन

प्रकल्पाच्या मूळ निर्देशिकेत तुमच्या बॉट टोकनसह `.env` फाइल तयार करा:

```env
BOT_TOKEN=your_telegram_bot_token
```

### चालवणे

तुमचे एन्व्हायर्नमेंट कॉन्फिगर केल्यानंतर बॉट सुरू करा:

```bash
yarn start
```

## पोस्टचे स्वरूप

बॉट एखादी पोस्ट Telegram वर पाठवतो तेव्हा त्यात दोन इनलाइन बटणे असतात:

- **5chan वर पहा** -- पोस्ट 5chan वेब क्लायंटमध्ये उघडते.
- **Seedit वर पहा** -- पोस्ट Seedit वेब क्लायंटमध्ये उघडते.

यामुळे Telegram सदस्यांना त्यांना आवडत्या क्लायंटवर थेट संपूर्ण चर्चेच्या धाग्यावर जाता येते.
