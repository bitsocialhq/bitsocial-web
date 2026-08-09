# ఏజెంట్ హుక్‌ల సెటప్

మీ AI కోడింగ్ అసిస్టెంట్ లైఫ్‌సైకిల్ హుక్‌లకు మద్దతిస్తే, ఈ రెపో కోసం వీటిని కాన్ఫిగర్ చేయండి.

## సిఫార్సు చేసిన హుక్‌లు

| హుక్            | ఆదేశం                                         | ప్రయోజనం                                                                                                                                                                                                           |
| --------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `afterFileEdit` | `scripts/agent-hooks/format.sh`               | AI సవరణల తర్వాత ఫైల్‌లను ఆటో-ఫార్మాట్ చేస్తుంది                                                                                                                                                                    |
| `afterFileEdit` | `scripts/agent-hooks/yarn-install.sh`         | `package.json` మారినప్పుడు `corepack yarn install` నడుపుతుంది                                                                                                                                                      |
| `afterFileEdit` | `scripts/agent-hooks/react-pattern-review.sh` | `about/src/`లో ఒక డిఫ్ `useEffect`/memo ప్రిమిటివ్‌లను జోడించినప్పుడు, React సమీక్షా నైపుణ్యాలతో మళ్లీ ఆలోచించమని ఏజెంట్‌కు గుర్తు చేస్తుంది                                                                       |
| `stop`          | `scripts/agent-hooks/sync-git-branches.sh`    | పాతబడిన రెఫ్‌లను తొలగించి, విలీనమైన తాత్కాలిక టాస్క్ బ్రాంచ్‌లను తీసేస్తుంది                                                                                                                                       |
| `stop`          | `scripts/agent-hooks/react-pattern-review.sh` | తుది ధృవీకరణ గేట్‌కు ముందు `about/src/`లో కొత్త React ఎఫెక్ట్‌లు/మెమోల కోసం ప్రస్తుత డిఫ్‌ను మళ్లీ స్కాన్ చేస్తుంది                                                                                                |
| `stop`          | `scripts/agent-hooks/verify.sh`               | లక్ష్యిత బిల్డ్ ధృవీకరణ, లింట్, టైప్‌చెక్, ఫార్మాట్ తనిఖీలను హార్డ్-గేట్‌గా అమలు చేస్తుంది; `yarn npm audit`ను సమాచారం కోసమే ఉంచి, డిపెండెన్సీలు/ఇంపోర్ట్‌లు మారినప్పుడు `yarn knip`ను విడిగా సలహా ఆడిట్‌గా నడపండి |

## ఎందుకు

- స్థిరమైన ఫార్మాటింగ్
- లాక్‌ఫైల్ ఎప్పుడూ సింక్‌లో ఉంటుంది
- about సైట్‌లో కొత్తగా చేరిన `useEffect`/memo వాడకాలను ఏజెంట్ ముగించే ముందు స్పష్టంగా మరోసారి పరిశీలిస్తారు
- ప్రతి పనికీ పూర్తి బహుళ-లొకేల్ డాక్స్ బిల్డ్‌ను బలవంతం చేయకుండానే, వర్క్‌స్పేస్‌కు సంబంధించిన బిల్డ్/లింట్/టైప్ సమస్యలు ముందుగానే బయటపడతాయి
- `yarn npm audit` ద్వారా భద్రతా దృశ్యమానత
- `yarn knip`ను గోలగా ఉండే గ్లోబల్ స్టాప్ హుక్‌గా మార్చకుండానే దానితో డిపెండెన్సీ/ఇంపోర్ట్ డ్రిఫ్ట్‌ను తనిఖీ చేయవచ్చు
- Codex, Cursor రెండింటికీ ఒకే భాగస్వామ్య హుక్ అమలు
- తాత్కాలిక టాస్క్ బ్రాంచ్‌లు రెపో వర్క్‌ట్రీ వర్క్‌ఫ్లోతో సమన్వయంగా ఉంటాయి

## ఉదాహరణ హుక్ స్క్రిప్ట్‌లు

### ఫార్మాట్ హుక్

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

### వెరిఫై హుక్

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

డిఫాల్ట్‌గా, అవసరమైన తనిఖీ విఫలమైనప్పుడు `scripts/agent-hooks/verify.sh` సున్నా కాని కోడ్‌తో నిష్క్రమిస్తుంది. హుక్‌ను అడ్డుకోకుండా, విరిగిన ట్రీ నుండి సంకేతం కావాలని మీరు ఉద్దేశపూర్వకంగా అనుకున్నప్పుడు మాత్రమే `AGENT_VERIFY_MODE=advisory` సెట్ చేయండి. సలహా స్థాయి ఇంపోర్ట్/డిపెండెన్సీ సమస్యలపై విఫలం కావాలని రెపో స్పష్టంగా నిర్ణయించుకుంటే తప్ప, `yarn knip`ను హార్డ్ గేట్ వెలుపలే ఉంచండి.

లైఫ్‌సైకిల్ హుక్‌లు మాన్యువల్ బ్రౌజర్ ధృవీకరణకు ప్రత్యామ్నాయం కావు. UI లేదా విజువల్ మార్పుల కోసం `chrome`, `firefox`, `webkit` అన్నింటిలోనూ `playwright-cli` తనిఖీలను ఇప్పటికీ నడపండి; రెస్పాన్సివ్‌నెస్ లేదా టచ్ ప్రవర్తన మారినప్పుడు ప్రతి ఇంజిన్‌లోనూ ఒక మొబైల్ వ్యూపోర్ట్ ఫ్లోను కూడా కలపండి.

### Yarn ఇన్‌స్టాల్ హుక్

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

మీ ఏజెంట్ టూల్ డాక్యుమెంటేషన్ ప్రకారం హుక్ వైరింగ్‌ను కాన్ఫిగర్ చేయండి (`hooks.json` లేదా దానికి సమానమైనవి).

ఈ రెపోలో `.codex/hooks/*.sh` మరియు `.cursor/hooks/*.sh` ఫైల్‌లు `scripts/agent-hooks/` కింద ఉన్న భాగస్వామ్య అమలులకు అప్పగించే సన్నని ర్యాపర్‌లుగానే ఉండాలి.
