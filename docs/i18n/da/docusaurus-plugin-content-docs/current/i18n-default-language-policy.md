# Standardsprogpolitik for i18n

For anonyme besøgende bestemmes sproget i denne rækkefølge:

1. Forespørgselsparameteren `?lang=`
2. Gemt valg i sprogvælgeren (`localStorage` i browseren, spejlet til cookien `i18nextLng` af hensyn til SSR)
3. Browserens eller enhedens sprog, når det er et af vores understøttede sprog
4. Fald tilbage til `en`

Land eller region bruges ikke til at tilsidesætte et understøttet browser- eller enhedssprog. For eksempel giver `de-DE` tysk, `nl-NL` giver hollandsk, og `pt-PT` giver portugisisk, fordi disse sprogfamilier er understøttet.

Hvis intet browser- eller enhedssprog matcher et understøttet sprog, får den besøgende den engelske standard.
