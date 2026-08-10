# Politica de limbă implicită i18n

Pentru vizitatorii anonimi, limba se stabilește în această ordine:

1. Parametrul de interogare `?lang=`
2. Opțiunea salvată din selectorul de limbă (`localStorage` în browser, oglindită în cookie-ul `i18nextLng` pentru SSR)
3. Limba browserului/dispozitivului, dacă se numără printre localizările pe care le acceptăm
4. Revenire la `en`

Țara sau regiunea nu este folosită pentru a suprascrie o limbă acceptată a browserului/dispozitivului. De exemplu, `de-DE` duce la germană, `nl-NL` la neerlandeză, iar `pt-PT` la portugheză, pentru că aceste familii de localizări sunt acceptate.

Dacă nicio limbă a browserului/dispozitivului nu corespunde unei localizări acceptate, vizitatorii primesc varianta implicită în engleză.
