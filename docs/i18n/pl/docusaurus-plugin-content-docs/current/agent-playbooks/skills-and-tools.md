# Umiejętności i narzędzia

Sięgnij po ten playbook przy konfigurowaniu lub dostosowywaniu umiejętności i zewnętrznych narzędzi.

## Zalecane umiejętności

### Context7 (dokumentacja bibliotek)

Do aktualnej dokumentacji bibliotek.

```bash
npx skills add https://github.com/intellectronica/agent-skills --skill context7
```

### Playwright CLI

Używaj `playwright-cli` do automatyzacji przeglądarki (nawigacja, interakcje, zrzuty ekranu, testy, ekstrakcja danych).

Gdy weryfikujesz UI repozytorium przy użyciu `playwright-cli`, nie poprzestawaj na jednym silniku. Uruchom odpowiedni przepływ we wszystkich trzech głównych silnikach przeglądarek:

- `chrome` dla Blink
- `firefox` dla Gecko
- `webkit` dla pokrycia Safari/WebKit

Dla każdego silnika używaj osobnej nazwanej sesji, żeby dowody pozostały rozdzielone, ale uruchamiaj te sesje po kolei. W danym momencie na całej maszynie może być aktywna tylko jedna sesja przeglądarki Playwright, ponieważ zasobem, o który toczy się rywalizacja, są RAM i CPU maszyny, a nie repozytorium. Otwieraj i zamykaj sesje przez `./scripts/pw-session.sh`; skrypt trzyma tę wspólną blokadę, dzięki czemu równolegli agenci odkładają pracę w przeglądarce i ponawiają ją, zamiast wysycać maszynę. Jeśli świadomie pomijasz któryś silnik, zapisz dlaczego.

Podczas iterowania używaj wyłącznie Chrome/Blink. Pełną sekwencję Chrome, Firefox i WebKit uruchom, gdy zmiana jest gotowa do końcowej weryfikacji. Sesję każdego silnika wykorzystaj ponownie dla desktopu i mobile, zmieniając jej rozmiar, zamknij ją w sprzątaniu w stylu bloku finally i dopiero potem otwórz kolejny silnik.

```bash
./scripts/pw-session.sh open verify-chrome https://bitsocial.localhost --browser=chrome
playwright-cli -s=verify-chrome snapshot
./scripts/pw-session.sh close verify-chrome
```

Gdy slot jest zajęty, `open` kończy się kodem 75; zamiast ponawiać ręcznie, zablokuj się na `./scripts/pw-session.sh open --wait[=SECONDS] ...` (domyślnie 300 s). Blokada pozostawiona przez przerwany przepływ jest odzyskiwana automatycznie, ponieważ `open` zwalnia każdy slot, którego zapisana przeglądarka już nie działa. Kto trzyma blokadę, sprawdzisz przez `./scripts/pw-session.sh status`; `release <session>` to ostateczność na rzadki przypadek, gdy `status` nie potrafi zweryfikować stanu przeglądarki.

```bash
npm install -g @playwright/cli@latest
playwright-cli install --skills
```

Miejsca instalacji umiejętności:

- `.cursor/skills/playwright-cli/`
- `.claude/skills/playwright-cli/`

### Vercel React Best Practices

Do pogłębionych wskazówek o wydajności React/Next.

```bash
npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-react-best-practices
```

### Find Skills

Odkrywanie i instalowanie umiejętności z otwartego ekosystemu.

```bash
npx skills add https://github.com/vercel-labs/skills --skill find-skills
```

## Uzasadnienie polityki MCP

W tym projekcie unikaj serwerów MCP do GitHub oraz serwerów MCP do przeglądarki, ponieważ dokładają znaczny narzut schematów narzędzi i kontekstu.

- Operacje na GitHub: używaj `gh` CLI.
- Operacje w przeglądarce: używaj `playwright-cli`.

## Dostępność modeli

- `composer-2` jest dostępny wyłącznie w Cursor. Nie konfiguruj go w `.claude/` ani `.codex/`.
- Codex nie dokumentuje aliasu modelu `latest`. Zatwierdzone pliki TOML własnych agentów w `.codex/**/agents/*.toml` pomijają zarówno `model`, jak i `model_reasoning_effort`, dzięki czemu dziedziczą bieżące ustawienia sesji nadrzędnej.
