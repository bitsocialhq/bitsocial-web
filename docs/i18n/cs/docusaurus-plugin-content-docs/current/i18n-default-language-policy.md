# Zásady výchozího jazyka i18n

U anonymních návštěvníků se jazyk určuje v tomto pořadí:

1. Parametr dotazu `?lang=`
2. Uložená volba z přepínače jazyků (`localStorage` v prohlížeči, zrcadlená do cookie `i18nextLng` kvůli SSR)
3. Jazyk prohlížeče nebo zařízení, pokud patří mezi podporované lokalizace
4. Jinak se použije `en`

Země ani region se nepoužívají k přepsání podporovaného jazyka prohlížeče nebo zařízení. Například `de-DE` se vyhodnotí jako němčina, `nl-NL` jako nizozemština a `pt-PT` jako portugalština, protože tyto rodiny lokalizací jsou podporované.

Pokud žádný jazyk prohlížeče nebo zařízení neodpovídá podporované lokalizaci, dostanou návštěvníci výchozí angličtinu.
