# i18n-oletuskielikäytäntö

Anonyymeille vierailijoille kieli valitaan tässä järjestyksessä:

1. `?lang=`-kyselyparametri
2. Kielivalitsimeen tallennettu valinta (`localStorage` selaimessa, peilattuna `i18nextLng`-evästeeseen SSR:ää varten)
3. Selaimen tai laitteen kieli, kun se on jokin tukemistamme kielistä
4. Muussa tapauksessa käytetään kieltä `en`

Maata tai aluetta ei käytetä ohittamaan tuettua selaimen tai laitteen kieltä. Esimerkiksi `de-DE` tuottaa saksan, `nl-NL` hollannin ja `pt-PT` portugalin, koska nämä kieliperheet ovat tuettuja.

Jos mikään selaimen tai laitteen kieli ei vastaa tuettua kieltä, vierailija saa englanninkielisen oletuksen.
