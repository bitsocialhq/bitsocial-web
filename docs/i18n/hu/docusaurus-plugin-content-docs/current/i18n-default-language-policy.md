# Alapértelmezett i18n nyelvi szabályzat

A névtelen látogatóknál a nyelv meghatározása ebben a sorrendben történik:

1. `?lang=` lekérdezési paraméter
2. A nyelvválasztóban elmentett választás (a böngészőben a `localStorage`, SSR esetén az `i18nextLng` cookie-ba tükrözve)
3. A böngésző vagy az eszköz nyelve, ha az a támogatott nyelvi beállítások egyike
4. Tartalékként az `en`

Az ország vagy a régió nem írja felül a támogatott böngésző- vagy eszköznyelvet. Például a `de-DE` németre, az `nl-NL` hollandra, a `pt-PT` pedig portugálra oldódik fel, mert ezeket a nyelvcsaládokat támogatjuk.

Ha a böngésző vagy az eszköz nyelve egyik támogatott nyelvi beállításhoz sem illeszkedik, a látogatók az angol alapértelmezést kapják.
