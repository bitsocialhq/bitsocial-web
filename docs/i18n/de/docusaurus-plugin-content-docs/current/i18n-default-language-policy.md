# i18n-Richtlinie für die Standardsprache

Anonyme Besucher ermitteln die Sprache in dieser Reihenfolge:

1. Abfrageparameter `?lang=`
2. Gespeicherte Auswahl im Sprachumschalter (`localStorage` im Browser, für SSR in das Cookie `i18nextLng` gespiegelt)
3. Browser- oder Gerätesprache, sofern sie zu den unterstützten Locales gehört
4. Rückfall auf `en`

Land oder Region übersteuern eine unterstützte Browser- oder Gerätesprache nicht. So wird `de-DE` zu Deutsch aufgelöst, `nl-NL` zu Niederländisch und `pt-PT` zu Portugiesisch, weil diese Locale-Familien unterstützt werden.

Passt keine Browser- oder Gerätesprache zu einer unterstützten Locale, erhalten Besucher die englische Standardversion.
