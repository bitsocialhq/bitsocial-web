---
title: בוטים של Telegram
description: בוטי הזנה שעוקבים אחר רשימות קהילה של Bitsocial ומעבירים פוסטים לערוצי Telegram.
sidebar_position: 4
---

# בוטים של Telegram

בוטי ה-Telegram של Bitsocial עוקבים אחר רשימות הקהילה של הלקוחות ברשת Bitsocial ומעבירים אוטומטית פוסטים חדשים לערוצי Telegram. כל הודעה שמועברת כוללת כפתורים מוטבעים שמקשרים בחזרה לפוסט המקורי ב-5chan וב-Seedit.

- **GitHub**: [bitsocialnet/bitsocial-telegram-bots](https://github.com/bitsocialnet/bitsocial-telegram-bots)

## בוטים זמינים

| בוט             | סטטוס  | תיאור                                                    |
| --------------- | ------ | -------------------------------------------------------- |
| **הזנת 5chan**  | פעיל   | עוקב אחר כל ספריות 5chan ומעביר פוסטים חדשים ל-Telegram. |
| **הזנת Seedit** | מתוכנן | יספק את אותה פונקציונליות עבור קהילות Seedit.            |

## הגדרה

### דרישות מוקדמות

- Node.js
- Yarn
- אסימון בוט של Telegram (ניתן ליצור אחד דרך [BotFather](https://t.me/BotFather))

### התקנה

שכפלו את המאגר והתקינו את התלויות:

```bash
git clone https://github.com/bitsocialnet/bitsocial-telegram-bots.git
cd bitsocial-telegram-bots
yarn install
```

### תצורה

צרו קובץ `.env` בשורש הפרויקט עם אסימון הבוט שלכם:

```env
BOT_TOKEN=your_telegram_bot_token
```

### הרצה

הפעילו את הבוט לאחר הגדרת הסביבה:

```bash
yarn start
```

## מבנה הפוסט

כשהבוט מעביר פוסט ל-Telegram, הוא מוסיף שני כפתורים מוטבעים:

- **צפייה ב-5chan** -- פותח את הפוסט בלקוח הווב של 5chan.
- **צפייה ב-Seedit** -- פותח את הפוסט בלקוח הווב של Seedit.

כך מנויי Telegram יכולים לקפוץ ישירות לשרשור הדיון המלא בלקוח שהם מעדיפים.
