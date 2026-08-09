# Skills וכלים

השתמש במדריך הזה בעת הגדרה או התאמה של skills וכלים חיצוניים.

## Skills מומלצים

### Context7 (תיעוד ספריות)

לקבלת תיעוד מעודכן של ספריות.

```bash
npx skills add https://github.com/intellectronica/agent-skills --skill context7
```

### Playwright CLI

השתמש ב-`playwright-cli` לאוטומציה של דפדפן (ניווט, אינטראקציה, צילומי מסך, בדיקות וחילוץ מידע).

כשאתה משתמש ב-`playwright-cli` לאימות ממשק במאגר, אל תעצור אחרי מנוע אחד. הרץ את הזרימה הרלוונטית בשלושת מנועי הדפדפן העיקריים:

- `chrome` עבור Blink
- `firefox` עבור Gecko
- `webkit` לכיסוי Safari/WebKit

השתמש בסשנים נפרדים ובעלי שם לכל מנוע כדי שהראיות יישארו מופרדות, אבל הרץ את הסשנים האלה בזה אחר זה. רק סשן דפדפן אחד של Playwright יכול להיות פעיל בכל רגע נתון בכל המחשב, מכיוון שהמשאב שיש עליו תחרות הוא זיכרון ומעבד של המחשב ולא המאגר עצמו. פתח וסגור סשנים דרך `./scripts/pw-session.sh`; הוא מחזיק את הנעילה המשותפת הזו כדי שסוכנים מקבילים ידחו וינסו שוב עבודת דפדפן במקום להחניק את המחשב. אם מנוע כלשהו מדולג בכוונה, תעד את הסיבה.

במהלך העבודה השוטפת, השתמש ב-Chrome/Blink בלבד. הרץ את הרצף המלא של Chrome, Firefox ו-WebKit פעם אחת כשהשינוי מוכן לאימות סופי. מחזר את הסשן של כל מנוע לדסקטופ ולנייד באמצעות שינוי גודל החלון, סגור אותו בניקוי בסגנון finally, ורק אז פתח את המנוע הבא.

```bash
./scripts/pw-session.sh open verify-chrome https://bitsocial.localhost --browser=chrome
playwright-cli -s=verify-chrome snapshot
./scripts/pw-session.sh close verify-chrome
```

כשהמשבצת תפוסה, `open` יוצא בקוד 75; חסום באמצעות `./scripts/pw-session.sh open --wait[=SECONDS] ...` (ברירת מחדל 300 שניות) במקום לנסות שוב ידנית. נעילה שנשארה מאחור אחרי זרימת עבודה שנקטעה נתפסת מחדש אוטומטית, מכיוון ש-`open` משחרר כל משבצת שהדפדפן הרשום שלה כבר אינו פועל. בדוק מי מחזיק בה עם `./scripts/pw-session.sh status`; הפקודה `release <session>` היא מוצא אחרון למקרה הנדיר שבו `status` אינו מצליח לאמת את מצב הדפדפן.

```bash
npm install -g @playwright/cli@latest
playwright-cli install --skills
```

מיקומי ההתקנה של ה-skill:

- `.cursor/skills/playwright-cli/`
- `.claude/skills/playwright-cli/`

### Vercel React Best Practices

להנחיות מעמיקות יותר לביצועים ב-React/Next.

```bash
npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-react-best-practices
```

### Find Skills

גילוי והתקנה של skills מהאקוסיסטם הפתוח.

```bash
npx skills add https://github.com/vercel-labs/skills --skill find-skills
```

## הנימוק למדיניות MCP

הימנע מ-GitHub MCP ומשרתי MCP של דפדפן בפרויקט הזה, מכיוון שהם מוסיפים תקורה משמעותית של סכימות כלים ושל הקשר.

- פעולות GitHub: השתמש ב-CLI של `gh`.
- פעולות דפדפן: השתמש ב-`playwright-cli`.

## זמינות מודלים

- `composer-2` זמין ב-Cursor בלבד. אל תגדיר אותו תחת `.claude/` או `.codex/`.
- Codex אינו מתעד כינוי מודל בשם `latest`. קובצי TOML של סוכנים מותאמים אישית שנשמרים תחת `.codex/**/agents/*.toml` משמיטים גם את `model` וגם את `model_reasoning_effort`, כך שהם יורשים את הגדרות סשן ההורה הנוכחיות.
