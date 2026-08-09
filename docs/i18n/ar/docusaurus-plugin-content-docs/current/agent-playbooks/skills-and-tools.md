# المهارات والأدوات

استخدم دليل العمل هذا عند إعداد المهارات والأدوات الخارجية أو تعديلها.

## المهارات الموصى بها

### Context7 (توثيق المكتبات)

للحصول على توثيق محدَّث للمكتبات.

```bash
npx skills add https://github.com/intellectronica/agent-skills --skill context7
```

### Playwright CLI

استخدم `playwright-cli` لأتمتة المتصفح (التنقل والتفاعل ولقطات الشاشة والاختبارات واستخراج البيانات).

عند استخدام `playwright-cli` للتحقق من واجهة المستودع، لا تكتفِ بمحرك واحد. شغّل المسار المعني في محركات المتصفحات الرئيسية الثلاثة جميعها:

- `chrome` لتغطية Blink
- `firefox` لتغطية Gecko
- `webkit` لتغطية Safari/WebKit

استخدم جلسات مسمّاة منفصلة لكل محرك حتى تبقى الأدلة معزولة، لكن شغّل تلك الجلسات بالتتابع. فلا يجوز أن تكون أكثر من جلسة متصفح Playwright واحدة نشطة في وقت واحد على مستوى الجهاز كله، لأن المورد المتنازع عليه هو ذاكرة الجهاز ومعالجه لا المستودع. افتح الجلسات وأغلقها عبر `./scripts/pw-session.sh`؛ فهو يحتفظ بذلك القفل المشترك بحيث يؤجل الوكلاء المتزامنون أعمال المتصفح ويعيدون محاولتها بدلًا من إشباع الجهاز. وإذا جرى تخطي أحد المحركات عمدًا، فسجّل السبب.

أثناء العمل التكراري، استخدم Chrome/Blink وحده. وشغّل تسلسل Chrome وFirefox وWebKit كاملًا عندما يصبح التغيير جاهزًا للتحقق النهائي. وأعد استخدام جلسة كل محرك لسطح المكتب وللهاتف بتغيير حجم النافذة، ثم أغلقها في خطوة تنظيف من نوع finally، ولا تفتح المحرك التالي إلا بعد ذلك.

```bash
./scripts/pw-session.sh open verify-chrome https://bitsocial.localhost --browser=chrome
playwright-cli -s=verify-chrome snapshot
./scripts/pw-session.sh close verify-chrome
```

عندما تكون الخانة مشغولة، يخرج `open` بالرمز 75؛ فانتظر عبر `./scripts/pw-session.sh open --wait[=SECONDS] ...` (المهلة الافتراضية 300 ثانية) بدلًا من إعادة المحاولة يدويًا. أما القفل الذي يخلّفه سير عمل مقطوع فيُسترجَع تلقائيًا، لأن `open` يتخلى عن أي خانة لم يعد المتصفح المسجَّل لها قيد التشغيل. افحص صاحب القفل عبر `./scripts/pw-session.sh status`؛ ويبقى `release <session>` ملاذًا أخيرًا للحالة النادرة التي يعجز فيها `status` عن التحقق من حالة المتصفح.

```bash
npm install -g @playwright/cli@latest
playwright-cli install --skills
```

مواقع تثبيت المهارات:

- `.cursor/skills/playwright-cli/`
- `.claude/skills/playwright-cli/`

### أفضل ممارسات React من Vercel

لإرشادات أعمق حول أداء React وNext.

```bash
npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-react-best-practices
```

### البحث عن المهارات

اكتشف المهارات من النظام البيئي المفتوح وثبّتها.

```bash
npx skills add https://github.com/vercel-labs/skills --skill find-skills
```

## مبررات سياسة MCP

تجنّب خوادم MCP الخاصة بـ GitHub وخوادم MCP للمتصفح في هذا المشروع، لأنها تضيف عبئًا كبيرًا على مخطط الأدوات وعلى السياق.

- عمليات GitHub: استخدم `gh` CLI.
- عمليات المتصفح: استخدم `playwright-cli`.

## توافر النماذج

- `composer-2` متاح في Cursor فقط. لا تضبطه تحت `.claude/` أو `.codex/`.
- لا يوثّق Codex اسمًا بديلًا للنموذج باسم `latest`. لذلك تُغفل ملفات TOML للوكلاء المخصصين المودعة تحت `.codex/**/agents/*.toml` كلًّا من `model` و`model_reasoning_effort` حتى ترث إعدادات جلسة الأب الحالية.
