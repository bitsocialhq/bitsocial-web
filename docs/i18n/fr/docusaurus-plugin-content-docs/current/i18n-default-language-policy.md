# Politique de langue par défaut i18n

Pour les visiteurs anonymes, la langue est déterminée dans cet ordre :

1. Paramètre d'URL `?lang=`
2. Choix enregistré dans le sélecteur de langue (`localStorage` dans le navigateur, recopié dans le cookie `i18nextLng` pour le SSR)
3. Langue du navigateur ou de l'appareil, lorsqu'elle fait partie des locales prises en charge
4. Repli sur `en`

Le pays ou la région ne sert jamais à supplanter une langue de navigateur ou d'appareil déjà prise en charge. Par exemple, `de-DE` donne l'allemand, `nl-NL` le néerlandais et `pt-PT` le portugais, car ces familles de locales sont prises en charge.

Si aucune langue du navigateur ou de l'appareil ne correspond à une locale prise en charge, les visiteurs reçoivent l'anglais par défaut.
