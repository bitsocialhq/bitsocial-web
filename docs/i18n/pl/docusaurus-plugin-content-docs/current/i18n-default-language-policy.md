# Domyślna polityka językowa i18n

Anonimowym odwiedzającym język ustalany jest w następującej kolejności:

1. Parametr zapytania `?lang=`
2. Zapisany wybór z selektora języka (`localStorage` w przeglądarce, odwzorowany w ciasteczku `i18nextLng` na potrzeby SSR)
3. Język przeglądarki lub urządzenia, jeśli należy do obsługiwanych przez nas lokalizacji
4. Powrót do `en`

Kraj ani region nie służą do nadpisywania obsługiwanego języka przeglądarki lub urządzenia. Na przykład `de-DE` prowadzi do niemieckiego, `nl-NL` do niderlandzkiego, a `pt-PT` do portugalskiego, ponieważ te rodziny lokalizacji są obsługiwane.

Jeśli żaden język przeglądarki ani urządzenia nie odpowiada obsługiwanej lokalizacji, odwiedzający otrzymują domyślną wersję angielską.
