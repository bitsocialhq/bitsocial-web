---
title: BSO Resolver
description: Bitsocial TXT kayıtları üzerinden .bso alan adlarını genel anahtarlara çözümleyin.
sidebar_position: 1
---

# BSO Resolver

BSO Resolver, Bitsocial TXT kayıtlarını okuyarak `.bso` alan adlarını karşılık gelen genel anahtarlara çevirir. Kullanıcıya görünen bir `.bso` adının, eşler arası yığının anlayacağı anahtar malzemesine dönüşmesi gerektiğinde Bitsocial araçlarının kullandığı çözümleyici paketidir.

- **Kaynak kod ve güncel README:** [github.com/bitsocialnet/bso-resolver](https://github.com/bitsocialnet/bso-resolver#readme)
- **npm paketi:** [`@bitsocial/bso-resolver`](https://www.npmjs.com/package/@bitsocial/bso-resolver)

## Kurulum

```bash
npm install @bitsocial/bso-resolver
```

## Nereye Oturur

Bitsocial adları, topluluklar ve yazarlar için insan tarafından okunabilir giriş noktaları olacak biçimde tasarlanmıştır. Çözümleyici bu adlandırma katmanını uygulama kodundan ayrı tutar; böylece istemciler önce bir adın desteklenip desteklenmediğini sorabilir, ardından onu paketin çalışma ortamına özgü giriş noktası üzerinden çözümleyebilir.

Ham genel anahtarların yanı sıra `.bso` adlarını da kabul etmesi gereken Bitsocial uyumlu bir istemci, komut satırı aracı veya hizmet geliştiriyorsanız bunu kullanın.

## Güncel Paket Referansı

Bu sayfa bilinçli olarak bir genel bakıştır, yansıtılmış bir API referansı değil. Yapıcı seçenekleri, dönüş tipleri, önbellekleme davranışı, giriş noktaları, sağlayıcı örnekleri ve desteklenen kapatma semantiği için doğruluk kaynağı paketin README dosyasıdır:

- [BSO Resolver README](https://github.com/bitsocialnet/bso-resolver#readme)

Bir projeye kod kopyalarken yukarı akıştaki README'yi tercih edin, çünkü çözümleyicinin davranışı bu web sitesiyle değil, o paketle birlikte sürümlenir.
