# स्किल्स आणि टूल्स

स्किल्स आणि बाह्य टूलिंग सेट करताना किंवा त्यात बदल करताना हा प्लेबुक वापरा.

## शिफारस केलेली स्किल्स

### Context7 (लायब्ररी दस्तऐवज)

लायब्ररींच्या अद्ययावत दस्तऐवजांसाठी.

```bash
npx skills add https://github.com/intellectronica/agent-skills --skill context7
```

### Playwright CLI

ब्राउझर ऑटोमेशनसाठी (नेव्हिगेशन, इंटरॅक्शन, स्क्रीनशॉट्स, चाचण्या, एक्स्ट्रॅक्शन) `playwright-cli` वापरा.

रिपॉझिटरीच्या UI पडताळणीसाठी `playwright-cli` वापरताना एका एंजिननंतर थांबू नका. संबंधित फ्लो तिन्ही मुख्य ब्राउझर एंजिनमध्ये चालवा:

- Blink साठी `chrome`
- Gecko साठी `firefox`
- Safari/WebKit कव्हरेजसाठी `webkit`

पुरावा वेगळा राहावा म्हणून प्रत्येक एंजिनसाठी स्वतंत्र नावाची सेशन्स वापरा, पण ती सेशन्स एकामागोमाग एक चालवा. संपूर्ण मशीनवर एका वेळी फक्त एकच Playwright ब्राउझर सेशन सक्रिय असू शकते, कारण इथे स्पर्धा रिपॉझिटरीसाठी नसून मशीनच्या RAM आणि CPU साठी असते. सेशन्स `./scripts/pw-session.sh` द्वारेच उघडा आणि बंद करा; तेच ते सामायिक लॉक धरून ठेवते, त्यामुळे समांतर चालणारे एजंट मशीनवर ताण देण्याऐवजी ब्राउझरचे काम पुढे ढकलून पुन्हा प्रयत्न करतात. एखादे एंजिन जाणीवपूर्वक वगळले असेल, तर त्याचे कारण नोंदवा.

काम सुरू असताना फक्त Chrome/Blink वापरा. बदल अंतिम पडताळणीसाठी तयार झाल्यावर संपूर्ण Chrome, Firefox आणि WebKit क्रम एकदा चालवा. प्रत्येक एंजिनचे सेशन आकार बदलून डेस्कटॉप आणि मोबाइल दोन्हींसाठी पुन्हा वापरा, ते finally-प्रकारच्या क्लीनअपमध्ये बंद करा, आणि त्यानंतरच पुढचे एंजिन उघडा.

```bash
./scripts/pw-session.sh open verify-chrome https://bitsocial.localhost --browser=chrome
playwright-cli -s=verify-chrome snapshot
./scripts/pw-session.sh close verify-chrome
```

स्लॉट व्यस्त असताना `open` 75 या कोडसह बाहेर पडते; हाताने पुन्हा प्रयत्न करण्याऐवजी `./scripts/pw-session.sh open --wait[=SECONDS] ...` (डीफॉल्ट 300s) वर थांबा. अडथळा आलेल्या वर्कफ्लोने मागे सोडलेले लॉक आपोआप परत मिळवले जाते, कारण ज्या स्लॉटचा नोंदवलेला ब्राउझर आता चालू नाही तो `open` सोडून देते. लॉक कोणाकडे आहे ते `./scripts/pw-session.sh status` ने तपासा; `status` ब्राउझरची स्थिती पडताळू शकत नाही अशा दुर्मिळ प्रसंगीच शेवटचा उपाय म्हणून `release <session>` वापरा.

```bash
npm install -g @playwright/cli@latest
playwright-cli install --skills
```

स्किल इन्स्टॉलची ठिकाणे:

- `.cursor/skills/playwright-cli/`
- `.claude/skills/playwright-cli/`

### Vercel React Best Practices

React/Next परफॉर्मन्सविषयी अधिक सखोल मार्गदर्शनासाठी.

```bash
npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-react-best-practices
```

### Find Skills

खुल्या इकोसिस्टममधून स्किल्स शोधण्यासाठी आणि इन्स्टॉल करण्यासाठी.

```bash
npx skills add https://github.com/vercel-labs/skills --skill find-skills
```

## MCP धोरणामागील कारण

या प्रोजेक्टसाठी GitHub MCP आणि ब्राउझर MCP सर्व्हर टाळा, कारण ते टूल-स्कीमा आणि कॉन्टेक्स्टचा बराच अतिरिक्त भार वाढवतात.

- GitHub ऑपरेशन्स: `gh` CLI वापरा.
- ब्राउझर ऑपरेशन्स: `playwright-cli` वापरा.

## मॉडेल उपलब्धता

- `composer-2` फक्त Cursor मध्ये उपलब्ध आहे. ते `.claude/` किंवा `.codex/` अंतर्गत कॉन्फिगर करू नका.
- Codex `latest` हा मॉडेल अलायस दस्तऐवजीकृत करत नाही. `.codex/**/agents/*.toml` अंतर्गत कमिट केलेल्या कस्टम-एजंट TOML फाइल्समध्ये `model` आणि `model_reasoning_effort` हे दोन्ही वगळले जातात, जेणेकरून त्या सध्याच्या पॅरेंट सेशनच्या सेटिंग्ज वारशाने घेतात.
