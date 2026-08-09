# স্কিল ও টুল

স্কিল এবং বাইরের টুলিং সেট আপ বা সমন্বয় করার সময় এই প্লেবুকটি ব্যবহার করুন।

## প্রস্তাবিত স্কিল

### Context7 (লাইব্রেরি ডক্স)

লাইব্রেরির হালনাগাদ ডকুমেন্টেশনের জন্য।

```bash
npx skills add https://github.com/intellectronica/agent-skills --skill context7
```

### Playwright CLI

ব্রাউজার অটোমেশনের (নেভিগেশন, ইন্টারঅ্যাকশন, স্ক্রিনশট, টেস্ট, ডেটা নিষ্কাশন) জন্য `playwright-cli` ব্যবহার করুন।

রেপোর UI যাচাইয়ে `playwright-cli` ব্যবহার করার সময় একটি ইঞ্জিনেই থেমে যাবেন না। প্রাসঙ্গিক ফ্লোটি তিনটি প্রধান ব্রাউজার ইঞ্জিনেই চালান:

- Blink-এর জন্য `chrome`
- Gecko-এর জন্য `firefox`
- Safari/WebKit কভারেজের জন্য `webkit`

প্রমাণ আলাদা রাখতে প্রতিটি ইঞ্জিনের জন্য আলাদা নামের সেশন ব্যবহার করুন, তবে সেই সেশনগুলো একের পর এক চালান। গোটা মেশিনে একসঙ্গে কেবল একটি Playwright ব্রাউজার সেশন সচল থাকতে পারে, কারণ এখানে সীমিত সম্পদ রিপোজিটরি নয় বরং মেশিনের RAM ও CPU। সেশন খোলা ও বন্ধ করুন `./scripts/pw-session.sh` দিয়ে; এটি ওই ভাগ করা লকটি ধরে রাখে, ফলে সমান্তরাল এজেন্টরা মেশিন বোঝাই না করে ব্রাউজারের কাজ পিছিয়ে দিয়ে পরে আবার চেষ্টা করে। কোনো ইঞ্জিন ইচ্ছাকৃতভাবে বাদ দিলে তার কারণ লিখে রাখুন।

কাজ চলাকালীন পুনরাবৃত্ত পরীক্ষায় কেবল Chrome/Blink ব্যবহার করুন। পরিবর্তনটি চূড়ান্ত যাচাইয়ের জন্য প্রস্তুত হলে একবার পুরো Chrome, Firefox ও WebKit ক্রমটি চালান। প্রতিটি ইঞ্জিনের সেশন রিসাইজ করে ডেস্কটপ ও মোবাইল দুটোতেই পুনর্ব্যবহার করুন, শেষে পরিচ্ছন্নতার অংশ হিসেবে সেটি বন্ধ করুন, এবং তারপরই পরের ইঞ্জিনটি খুলুন।

```bash
./scripts/pw-session.sh open verify-chrome https://bitsocial.localhost --browser=chrome
playwright-cli -s=verify-chrome snapshot
./scripts/pw-session.sh close verify-chrome
```

স্লটটি ব্যস্ত থাকলে `open` 75 কোডে শেষ হয়; হাতে হাতে বারবার চেষ্টা না করে `./scripts/pw-session.sh open --wait[=SECONDS] ...` দিয়ে অপেক্ষা করুন (ডিফল্ট 300 সেকেন্ড)। মাঝপথে থেমে যাওয়া কোনো ওয়ার্কফ্লোর ফেলে রাখা লক স্বয়ংক্রিয়ভাবেই ছেড়ে দেওয়া হয়, কারণ `open` এমন যেকোনো স্লট ছেড়ে দেয় যার নথিভুক্ত ব্রাউজার আর চলছে না। কে স্লটটি ধরে আছে তা `./scripts/pw-session.sh status` দিয়ে দেখুন; `status` ব্রাউজারের অবস্থা যাচাই করতে না পারার বিরল ক্ষেত্রে শেষ উপায় হিসেবে `release <session>` আছে।

```bash
npm install -g @playwright/cli@latest
playwright-cli install --skills
```

স্কিল ইনস্টলের অবস্থান:

- `.cursor/skills/playwright-cli/`
- `.claude/skills/playwright-cli/`

### Vercel React Best Practices

React ও Next-এর পারফরম্যান্স নিয়ে গভীরতর নির্দেশনার জন্য।

```bash
npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-react-best-practices
```

### Find Skills

উন্মুক্ত ইকোসিস্টেম থেকে স্কিল খুঁজে বের করা ও ইনস্টল করা।

```bash
npx skills add https://github.com/vercel-labs/skills --skill find-skills
```

## MCP নীতির যুক্তি

এই প্রকল্পে GitHub MCP এবং ব্রাউজার MCP সার্ভার এড়িয়ে চলুন, কারণ এগুলো টুল-স্কিমা ও কনটেক্সটের উল্লেখযোগ্য বাড়তি বোঝা যোগ করে।

- GitHub-এর কাজ: `gh` CLI ব্যবহার করুন।
- ব্রাউজারের কাজ: `playwright-cli` ব্যবহার করুন।

## মডেলের উপলব্ধতা

- `composer-2` কেবল Cursor-এই আছে। এটিকে `.claude/` বা `.codex/` এর অধীনে কনফিগার করবেন না।
- Codex কোনো `latest` মডেল অ্যালিয়াস নথিভুক্ত করেনি। `.codex/**/agents/*.toml` এর অধীনে কমিট করা কাস্টম-এজেন্ট TOML ফাইলগুলো `model` ও `model_reasoning_effort` দুটোই বাদ দেয়, যাতে সেগুলো চলতি প্যারেন্ট সেশনের সেটিংস উত্তরাধিকারসূত্রে পায়।
