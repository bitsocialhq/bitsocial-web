# راه‌اندازی هوک‌های ایجنت

اگر دستیار کدنویسی هوش مصنوعی شما از هوک‌های چرخه عمر پشتیبانی می‌کند، این موارد را برای این مخزن پیکربندی کنید.

## هوک‌های پیشنهادی

| هوک             | فرمان                                         | هدف                                                                                                                                                                                                     |
| --------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `afterFileEdit` | `scripts/agent-hooks/format.sh`               | قالب‌بندی خودکار فایل‌ها پس از ویرایش‌های هوش مصنوعی                                                                                                                                                    |
| `afterFileEdit` | `scripts/agent-hooks/yarn-install.sh`         | اجرای `corepack yarn install` هنگام تغییر `package.json`                                                                                                                                                |
| `afterFileEdit` | `scripts/agent-hooks/react-pattern-review.sh` | وقتی یک دیف در `about/src/` مورد تازه‌ای از `useEffect` یا اولیه‌های memo اضافه می‌کند، به ایجنت یادآوری می‌کند با مهارت‌های بازبینی React دوباره درباره‌اش فکر کند                                     |
| `stop`          | `scripts/agent-hooks/sync-git-branches.sh`    | هرس ارجاع‌های کهنه و حذف شاخه‌های موقت وظیفه که یکپارچه شده‌اند                                                                                                                                         |
| `stop`          | `scripts/agent-hooks/react-pattern-review.sh` | پیش از دروازه نهایی بررسی، دیف جاری را دوباره برای افکت‌ها و memoهای تازه React در `about/src/` اسکن می‌کند                                                                                             |
| `stop`          | `scripts/agent-hooks/verify.sh`               | دروازه سخت برای بررسی هدفمند ساخت، لینت، بررسی نوع و قالب‌بندی؛ `yarn npm audit` را اطلاع‌رسانی نگه دارید و `yarn knip` را هنگام تغییر وابستگی‌ها یا ایمپورت‌ها جداگانه به عنوان ممیزی مشورتی اجرا کنید |

## چرا

- قالب‌بندی یکدست
- فایل قفل همگام می‌ماند
- افزوده‌های تازه `useEffect` یا memo در سایت about پیش از پایان کار ایجنت، یک بازبینی صریح دوم می‌گیرند
- مشکلات ساخت، لینت و نوع مربوط به همان فضای کاری زود پیدا می‌شوند، بدون آنکه ساخت کامل چندزبانه مستندات به هر وظیفه‌ای تحمیل شود
- دید امنیتی از طریق `yarn npm audit`
- انحراف وابستگی‌ها و ایمپورت‌ها را می‌توان با `yarn knip` بررسی کرد، بی‌آنکه به یک هوک توقف سراسری و پرسروصدا تبدیل شود
- یک پیاده‌سازی مشترک هوک برای Codex و Cursor
- شاخه‌های موقت وظیفه با گردش کار worktree مخزن هماهنگ می‌مانند

## نمونه اسکریپت‌های هوک

### هوک قالب‌بندی

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

### هوک بررسی

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

به‌طور پیش‌فرض، `scripts/agent-hooks/verify.sh` وقتی یکی از بررسی‌های لازم شکست بخورد با کد غیرصفر خارج می‌شود. `AGENT_VERIFY_MODE=advisory` را تنها زمانی تنظیم کنید که عمداً می‌خواهید از یک درخت خراب سیگنال بگیرید بدون آنکه هوک را مسدود کنید. `yarn knip` را بیرون از دروازه سخت نگه دارید، مگر آنکه مخزن صراحتاً تصمیم بگیرد روی مسائل مشورتی ایمپورت و وابستگی شکست بخورد.

هوک‌های چرخه عمر جایگزین بررسی دستی در مرورگر نیستند. برای تغییرات رابط کاربری یا ظاهری، همچنان بررسی‌های `playwright-cli` را در `chrome`، `firefox` و `webkit` اجرا کنید، و اگر واکنش‌گرایی یا رفتار لمسی تغییر کرده است، در هر موتور یک جریان با نمای موبایل هم اجرا کنید.

### هوک نصب Yarn

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

سیم‌کشی هوک‌ها را مطابق مستندات ابزار ایجنت خودتان پیکربندی کنید (`hooks.json` یا معادل آن).

در این مخزن، `.codex/hooks/*.sh` و `.cursor/hooks/*.sh` باید پوشش‌های نازکی باقی بمانند که کار را به پیاده‌سازی‌های مشترک زیر `scripts/agent-hooks/` واگذار می‌کنند.
