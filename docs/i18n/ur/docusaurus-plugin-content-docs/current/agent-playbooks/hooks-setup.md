# ایجنٹ ہکس کا سیٹ اپ

اگر آپ کا AI کوڈنگ اسسٹنٹ لائف سائیکل ہکس کی حمایت کرتا ہے، تو اس ریپو کے لیے یہ ہکس ترتیب دیں۔

## تجویز کردہ ہکس

| ہک              | کمانڈ                                         | مقصد                                                                                                                                                                                      |
| --------------- | --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `afterFileEdit` | `scripts/agent-hooks/format.sh`               | AI کی ترامیم کے بعد فائلوں کی خودکار فارمیٹنگ                                                                                                                                             |
| `afterFileEdit` | `scripts/agent-hooks/yarn-install.sh`         | `package.json` بدلنے پر `corepack yarn install` چلانا                                                                                                                                     |
| `afterFileEdit` | `scripts/agent-hooks/react-pattern-review.sh` | جب کوئی ڈِف `about/src/` میں `useEffect`/میمو پرِمیٹِوز شامل کرے، تو ایجنٹ کو React ریویو اسکلز کے ساتھ دوبارہ غور کرنے کی یاد دہانی کرانا                                                |
| `stop`          | `scripts/agent-hooks/sync-git-branches.sh`    | پرانے ریفس کاٹنا اور ضم ہو چکی عارضی ٹاسک برانچیں مٹانا                                                                                                                                   |
| `stop`          | `scripts/agent-hooks/react-pattern-review.sh` | حتمی تصدیقی گیٹ سے پہلے موجودہ ڈِف کو `about/src/` میں نئے React ایفیکٹس/میموز کے لیے دوبارہ اسکین کرنا                                                                                   |
| `stop`          | `scripts/agent-hooks/verify.sh`               | ہدف شدہ بلڈ تصدیق، لِنٹ، ٹائپ چیک اور فارمیٹ چیک کو سخت گیٹ بنانا؛ `yarn npm audit` کو محض معلوماتی رکھنا اور انحصارات/امپورٹس بدلنے پر `yarn knip` کو الگ سے مشاورتی آڈٹ کے طور پر چلانا |

## کیوں

- یکساں فارمیٹنگ
- لاک فائل ہم آہنگ رہتی ہے
- اباؤٹ سائٹ میں `useEffect`/میمو کے نئے اضافوں پر ایجنٹ کے فارغ ہونے سے پہلے صراحتاً دوسری نظر پڑ جاتی ہے
- ورک اسپیس سے متعلق بلڈ/لِنٹ/ٹائپ کے مسائل جلد پکڑے جاتے ہیں، بغیر اس کے کہ ہر کام پر پورا کثیر لسانی دستاویزاتی بلڈ چلانا پڑے
- `yarn npm audit` کے ذریعے سیکیورٹی کی نظر رہتی ہے
- انحصار/امپورٹ کے بہاؤ کو `yarn knip` سے جانچا جا سکتا ہے، بغیر اسے شور مچانے والا گلوبل اسٹاپ ہک بنائے
- Codex اور Cursor دونوں کے لیے ایک ہی مشترکہ ہک نفاذ
- عارضی ٹاسک برانچیں ریپو کے ورک ٹری ورک فلو کے ساتھ ہم آہنگ رہتی ہیں

## مثالی ہک اسکرپٹس

### فارمیٹ ہک

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

### ویریفائی ہک

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

بطور ڈیفالٹ، کوئی لازمی جانچ ناکام ہونے پر `scripts/agent-hooks/verify.sh` غیر صفر کے ساتھ ختم ہوتی ہے۔ `AGENT_VERIFY_MODE=advisory` صرف اُس وقت سیٹ کریں جب آپ جان بوجھ کر ٹوٹے ہوئے ٹری سے سگنل لینا چاہتے ہوں اور ہک کو روکنا نہ چاہتے ہوں۔ `yarn knip` کو سخت گیٹ سے باہر ہی رکھیں، الا یہ کہ ریپو صراحتاً یہ طے کر لے کہ مشاورتی امپورٹ/انحصار کے مسائل پر ناکام ہونا ہے۔

لائف سائیکل ہکس دستی براؤزر تصدیق کا متبادل نہیں۔ UI یا بصری تبدیلیوں کے لیے بدستور `chrome`، `firefox` اور `webkit` پر `playwright-cli` جانچ چلائیں، اور جب ریسپانسو رویہ یا ٹچ رویہ بدلا ہو تو ہر انجن میں موبائل ویو پورٹ کا فلو بھی چلائیں۔

### Yarn انسٹال ہک

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

ہک کی وائرنگ اپنے ایجنٹ ٹول کی دستاویزات کے مطابق ترتیب دیں (`hooks.json` یا اس کے مساوی وغیرہ)۔

اس ریپو میں `.codex/hooks/*.sh` اور `.cursor/hooks/*.sh` کو محض پتلے ریپرز رہنا چاہیے جو `scripts/agent-hooks/` کے تحت موجود مشترکہ نفاذ کو کام سونپ دیں۔
