# مهارت‌ها و ابزارها

هنگام راه‌اندازی یا تنظیم مهارت‌ها و ابزارهای بیرونی از این راهنما استفاده کنید.

## مهارت‌های پیشنهادی

### Context7 (مستندات کتابخانه‌ها)

برای دسترسی به مستندات به‌روز کتابخانه‌ها.

```bash
npx skills add https://github.com/intellectronica/agent-skills --skill context7
```

### Playwright CLI

برای خودکارسازی مرورگر (پیمایش، تعامل، اسکرین‌شات، آزمون و استخراج داده) از `playwright-cli` استفاده کنید.

وقتی برای بررسی رابط کاربری این مخزن از `playwright-cli` استفاده می‌کنید، بعد از یک موتور متوقف نشوید. جریان مربوطه را در هر سه موتور اصلی مرورگر اجرا کنید:

- `chrome` برای Blink
- `firefox` برای Gecko
- `webkit` برای پوشش Safari/WebKit

برای هر موتور نشست‌های نام‌دار جداگانه به کار ببرید تا شواهد جدا بمانند، اما آن نشست‌ها را پشت سر هم اجرا کنید. در هر لحظه فقط یک نشست مرورگر Playwright می‌تواند در کل ماشین فعال باشد، چون منبع مورد رقابت به جای خود مخزن، حافظه و پردازنده ماشین است. نشست‌ها را با `./scripts/pw-session.sh` باز و بسته کنید؛ این اسکریپت همان قفل مشترک را نگه می‌دارد تا ایجنت‌های همزمان کار مرورگری را به تعویق بیندازند و دوباره تلاش کنند، به جای اینکه ماشین را اشباع کنند. اگر عمداً از یک موتور صرف‌نظر کردید، دلیلش را ثبت کنید.

در حین تکرار و اصلاح، فقط از Chrome/Blink استفاده کنید. وقتی تغییر برای بررسی نهایی آماده شد، توالی کامل Chrome، Firefox و WebKit را اجرا کنید. نشست هر موتور را با تغییر اندازه پنجره برای دسکتاپ و موبایل دوباره به کار ببرید، آن را در یک پاکسازی از نوع finally ببندید، و تنها پس از آن موتور بعدی را باز کنید.

```bash
./scripts/pw-session.sh open verify-chrome https://bitsocial.localhost --browser=chrome
playwright-cli -s=verify-chrome snapshot
./scripts/pw-session.sh close verify-chrome
```

وقتی جایگاه اشغال باشد، `open` با کد ۷۵ خارج می‌شود؛ به جای تلاش دستی و مکرر، روی `./scripts/pw-session.sh open --wait[=SECONDS] ...` (پیش‌فرض ۳۰۰ ثانیه) منتظر بمانید. قفلی که یک جریان کاری نیمه‌کاره جا گذاشته باشد خودکار پس گرفته می‌شود، چون `open` هر جایگاهی را که مرورگر ثبت‌شده‌اش دیگر در حال اجرا نیست رها می‌کند. دارنده قفل را با `./scripts/pw-session.sh status` بررسی کنید؛ `release <session>` آخرین راه‌حل برای همان مورد نادری است که `status` نمی‌تواند وضعیت مرورگر را تأیید کند.

```bash
npm install -g @playwright/cli@latest
playwright-cli install --skills
```

محل نصب مهارت‌ها:

- `.cursor/skills/playwright-cli/`
- `.claude/skills/playwright-cli/`

### بهترین شیوه‌های React از Vercel

برای راهنمایی عمیق‌تر درباره کارایی React و Next.

```bash
npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-react-best-practices
```

### یافتن مهارت‌ها

کشف و نصب مهارت‌ها از اکوسیستم باز.

```bash
npx skills add https://github.com/vercel-labs/skills --skill find-skills
```

## منطق سیاست MCP

در این پروژه از سرورهای MCP گیت‌هاب و مرورگر پرهیز کنید، چون سربار چشمگیری به شمای ابزارها و کانتکست اضافه می‌کنند.

- عملیات GitHub: از CLI به نام `gh` استفاده کنید.
- عملیات مرورگر: از `playwright-cli` استفاده کنید.

## در دسترس بودن مدل‌ها

- `composer-2` فقط در Cursor در دسترس است. آن را زیر `.claude/` یا `.codex/` پیکربندی نکنید.
- Codex نام مستعار مدلی به نام `latest` را مستند نکرده است. فایل‌های TOML ایجنت‌های سفارشی که زیر `.codex/**/agents/*.toml` کامیت می‌شوند، هر دو کلید `model` و `model_reasoning_effort` را حذف می‌کنند تا تنظیمات نشست والد فعلی را به ارث ببرند.
