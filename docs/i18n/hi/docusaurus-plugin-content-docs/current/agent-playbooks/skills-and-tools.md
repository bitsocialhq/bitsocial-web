# स्किल्स और टूल्स

स्किल्स तथा बाहरी टूलिंग सेट अप या समायोजित करते समय इस प्लेबुक का उपयोग करें।

## अनुशंसित स्किल्स

### Context7 (लाइब्रेरी दस्तावेज़)

लाइब्रेरियों के ताज़ा दस्तावेज़ों के लिए।

```bash
npx skills add https://github.com/intellectronica/agent-skills --skill context7
```

### Playwright CLI

ब्राउज़र ऑटोमेशन (नेविगेशन, इंटरैक्शन, स्क्रीनशॉट, टेस्ट, एक्सट्रैक्शन) के लिए `playwright-cli` का उपयोग करें।

रिपॉज़िटरी की UI जाँच के लिए `playwright-cli` इस्तेमाल करते समय एक ही इंजन के बाद न रुकें। संबंधित फ़्लो को तीनों मुख्य ब्राउज़र इंजनों में चलाएँ:

- Blink के लिए `chrome`
- Gecko के लिए `firefox`
- Safari/WebKit कवरेज के लिए `webkit`

हर इंजन के लिए अलग नामित सेशन इस्तेमाल करें ताकि प्रमाण आपस में न मिलें, लेकिन उन सेशनों को क्रमवार चलाएँ। पूरी मशीन पर एक समय में केवल एक ही Playwright ब्राउज़र सेशन सक्रिय रह सकता है, क्योंकि यहाँ साझा संसाधन रिपॉज़िटरी नहीं, बल्कि मशीन की RAM और CPU है। सेशन `./scripts/pw-session.sh` के ज़रिए खोलें और बंद करें; यही स्क्रिप्ट वह साझा लॉक रखती है, जिससे समानांतर एजेंट मशीन को थकाने के बजाय ब्राउज़र काम को टालकर बाद में दोहराते हैं। अगर किसी इंजन को जानबूझकर छोड़ा जाए, तो उसका कारण दर्ज करें।

काम के दौरान केवल Chrome/Blink इस्तेमाल करें। बदलाव अंतिम सत्यापन के लिए तैयार हो जाने पर Chrome, Firefox और WebKit का पूरा क्रम एक बार चलाएँ। हर इंजन के सेशन का आकार बदलकर उसे डेस्कटॉप और मोबाइल दोनों के लिए दोबारा इस्तेमाल करें, फिर उसे finally-शैली की सफ़ाई में बंद करें, और उसके बाद ही अगला इंजन खोलें।

```bash
./scripts/pw-session.sh open verify-chrome https://bitsocial.localhost --browser=chrome
playwright-cli -s=verify-chrome snapshot
./scripts/pw-session.sh close verify-chrome
```

जब स्लॉट व्यस्त हो, तो `open` कोड 75 के साथ बाहर निकलता है; हाथ से दोबारा कोशिश करने के बजाय `./scripts/pw-session.sh open --wait[=SECONDS] ...` (डिफ़ॉल्ट 300 सेकंड) पर प्रतीक्षा करें। बीच में रुके किसी वर्कफ़्लो का छोड़ा हुआ लॉक अपने आप वापस ले लिया जाता है, क्योंकि `open` हर उस स्लॉट को छोड़ देता है जिसका दर्ज ब्राउज़र अब नहीं चल रहा। लॉक किसके पास है, यह `./scripts/pw-session.sh status` से देखें; `release <session>` अंतिम उपाय है, उन दुर्लभ मामलों के लिए जहाँ `status` ब्राउज़र की स्थिति की पुष्टि न कर सके।

```bash
npm install -g @playwright/cli@latest
playwright-cli install --skills
```

स्किल इंस्टॉल होने की जगहें:

- `.cursor/skills/playwright-cli/`
- `.claude/skills/playwright-cli/`

### Vercel React Best Practices

React/Next के प्रदर्शन पर गहरे मार्गदर्शन के लिए।

```bash
npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-react-best-practices
```

### Find Skills

खुले इकोसिस्टम से स्किल्स खोजें/इंस्टॉल करें।

```bash
npx skills add https://github.com/vercel-labs/skills --skill find-skills
```

## MCP नीति का औचित्य

इस प्रोजेक्ट में GitHub MCP और ब्राउज़र MCP सर्वर से बचें, क्योंकि वे टूल-स्कीमा और कॉन्टेक्स्ट का काफ़ी बोझ जोड़ते हैं।

- GitHub से जुड़े काम: `gh` CLI इस्तेमाल करें।
- ब्राउज़र से जुड़े काम: `playwright-cli` इस्तेमाल करें।

## मॉडल उपलब्धता

- `composer-2` केवल Cursor में उपलब्ध है। इसे `.claude/` या `.codex/` के अंतर्गत कॉन्फ़िगर न करें।
- Codex किसी `latest` मॉडल उपनाम का दस्तावेज़ीकरण नहीं करता। `.codex/**/agents/*.toml` के अंतर्गत कमिट किए गए कस्टम-एजेंट TOML दोनों `model` और `model_reasoning_effort` छोड़ देते हैं, ताकि वे मौजूदा पैरेंट सेशन की सेटिंग्स विरासत में लें।
