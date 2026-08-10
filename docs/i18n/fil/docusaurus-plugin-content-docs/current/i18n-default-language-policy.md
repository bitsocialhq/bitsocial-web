# Patakaran sa Default na Wika ng i18n

Ganito ang pagkakasunod-sunod ng pagtukoy ng wika para sa mga anonymous na bisita:

1. `?lang=` query param
2. Naka-save na pinili sa language selector (`localStorage` sa browser, isinasalamin sa `i18nextLng` cookie para sa SSR)
3. Wika ng browser o device kapag isa ito sa mga sinusuportahan naming locale
4. Pagbalik sa `en`

Hindi ginagamit ang bansa o rehiyon para pawalang-bisa ang isang sinusuportahang wika ng browser o device. Halimbawa, ang `de-DE` ay nagreresolba tungo sa German, ang `nl-NL` tungo sa Dutch, at ang `pt-PT` tungo sa Portuguese dahil sinusuportahan ang mga pamilya ng locale na iyon.

Kung walang wika ng browser o device na tumutugma sa isang sinusuportahang locale, ang default na Ingles ang matatanggap ng mga bisita.
