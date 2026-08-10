# Agenttikoukkujen asetukset

Jos tekoälyavustajasi tukee elinkaarikoukkuja, määritä nämä tätä repoa varten.

## Suositellut koukut

| Koukku          | Komento                                       | Tarkoitus                                                                                                                                                                                                       |
| --------------- | --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `afterFileEdit` | `scripts/agent-hooks/format.sh`               | Muotoile tiedostot automaattisesti tekoälyn muokkausten jälkeen                                                                                                                                                 |
| `afterFileEdit` | `scripts/agent-hooks/yarn-install.sh`         | Aja `corepack yarn install`, kun `package.json` muuttuu                                                                                                                                                         |
| `afterFileEdit` | `scripts/agent-hooks/react-pattern-review.sh` | Kun muutos lisää `useEffect`- tai memo-primitiivejä hakemistoon `about/src/`, muistuta agenttia harkitsemaan ratkaisua uudelleen React-katselmustaitojen avulla                                                 |
| `stop`          | `scripts/agent-hooks/sync-git-branches.sh`    | Karsi vanhentuneet viitteet ja poista jo yhdistetyt tilapäiset tehtävähaarat                                                                                                                                    |
| `stop`          | `scripts/agent-hooks/react-pattern-review.sh` | Käy nykyinen muutos uudelleen läpi uusien React-efektien ja -memojen varalta hakemistossa `about/src/` ennen lopullista varmistusporttia                                                                        |
| `stop`          | `scripts/agent-hooks/verify.sh`               | Pakota kohdennettu koonnin varmistus, lint, tyyppitarkistus ja muotoilutarkistukset; pidä `yarn npm audit` informatiivisena ja aja `yarn knip` erikseen neuvoa-antavana, kun riippuvuudet tai tuonnit muuttuvat |

## Miksi

- Yhtenäinen muotoilu
- Lukkotiedosto pysyy synkronissa
- About-sivustoon lisätyt uudet `useEffect`- ja memo-kohdat saavat nimenomaisen toisen tarkastelun ennen kuin agentti lopettaa
- Työtilan kannalta olennaiset koonti-, lint- ja tyyppiongelmat havaitaan ajoissa ilman, että jokaisessa tehtävässä pakotetaan täysi monikielinen dokumentaatiokoonti
- Tietoturvanäkyvyys komennon `yarn npm audit` kautta
- Riippuvuuksien ja tuontien ajautumista voi seurata komennolla `yarn knip` ilman, että siitä tulee meluisa globaali stop-koukku
- Yksi jaettu koukkutoteutus sekä Codexille että Cursorille
- Tilapäiset tehtävähaarat pysyvät linjassa repon worktree-työnkulun kanssa

## Esimerkkejä koukkuskripteistä

### Muotoilukoukku

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

### Varmistuskoukku

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

Oletusarvoisesti `scripts/agent-hooks/verify.sh` palauttaa nollasta poikkeavan paluuarvon, kun vaadittu tarkistus epäonnistuu. Aseta `AGENT_VERIFY_MODE=advisory` vain, kun haluat tarkoituksella signaalia rikkinäisestä puusta ilman että koukku estää etenemisen. Pidä `yarn knip` kovan portin ulkopuolella, ellei repossa nimenomaisesti päätetä kaatua neuvoa-antaviin tuonti- tai riippuvuushavaintoihin.

Elinkaarikoukut eivät korvaa manuaalista selaintarkistusta. Tee käyttöliittymä- tai ulkoasumuutosten yhteydessä edelleen `playwright-cli`-tarkistukset moottoreilla `chrome`, `firefox` ja `webkit`, ja lisäksi mobiilinäkymän kulku kussakin moottorissa, kun responsiivisuus tai kosketuskäyttäytyminen muuttui.

### Yarn install -koukku

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

Kytke koukut agenttityökalusi dokumentaation mukaisesti (`hooks.json` tai vastaava).

Tässä repossa `.codex/hooks/*.sh` ja `.cursor/hooks/*.sh` tulee pitää ohuina kääreinä, jotka delegoivat työn jaetuille toteutuksille hakemistossa `scripts/agent-hooks/`.
