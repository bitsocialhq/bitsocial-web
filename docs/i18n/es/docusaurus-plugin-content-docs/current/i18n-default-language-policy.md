# Política de idioma predeterminado de i18n

Los visitantes anónimos resuelven el idioma en este orden:

1. Parámetro de consulta `?lang=`
2. Elección guardada en el selector de idioma (`localStorage` en el navegador, replicada en la cookie `i18nextLng` para el SSR)
3. Idioma del navegador o del dispositivo cuando es una de las configuraciones regionales admitidas
4. Recurrir a `en`

El país o la región no se usan para anular un idioma del navegador o del dispositivo que ya está admitido. Por ejemplo, `de-DE` se resuelve como alemán, `nl-NL` como neerlandés y `pt-PT` como portugués, porque esas familias de configuraciones regionales están admitidas.

Si ningún idioma del navegador o del dispositivo coincide con una configuración regional admitida, los visitantes reciben el inglés predeterminado.
