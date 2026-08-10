# i18n-standaardtaalbeleid

Voor anonieme bezoekers wordt de taal in deze volgorde bepaald:

1. `?lang=`-queryparameter
2. Opgeslagen keuze uit de taalkiezer (`localStorage` in de browser, gespiegeld naar de `i18nextLng`-cookie voor SSR)
3. Browser-/apparaattaal wanneer die een van onze ondersteunde locales is
4. Terugvallen op `en`

Land of regio wordt niet gebruikt om een ondersteunde browser-/apparaattaal te overschrijven. Zo komt `de-DE` uit op Duits, `nl-NL` op Nederlands en `pt-PT` op Portugees, omdat die taalfamilies worden ondersteund.

Komt geen enkele browser-/apparaattaal overeen met een ondersteunde locale, dan krijgt de bezoeker de Engelse standaardversie.
