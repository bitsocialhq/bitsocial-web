# i18n Varsayılan Dil Politikası

Anonim ziyaretçilerde dil şu sırayla belirlenir:

1. `?lang=` sorgu parametresi
2. Kaydedilmiş dil seçici tercihi (tarayıcıda `localStorage`, SSR için `i18nextLng` çerezine yansıtılır)
3. Desteklenen yerel ayarlarımızdan biriyse tarayıcı/cihaz dili
4. `en` diline geri dönüş

Desteklenen bir tarayıcı/cihaz dilini geçersiz kılmak için ülke veya bölge bilgisi kullanılmaz. Örneğin `de-DE` Almancaya, `nl-NL` Felemenkçeye ve `pt-PT` Portekizceye çözümlenir, çünkü bu yerel ayar aileleri desteklenmektedir.

Tarayıcı/cihaz dili desteklenen hiçbir yerel ayarla eşleşmezse ziyaretçilere İngilizce varsayılanı sunulur.
