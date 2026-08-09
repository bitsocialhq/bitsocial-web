# Política de idioma padrão i18n

Visitantes anônimos resolvem o idioma nesta ordem:

1. Parâmetro de consulta `?lang=`
2. Escolha salva no seletor de idioma (`localStorage` no navegador, espelhada no cookie `i18nextLng` para SSR)
3. Idioma do navegador/dispositivo quando for uma das localidades suportadas
4. Recorrer a `en`

O país ou a região não são usados para sobrepor um idioma de navegador/dispositivo suportado. Por exemplo, `de-DE` resolve para alemão, `nl-NL` resolve para holandês e `pt-PT` resolve para português, porque essas famílias de localidade são suportadas.

Se nenhum idioma do navegador/dispositivo corresponder a uma localidade suportada, os visitantes recebem o padrão em inglês.
