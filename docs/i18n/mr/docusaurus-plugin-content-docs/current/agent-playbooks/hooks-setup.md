# एजंट हुक्स सेटअप

तुमचा AI कोडिंग असिस्टंट लाइफसायकल हुक्सना पाठिंबा देत असेल, तर या रिपॉझिटरीसाठी खालील हुक्स कॉन्फिगर करा.

## शिफारस केलेले हुक्स

| हुक             | कमांड                                         | उद्देश                                                                                                                                                                                                |
| --------------- | --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `afterFileEdit` | `scripts/agent-hooks/format.sh`               | AI ने केलेल्या एडिट्सनंतर फाइल्स आपोआप फॉरमॅट करते                                                                                                                                                    |
| `afterFileEdit` | `scripts/agent-hooks/yarn-install.sh`         | `package.json` बदलल्यावर `corepack yarn install` चालवते                                                                                                                                               |
| `afterFileEdit` | `scripts/agent-hooks/react-pattern-review.sh` | डिफमध्ये `about/src/` अंतर्गत `useEffect`/memo प्रिमिटिव्ह जोडली गेल्यास, React रिव्ह्यू स्किल्सच्या साहाय्याने पुनर्विचार करण्याची एजंटला आठवण करून देते                                             |
| `stop`          | `scripts/agent-hooks/sync-git-branches.sh`    | जुने रेफ्स काढून टाकते आणि विलीन झालेल्या तात्पुरत्या टास्क ब्रांच डिलीट करते                                                                                                                         |
| `stop`          | `scripts/agent-hooks/react-pattern-review.sh` | अंतिम व्हेरिफाय गेटच्या आधी `about/src/` मधील नवीन React इफेक्ट्स/मेमोंसाठी सध्याचा डिफ पुन्हा स्कॅन करते                                                                                             |
| `stop`          | `scripts/agent-hooks/verify.sh`               | लक्ष्यित बिल्ड पडताळणी, लिंट, टाइपचेक आणि फॉरमॅट तपासण्या हार्ड-गेट करते; `yarn npm audit` फक्त माहितीपुरते ठेवा आणि डिपेंडन्सी/इम्पोर्ट बदलल्यावर `yarn knip` सल्लागार ऑडिट म्हणून स्वतंत्रपणे चालवा |

## का

- सुसंगत फॉरमॅटिंग
- लॉकफाइल सिंकमध्ये राहते
- about साइटमध्ये नव्याने जोडलेल्या `useEffect`/memo वापरांकडे एजंटचे काम संपण्यापूर्वी स्पष्टपणे दुसऱ्यांदा पाहिले जाते
- प्रत्येक टास्कवर संपूर्ण मल्टी-लोकेल डॉक्स बिल्ड न लादता वर्कस्पेसशी संबंधित बिल्ड/लिंट/टाइप समस्या लवकर सापडतात
- `yarn npm audit` द्वारे सुरक्षिततेची दृश्यता
- डिपेंडन्सी/इम्पोर्ट ड्रिफ्ट `yarn knip` ने तपासता येते, आणि त्यासाठी त्याला गोंगाट करणारा ग्लोबल stop हुक बनवावे लागत नाही
- Codex आणि Cursor दोघांसाठी एकच सामायिक हुक अंमलबजावणी
- तात्पुरत्या टास्क ब्रांच रिपॉझिटरीच्या वर्कट्री वर्कफ्लोशी सुसंगत राहतात

## उदाहरण हुक स्क्रिप्ट्स

### फॉरमॅट हुक

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

### व्हेरिफाय हुक

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

डीफॉल्टनुसार, आवश्यक तपासणी अयशस्वी झाल्यास `scripts/agent-hooks/verify.sh` शून्येतर एक्झिट कोड देते. तुटलेल्या ट्रीमधून हुक न अडवता सिग्नल हवा असेल तेव्हाच जाणीवपूर्वक `AGENT_VERIFY_MODE=advisory` सेट करा. सल्लागार इम्पोर्ट/डिपेंडन्सी समस्यांवर अपयशी ठरायचे असे रिपॉझिटरीने स्पष्टपणे ठरवले नसेल, तोपर्यंत `yarn knip` हार्ड गेटच्या बाहेरच ठेवा.

लाइफसायकल हुक्स मॅन्युअल ब्राउझर पडताळणीची जागा घेत नाहीत. UI किंवा दृश्य बदलांसाठी `chrome`, `firefox` आणि `webkit` मध्ये `playwright-cli` तपासण्या तरीही चालवा, आणि रिस्पॉन्सिव्हनेस किंवा टच वर्तन बदलले असल्यास प्रत्येक एंजिनमध्ये मोबाइल व्ह्यूपोर्ट फ्लोदेखील तपासा.

### Yarn इन्स्टॉल हुक

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

तुमच्या एजंट टूलच्या दस्तऐवजांनुसार हुक वायरिंग कॉन्फिगर करा (`hooks.json`, तत्सम फाइल, इत्यादी).

या रिपॉझिटरीमध्ये `.codex/hooks/*.sh` आणि `.cursor/hooks/*.sh` हे `scripts/agent-hooks/` अंतर्गत असलेल्या सामायिक अंमलबजावणीकडे काम सोपवणारे पातळ रॅपर्स म्हणूनच राहिले पाहिजेत.
