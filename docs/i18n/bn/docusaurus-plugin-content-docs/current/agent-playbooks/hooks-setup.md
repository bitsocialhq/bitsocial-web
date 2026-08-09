# এজেন্ট হুক সেটআপ

আপনার AI কোডিং সহকারী যদি লাইফসাইকেল হুক সমর্থন করে, তাহলে এই রেপোর জন্য নিচের হুকগুলো কনফিগার করুন।

## প্রস্তাবিত হুক

| হুক             | কমান্ড                                        | উদ্দেশ্য                                                                                                                                                                                              |
| --------------- | --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `afterFileEdit` | `scripts/agent-hooks/format.sh`               | AI সম্পাদনার পরে ফাইলগুলো স্বয়ংক্রিয়ভাবে ফরম্যাট করে                                                                                                                                                |
| `afterFileEdit` | `scripts/agent-hooks/yarn-install.sh`         | `package.json` বদলালে `corepack yarn install` চালায়                                                                                                                                                  |
| `afterFileEdit` | `scripts/agent-hooks/react-pattern-review.sh` | কোনো ডিফ `about/src/`-এ `useEffect`/memo প্রিমিটিভ যোগ করলে React রিভিউ স্কিল দিয়ে সিদ্ধান্তটি পুনর্বিবেচনা করতে এজেন্টকে মনে করিয়ে দেয়                                                            |
| `stop`          | `scripts/agent-hooks/sync-git-branches.sh`    | বাসি রেফ ছেঁটে ফেলে এবং একীভূত হয়ে যাওয়া অস্থায়ী টাস্ক ব্রাঞ্চ মুছে দেয়                                                                                                                           |
| `stop`          | `scripts/agent-hooks/react-pattern-review.sh` | চূড়ান্ত যাচাই গেটের আগে `about/src/`-এ নতুন React ইফেক্ট বা মেমো যোগ হয়েছে কি না তা বর্তমান ডিফে আবার স্ক্যান করে                                                                                   |
| `stop`          | `scripts/agent-hooks/verify.sh`               | লক্ষ্যভিত্তিক বিল্ড যাচাই, লিন্ট, টাইপচেক ও ফরম্যাট চেককে হার্ড গেট বানায়; `yarn npm audit` কে তথ্যমূলক রাখে এবং নির্ভরতা বা ইমপোর্ট বদলালে পরামর্শমূলক নিরীক্ষা হিসেবে `yarn knip` আলাদাভাবে চালায় |

## কেন

- ফরম্যাটিং সামঞ্জস্যপূর্ণ থাকে
- লকফাইল সিঙ্কে থাকে
- about সাইটে নতুন `useEffect` বা memo যোগ হলে এজেন্ট কাজ শেষ করার আগে সেগুলো আলাদা করে আরেকবার দেখা হয়
- প্রতিটি কাজে পুরো মাল্টি-লোকেল ডক্স বিল্ড চাপিয়ে না দিয়েই ওয়ার্কস্পেস-সংশ্লিষ্ট বিল্ড, লিন্ট ও টাইপ সমস্যা আগেভাগে ধরা পড়ে
- `yarn npm audit` এর মাধ্যমে নিরাপত্তা-সংক্রান্ত দৃশ্যমানতা পাওয়া যায়
- নির্ভরতা ও ইমপোর্টের ড্রিফট `yarn knip` দিয়ে পরীক্ষা করা যায়, অথচ সেটিকে গোলমেলে গ্লোবাল স্টপ হুকে পরিণত করতে হয় না
- Codex ও Cursor উভয়ের জন্য একটিই ভাগ করা হুক ইমপ্লিমেন্টেশন
- অস্থায়ী টাস্ক ব্রাঞ্চগুলো রেপোর ওয়ার্কট্রি ওয়ার্কফ্লোর সঙ্গে সঙ্গতিপূর্ণ থাকে

## উদাহরণ হুক স্ক্রিপ্ট

### ফরম্যাট হুক

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

### যাচাই হুক

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

ডিফল্টভাবে, কোনো আবশ্যক চেক ব্যর্থ হলে `scripts/agent-hooks/verify.sh` নন-জিরো স্ট্যাটাসে শেষ হয়। হুককে আটকে না দিয়ে ভাঙা ট্রি থেকে ইচ্ছাকৃতভাবে সিগন্যাল নেওয়ার দরকার হলে তবেই `AGENT_VERIFY_MODE=advisory` সেট করুন। পরামর্শমূলক ইমপোর্ট বা নির্ভরতা সমস্যায় ব্যর্থ হওয়ার সিদ্ধান্ত রেপো স্পষ্টভাবে না নেওয়া পর্যন্ত `yarn knip` কে হার্ড গেটের বাইরে রাখুন।

লাইফসাইকেল হুক ম্যানুয়াল ব্রাউজার যাচাইয়ের বিকল্প নয়। UI বা ভিজ্যুয়াল পরিবর্তনের ক্ষেত্রে `chrome`, `firefox` ও `webkit` জুড়ে `playwright-cli` চেক চালাতেই হবে, আর রেসপন্সিভনেস বা টাচ আচরণ বদলে গেলে প্রতিটি ইঞ্জিনে একটি মোবাইল ভিউপোর্ট ফ্লোও চালাতে হবে।

### Yarn ইনস্টল হুক

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

আপনার এজেন্ট টুলের ডকুমেন্টেশন অনুযায়ী হুক ওয়্যারিং কনফিগার করুন (`hooks.json` বা সমতুল্য ফাইল ইত্যাদি)।

এই রেপোতে `.codex/hooks/*.sh` এবং `.cursor/hooks/*.sh` পাতলা র‍্যাপার হিসেবেই থাকা উচিত, যেগুলো `scripts/agent-hooks/` এর অধীনে থাকা ভাগ করা ইমপ্লিমেন্টেশনের ওপর কাজ ছেড়ে দেয়।
