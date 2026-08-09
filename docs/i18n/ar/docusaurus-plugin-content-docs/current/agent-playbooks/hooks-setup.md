# إعداد خطافات الوكلاء

إذا كان مساعد البرمجة بالذكاء الاصطناعي لديك يدعم خطافات دورة الحياة، فاضبط الخطافات التالية لهذا المستودع.

## الخطافات الموصى بها

| الخطاف          | الأمر                                         | الغرض                                                                                                                                                                                            |
| --------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `afterFileEdit` | `scripts/agent-hooks/format.sh`               | تنسيق الملفات تلقائيًا بعد تعديلات الذكاء الاصطناعي                                                                                                                                              |
| `afterFileEdit` | `scripts/agent-hooks/yarn-install.sh`         | تشغيل `corepack yarn install` عند تغيّر `package.json`                                                                                                                                           |
| `afterFileEdit` | `scripts/agent-hooks/react-pattern-review.sh` | عندما يضيف فرق التغييرات بدائيات `useEffect`/memo في `about/src/`، تذكير الوكيل بإعادة النظر فيها عبر مهارات مراجعة React                                                                        |
| `stop`          | `scripts/agent-hooks/sync-git-branches.sh`    | تقليم المراجع القديمة وحذف فروع المهام المؤقتة التي جرى دمجها                                                                                                                                    |
| `stop`          | `scripts/agent-hooks/react-pattern-review.sh` | إعادة فحص فرق التغييرات الحالي بحثًا عن تأثيرات أو memo جديدة في React ضمن `about/src/` قبل بوابة التحقق النهائية                                                                                |
| `stop`          | `scripts/agent-hooks/verify.sh`               | بوابة صارمة للتحقق الموجَّه من البناء والفحص اللغوي وفحص الأنواع وفحص التنسيق؛ مع إبقاء `yarn npm audit` معلوماتيًا وتشغيل `yarn knip` منفصلًا كتدقيق استرشادي عند تغيّر التبعيات أو الاستيرادات |

## لماذا

- تنسيق متسق
- بقاء ملف القفل متزامنًا
- حصول إضافات `useEffect`/memo الجديدة في موقع about على نظرة ثانية صريحة قبل أن ينهي الوكيل عمله
- اكتشاف مشكلات البناء والفحص اللغوي والأنواع المتعلقة بمساحة العمل مبكرًا، دون فرض بناء التوثيق الكامل بجميع اللغات في كل مهمة
- وضوح أمني عبر `yarn npm audit`
- إمكانية فحص انحراف التبعيات والاستيرادات بـ `yarn knip` دون تحويله إلى خطاف إيقاف عام ومزعج
- تنفيذ واحد مشترك للخطافات يخدم Codex وCursor معًا
- بقاء فروع المهام المؤقتة متوافقة مع سير عمل أشجار العمل في المستودع

## أمثلة على سكربتات الخطافات

### خطاف التنسيق

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

### خطاف التحقق

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

افتراضيًا، يخرج `scripts/agent-hooks/verify.sh` بقيمة غير صفرية عندما يفشل فحص مطلوب. ولا تضبط `AGENT_VERIFY_MODE=advisory` إلا عندما تحتاج عمدًا إلى مؤشرات من شجرة معطوبة دون تعطيل الخطاف. وأبقِ `yarn knip` خارج البوابة الصارمة، ما لم يقرر المستودع صراحةً الإخفاق بسبب مشكلات استيراد أو تبعيات استرشادية.

لا تغني خطافات دورة الحياة عن التحقق اليدوي في المتصفح. فبالنسبة لتغييرات الواجهة أو المظهر، شغّل فحوص `playwright-cli` على `chrome` و`firefox` و`webkit`، إضافةً إلى مسار على نافذة عرض للهاتف في كل محرك عندما يتغيّر التجاوب أو سلوك اللمس.

### خطاف تثبيت Yarn

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

اضبط ربط الخطافات وفقًا لتوثيق أداة الوكيل لديك (`hooks.json` أو ما يعادله، وما إلى ذلك).

في هذا المستودع، ينبغي أن يظل `.codex/hooks/*.sh` و`.cursor/hooks/*.sh` مجرد أغلفة رقيقة تفوّض العمل إلى التنفيذات المشتركة تحت `scripts/agent-hooks/`.
