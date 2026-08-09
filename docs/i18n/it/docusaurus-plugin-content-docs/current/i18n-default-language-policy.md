# Politica sulla lingua predefinita per i18n

Per i visitatori anonimi la lingua viene determinata in quest'ordine:

1. Parametro query `?lang=`
2. Scelta salvata nel selettore della lingua (`localStorage` nel browser, replicata nel cookie `i18nextLng` per l'SSR)
3. Lingua del browser o del dispositivo, quando rientra tra quelle che supportiamo
4. Ripiego su `en`

Il paese o la regione non vengono usati per scavalcare una lingua del browser o del dispositivo già supportata. Ad esempio `de-DE` porta al tedesco, `nl-NL` all'olandese e `pt-PT` al portoghese, perché quelle famiglie linguistiche sono supportate.

Se nessuna lingua del browser o del dispositivo corrisponde a una lingua supportata, il visitatore riceve l'inglese come impostazione predefinita.
