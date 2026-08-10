# Standardspråkpolicy for i18n

For anonyme besøkende avgjøres språket i denne rekkefølgen:

1. Spørringsparameteren `?lang=`
2. Lagret valg i språkvelgeren (`localStorage` i nettleseren, speilet til informasjonskapselen `i18nextLng` for SSR)
3. Nettleser- eller enhetsspråk når det er en av lokalitetene vi støtter
4. Fall tilbake til `en`

Land eller region brukes ikke til å overstyre et støttet nettleser- eller enhetsspråk. For eksempel gir `de-DE` tysk, `nl-NL` gir nederlandsk og `pt-PT` gir portugisisk, fordi de lokalitetsfamiliene støttes.

Hvis ingen nettleser- eller enhetsspråk samsvarer med en støttet lokalitet, får besøkende den engelske standarden.
