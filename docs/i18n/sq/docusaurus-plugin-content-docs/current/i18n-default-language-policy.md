# Politika e gjuhës së parazgjedhur për i18n

Vizitorët anonimë e përcaktojnë gjuhën sipas kësaj radhe:

1. Parametri i query-t `?lang=`
2. Zgjedhja e ruajtur e përzgjedhësit të gjuhës (`localStorage` në shfletues, e pasqyruar te cookie-ja `i18nextLng` për SSR)
3. Gjuha e shfletuesit ose e pajisjes, kur ajo është një nga lokalet që mbështeten
4. Rikthimi te `en`

Shteti ose rajoni nuk përdoret për të anashkaluar një gjuhë të mbështetur të shfletuesit ose të pajisjes. Për shembull, `de-DE` çon te gjermanishtja, `nl-NL` te holandishtja dhe `pt-PT` te portugalishtja, sepse këto familje lokalesh mbështeten.

Nëse asnjë gjuhë e shfletuesit ose e pajisjes nuk përputhet me një lokale të mbështetur, vizitorët marrin parazgjedhjen në anglisht.
