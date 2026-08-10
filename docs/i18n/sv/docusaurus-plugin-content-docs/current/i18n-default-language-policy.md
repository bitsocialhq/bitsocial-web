# i18n-policy för standardspråk

För anonyma besökare avgörs språket i följande ordning:

1. Frågeparametern `?lang=`
2. Sparat val i språkväljaren (`localStorage` i webbläsaren, speglat till kakan `i18nextLng` för SSR)
3. Webbläsarens eller enhetens språk när det är ett av de språk vi stöder
4. Fall tillbaka på `en`

Land eller region används inte för att åsidosätta ett webbläsar- eller enhetsspråk som stöds. Till exempel ger `de-DE` tyska, `nl-NL` ger nederländska och `pt-PT` ger portugisiska, eftersom de språkfamiljerna stöds.

Om inget webbläsar- eller enhetsspråk matchar ett språk som stöds får besökaren den engelska standardversionen.
