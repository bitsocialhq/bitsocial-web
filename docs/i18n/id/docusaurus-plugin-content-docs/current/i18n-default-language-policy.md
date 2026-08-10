# Kebijakan Bahasa Default i18n

Pengunjung anonim mendapatkan bahasa dengan urutan berikut:

1. Parameter kueri `?lang=`
2. Pilihan pemilih bahasa yang tersimpan (`localStorage` di browser, dicerminkan ke cookie `i18nextLng` untuk SSR)
3. Bahasa browser/perangkat jika termasuk salah satu locale yang kami dukung
4. Kembali ke `en`

Negara atau wilayah tidak dipakai untuk menimpa bahasa browser/perangkat yang sudah didukung. Sebagai contoh, `de-DE` menghasilkan bahasa Jerman, `nl-NL` menghasilkan bahasa Belanda, dan `pt-PT` menghasilkan bahasa Portugis karena keluarga locale tersebut termasuk yang didukung.

Jika tidak ada bahasa browser/perangkat yang cocok dengan locale yang didukung, pengunjung akan menerima bahasa Inggris sebagai default.
