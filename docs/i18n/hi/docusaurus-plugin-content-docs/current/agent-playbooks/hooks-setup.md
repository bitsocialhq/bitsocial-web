# एजेंट हुक सेटअप

अगर आपका AI कोडिंग सहायक लाइफ़साइकल हुक का समर्थन करता है, तो इस रिपॉज़िटरी के लिए ये हुक कॉन्फ़िगर करें।

## अनुशंसित हुक

| हुक             | कमांड                                         | उद्देश्य                                                                                                                                                                                                         |
| --------------- | --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `afterFileEdit` | `scripts/agent-hooks/format.sh`               | AI संपादनों के बाद फ़ाइलों को अपने आप फ़ॉर्मैट करता है                                                                                                                                                           |
| `afterFileEdit` | `scripts/agent-hooks/yarn-install.sh`         | `package.json` बदलने पर `corepack yarn install` चलाता है                                                                                                                                                         |
| `afterFileEdit` | `scripts/agent-hooks/react-pattern-review.sh` | जब कोई डिफ़ `about/src/` में `useEffect`/memo प्रिमिटिव जोड़े, तो एजेंट को React रिव्यू स्किल्स के साथ दोबारा सोचने की याद दिलाता है                                                                             |
| `stop`          | `scripts/agent-hooks/sync-git-branches.sh`    | बासी रेफ़ हटाता है और मर्ज हो चुकी अस्थायी टास्क ब्रांच मिटाता है                                                                                                                                                |
| `stop`          | `scripts/agent-hooks/react-pattern-review.sh` | अंतिम वेरिफ़ाई गेट से पहले मौजूदा डिफ़ को `about/src/` में नए React इफ़ेक्ट/मेमो के लिए दोबारा स्कैन करता है                                                                                                     |
| `stop`          | `scripts/agent-hooks/verify.sh`               | लक्षित बिल्ड सत्यापन, लिंट, टाइपचेक और फ़ॉर्मैट जाँच को हार्ड-गेट करता है; `yarn npm audit` को केवल सूचनात्मक रखता है और डिपेंडेंसी/इंपोर्ट बदलने पर `yarn knip` को अलग से एक सलाहकारी ऑडिट के रूप में चलवाता है |

## क्यों

- एकसमान फ़ॉर्मैटिंग
- लॉकफ़ाइल सिंक में बनी रहती है
- about साइट में नए `useEffect`/memo जोड़े जाने पर एजेंट के काम खत्म करने से पहले एक स्पष्ट दूसरी नज़र मिलती है
- वर्कस्पेस से जुड़ी बिल्ड/लिंट/टाइप समस्याएँ जल्दी पकड़ में आती हैं, बिना हर काम पर पूरा मल्टी-लोकेल डॉक्स बिल्ड चलाए
- `yarn npm audit` के ज़रिए सुरक्षा की दृश्यता
- डिपेंडेंसी/इंपोर्ट ड्रिफ़्ट को `yarn knip` से जाँचा जा सकता है, बिना उसे शोरगुल भरे ग्लोबल stop हुक में बदले
- Codex और Cursor दोनों के लिए एक ही साझा हुक इंप्लीमेंटेशन
- अस्थायी टास्क ब्रांच रिपॉज़िटरी के वर्कट्री वर्कफ़्लो के अनुरूप बनी रहती हैं

## उदाहरण हुक स्क्रिप्ट

### फ़ॉर्मैट हुक

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

### वेरिफ़ाई हुक

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

डिफ़ॉल्ट रूप से, कोई ज़रूरी जाँच विफल होने पर `scripts/agent-hooks/verify.sh` नॉन-ज़ीरो कोड के साथ बाहर निकलता है। `AGENT_VERIFY_MODE=advisory` केवल तभी सेट करें जब आपको जानबूझकर किसी टूटे हुए ट्री से संकेत चाहिए और हुक को रोकना नहीं है। `yarn knip` को हार्ड गेट से बाहर रखें, जब तक रिपॉज़िटरी स्पष्ट रूप से यह तय न कर ले कि सलाहकारी इंपोर्ट/डिपेंडेंसी समस्याओं पर विफल होना है।

लाइफ़साइकल हुक मैन्युअल ब्राउज़र सत्यापन की जगह नहीं लेते। UI या विज़ुअल बदलावों के लिए `chrome`, `firefox` और `webkit` में `playwright-cli` जाँच अब भी चलाएँ, और जब रिस्पॉन्सिवनेस या टच व्यवहार बदला हो तो हर इंजन में एक मोबाइल व्यूपोर्ट फ़्लो भी चलाएँ।

### Yarn इंस्टॉल हुक

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

हुक वायरिंग अपने एजेंट टूल के दस्तावेज़ों के अनुसार कॉन्फ़िगर करें (`hooks.json`, या उसका समकक्ष)।

इस रिपॉज़िटरी में `.codex/hooks/*.sh` और `.cursor/hooks/*.sh` को पतले रैपर के रूप में ही बने रहना चाहिए, जो `scripts/agent-hooks/` के अंतर्गत मौजूद साझा इंप्लीमेंटेशन को काम सौंपते हैं।
