# Política d'idioma per defecte i18n

Els visitants anònims resolen l'idioma en aquest ordre:

1. Paràmetre de consulta `?lang=`
2. Elecció desada al selector d'idioma (`localStorage` al navegador, replicada a la galeta `i18nextLng` per a l'SSR)
3. Idioma del navegador o del dispositiu quan és una de les configuracions regionals que admetem
4. Recórrer a `en`

El país o la regió no s'utilitzen per anul·lar un idioma del navegador o del dispositiu que sigui compatible. Per exemple, `de-DE` es resol com a alemany, `nl-NL` com a neerlandès i `pt-PT` com a portuguès, perquè aquestes famílies de configuracions regionals són compatibles.

Si cap idioma del navegador o del dispositiu no coincideix amb una configuració regional compatible, els visitants reben l'anglès per defecte.
