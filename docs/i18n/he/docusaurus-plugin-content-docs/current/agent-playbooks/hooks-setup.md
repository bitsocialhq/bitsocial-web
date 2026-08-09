# הגדרת hooks לסוכנים

אם עוזר הקידוד שלך תומך ב-hooks של מחזור חיים, הגדר אותם עבור המאגר הזה.

## Hooks מומלצים

| Hook            | פקודה                                         | מטרה                                                                                                                                                                        |
| --------------- | --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `afterFileEdit` | `scripts/agent-hooks/format.sh`               | פורמוט אוטומטי של קבצים אחרי עריכות של הסוכן                                                                                                                                |
| `afterFileEdit` | `scripts/agent-hooks/yarn-install.sh`         | הרצת `corepack yarn install` כאשר `package.json` משתנה                                                                                                                      |
| `afterFileEdit` | `scripts/agent-hooks/react-pattern-review.sh` | כאשר דיף מוסיף פרימיטיבים של `useEffect`/memo ב-`about/src/`, מזכיר לסוכן לשקול מחדש בעזרת ה-skills לביקורת React                                                           |
| `stop`          | `scripts/agent-hooks/sync-git-branches.sh`    | גיזום רפרנסים מיושנים ומחיקת ענפי משימה זמניים שכבר שולבו                                                                                                                   |
| `stop`          | `scripts/agent-hooks/react-pattern-review.sh` | סריקה חוזרת של הדיף הנוכחי לאיתור אפקטים/memo חדשים של React ב-`about/src/` לפני שער האימות הסופי                                                                           |
| `stop`          | `scripts/agent-hooks/verify.sh`               | שער קשיח לאימות בנייה ממוקד, lint, בדיקת טיפוסים ובדיקות פורמוט; השאר את `yarn npm audit` כמידע בלבד והרץ את `yarn knip` בנפרד כביקורת מייעצת כאשר תלויות או ייבואים משתנים |

## למה

- פורמוט אחיד
- ה-lockfile נשאר מסונכרן
- תוספות חדשות של `useEffect`/memo באתר about מקבלות מבט שני מפורש לפני שהסוכן מסיים
- בעיות בנייה, lint וטיפוסים הרלוונטיות לסביבת העבודה נתפסות מוקדם, בלי לכפות את בניית התיעוד הרב-לוקאלית המלאה על כל משימה
- נראות אבטחתית באמצעות `yarn npm audit`
- אפשר לבדוק סחף בתלויות ובייבואים עם `yarn knip` בלי להפוך אותו ל-hook עצירה גלובלי ורועש
- מימוש hook משותף אחד עבור Codex וגם Cursor
- ענפי משימה זמניים נשארים מיושרים עם זרימת ה-worktree של המאגר

## דוגמאות לסקריפטים של hooks

### Hook לפורמוט

```bash
#!/bin/bash
# Auto-format JS/TS files after AI edits
# Hook receives JSON via stdin with file_path

input=$(cat)
file_path=$(echo "$input" | grep -o '"file_path"[[:space:]]*:[[:space:]]*"[^"]*"' | sed 's/.*:.*"\([^"]*\)"/\1/')

case "$file_path" in
  *.js|*.jsx|*.ts|*.tsx|*.mjs|*.cjs|*.json|*.css) corepack yarn exec oxfmt "$file_path" 2>/dev/null ;;
esac
exit 0
```

### Hook לאימות

```bash
#!/bin/bash
# Run targeted build verification, lint, typecheck, format check, and security audit when agent finishes

cat > /dev/null  # consume stdin
status=0
corepack yarn build:verify || status=1
corepack yarn lint || status=1
corepack yarn typecheck || status=1
corepack yarn format:check || status=1
echo "=== yarn npm audit ===" && (corepack yarn npm audit || true)  # informational
exit $status
```

כברירת מחדל, `scripts/agent-hooks/verify.sh` יוצא בקוד שונה מאפס כאשר בדיקה נדרשת נכשלת. הגדר `AGENT_VERIFY_MODE=advisory` רק כשאתה זקוק בכוונה לאות מתוך עץ שבור בלי לחסום את ה-hook. השאר את `yarn knip` מחוץ לשער הקשיח, אלא אם המאגר מחליט במפורש להיכשל על בעיות ייבוא ותלויות מייעצות.

hooks של מחזור חיים אינם מחליפים אימות ידני בדפדפן. עבור שינויים בממשק או שינויים חזותיים, הרץ עדיין בדיקות `playwright-cli` ב-`chrome`, ב-`firefox` וב-`webkit`, ובנוסף זרימה בתצוגת נייד בכל מנוע כאשר הרספונסיביות או התנהגות המגע השתנו.

### Hook להתקנת Yarn

```bash
#!/bin/bash
# Run corepack yarn install when package.json is changed
# Hook receives JSON via stdin with file_path

input=$(cat)
file_path=$(echo "$input" | grep -o '"file_path"[[:space:]]*:[[:space:]]*"[^"]*"' | sed 's/.*:.*"\([^"]*\)"/\1/')

if [ -z "$file_path" ]; then
  exit 0
fi

if [ "$file_path" = "package.json" ]; then
  cd "$(dirname "$0")/../.." || exit 0
  echo "package.json changed - running corepack yarn install to update yarn.lock..."
  corepack yarn install
fi

exit 0
```

הגדר את חיווט ה-hooks בהתאם לתיעוד של כלי הסוכן שלך (`hooks.json`, מקבילה וכו').

במאגר הזה, `.codex/hooks/*.sh` ו-`.cursor/hooks/*.sh` צריכים להישאר עטיפות דקות שמאצילות למימושים המשותפים תחת `scripts/agent-hooks/`.
