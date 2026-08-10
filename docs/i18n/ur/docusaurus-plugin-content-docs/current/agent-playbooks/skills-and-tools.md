# اسکلز اور ٹولز

اس پلے بک کو اُس وقت استعمال کریں جب اسکلز اور بیرونی ٹولنگ ترتیب دی یا ایڈجسٹ کی جا رہی ہو۔

## تجویز کردہ اسکلز

### Context7 (لائبریری دستاویزات)

لائبریریوں کی تازہ ترین دستاویزات کے لیے۔

```bash
npx skills add https://github.com/intellectronica/agent-skills --skill context7
```

### Playwright CLI

براؤزر آٹومیشن (نیویگیشن، تعامل، اسکرین شاٹس، ٹیسٹ، ڈیٹا نکالنا) کے لیے `playwright-cli` استعمال کریں۔

ریپو کی UI تصدیق کے لیے `playwright-cli` استعمال کرتے وقت ایک انجن پر رک نہ جائیں۔ متعلقہ فلو تینوں بڑے براؤزر انجنوں میں چلائیں:

- Blink کے لیے `chrome`
- Gecko کے لیے `firefox`
- Safari/WebKit کوریج کے لیے `webkit`

ہر انجن کے لیے الگ نام والے سیشن استعمال کریں تاکہ شواہد الگ الگ رہیں، مگر ان سیشنز کو یکے بعد دیگرے چلائیں۔ ایک وقت میں پوری مشین پر صرف ایک Playwright براؤزر سیشن فعال رہ سکتا ہے، کیونکہ متنازع وسیلہ ریپوزٹری نہیں بلکہ مشین کی RAM اور CPU ہے۔ سیشن `./scripts/pw-session.sh` کے ذریعے کھولیں اور بند کریں؛ یہی وہ مشترکہ لاک رکھتا ہے، جس کی وجہ سے ساتھ چلنے والے ایجنٹ مشین کو بھرنے کے بجائے براؤزر کا کام مؤخر کر کے دوبارہ کوشش کرتے ہیں۔ اگر کوئی انجن جان بوجھ کر چھوڑا جائے تو اس کی وجہ ریکارڈ کریں۔

دوران تکرار صرف Chrome/Blink استعمال کریں۔ جب تبدیلی حتمی تصدیق کے لیے تیار ہو جائے تو Chrome، Firefox اور WebKit کی مکمل ترتیب چلائیں۔ ہر انجن کے سیشن کا سائز بدل کر اسے ڈیسک ٹاپ اور موبائل دونوں کے لیے دوبارہ استعمال کریں، اسے آخر میں صفائی کے انداز میں بند کریں، اور تب ہی اگلا انجن کھولیں۔

```bash
./scripts/pw-session.sh open verify-chrome https://bitsocial.localhost --browser=chrome
playwright-cli -s=verify-chrome snapshot
./scripts/pw-session.sh close verify-chrome
```

جب سلاٹ مصروف ہو تو `open` 75 کے ساتھ ختم ہوتا ہے؛ ہاتھ سے دوبارہ کوشش کرنے کے بجائے `./scripts/pw-session.sh open --wait[=SECONDS] ...` (ڈیفالٹ 300 سیکنڈ) پر انتظار کریں۔ کسی ادھورے ورک فلو کا چھوڑا ہوا لاک خود بخود واپس لے لیا جاتا ہے، کیونکہ `open` ہر ایسا سلاٹ چھوڑ دیتا ہے جس کا ریکارڈ شدہ براؤزر اب نہیں چل رہا۔ سلاٹ رکھنے والے کا معائنہ `./scripts/pw-session.sh status` سے کریں؛ `release <session>` صرف اُس شاذ صورت کے لیے آخری چارہ ہے جب `status` براؤزر کی حالت کی تصدیق نہ کر سکے۔

```bash
npm install -g @playwright/cli@latest
playwright-cli install --skills
```

اسکل انسٹال ہونے کے مقامات:

- `.cursor/skills/playwright-cli/`
- `.claude/skills/playwright-cli/`

### Vercel React Best Practices

React/Next کی کارکردگی سے متعلق گہری رہنمائی کے لیے۔

```bash
npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-react-best-practices
```

### Find Skills

کھلے ماحول سے اسکلز دریافت اور انسٹال کریں۔

```bash
npx skills add https://github.com/vercel-labs/skills --skill find-skills
```

## MCP پالیسی کی وجہ

اس پروجیکٹ میں GitHub MCP اور براؤزر MCP سرورز سے گریز کریں، کیونکہ یہ ٹول اسکیما اور کانٹیکسٹ کا کافی بوجھ بڑھا دیتے ہیں۔

- GitHub کے کام: `gh` CLI استعمال کریں۔
- براؤزر کے کام: `playwright-cli` استعمال کریں۔

## ماڈل کی دستیابی

- `composer-2` صرف Cursor میں دستیاب ہے۔ اسے `.claude/` یا `.codex/` کے تحت ترتیب نہ دیں۔
- Codex کسی `latest` ماڈل عرف کی دستاویز نہیں دیتا۔ `.codex/**/agents/*.toml` کے تحت کمٹ کیے گئے کسٹم ایجنٹ TOML فائلوں میں `model` اور `model_reasoning_effort` دونوں چھوڑ دیے جاتے ہیں تاکہ وہ موجودہ پیرنٹ سیشن کی ترتیبات وراثت میں لیں۔
