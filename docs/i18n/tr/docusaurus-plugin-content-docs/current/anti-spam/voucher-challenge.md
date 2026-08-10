---
title: Voucher Challenge
description: Yayımlamayı, topluluk sahiplerinin dağıttığı benzersiz kupon kodlarının arkasına alan anti-spam sınaması.
sidebar_position: 3
---

# Voucher Challenge

Voucher Challenge, içerik yayımlamayı topluluk sahibinin dağıttığı benzersiz kupon kodlarının arkasına alır. Otomatik puanlamaya dayanmak yerine güveni, tanınan kişilerin kodları sahibin denetlediği bir kanal üzerinden aldığı manuel bir davet akışına taşır.

- **Kaynak kodu ve güncel README:** [github.com/bitsocialnet/voucher-challenge](https://github.com/bitsocialnet/voucher-challenge#readme)
- **npm paketi:** [`@bitsocial/voucher-challenge`](https://www.npmjs.com/package/@bitsocial/voucher-challenge)

## Kurulum

```bash
npm install @bitsocial/voucher-challenge
```

## Nasıl Çalışır

1. Bir topluluk sahibi, bir veya daha fazla benzersiz kupon kodu üretir.
2. Sahip, bu kodları seçtiği bir kanal üzerinden (doğrudan mesaj, e-posta, yüz yüze vb.) güvendiği yazarlara dağıtır.
3. Bir yazar yayımlamaya çalıştığında, doğrulama sistemi ondan bir kupon kodu ister.
4. Kod doğrulanır -- gerçekse ve daha önce kullanılmamışsa yayın kabul edilir.

Her kupon kodu, kullanıldığı anda belirli bir yazara bağlanır; böylece başkalarınca yeniden kullanılması engellenir.

## Güncel Paket Referansı

Bu sayfa bilinçli olarak bir genel bakıştır; birebir yansıtılmış bir kurulum kılavuzu değildir. Güncel doğrulama adları, Bitsocial CLI örnekleri, pkc-js kaydı, desteklenen seçenekler ve kod kullanım davranışı için kaynak, paketin README dosyasıdır:

- [Voucher Challenge README](https://github.com/bitsocialnet/voucher-challenge#readme)

Canlı bir topluluğu yapılandırırken yukarı akıştaki README'yi tercih edin; çünkü kupon seçenekleri ve kurulum akışları bu web sitesiyle değil, o paketle birlikte sürümlenir.

## Ne Zaman Kullanılır

Voucher Challenge en çok şunlara uygundur:

- Üyeliğin bilinçli olarak sınırlandırıldığı **yalnızca davetle girilen topluluklar**.
- Sahibinin her katılımcıyı bizzat elediği **özenle derlenmiş alanlar**.
- Otomatik spam puanlamasının gereksiz ya da istenmeyen olduğu **yüksek güven gerektiren ortamlar**.

Manuel kod dağıtımı gerektirdiği için büyük ve açık topluluklara ölçeklenmez. Bu senaryolarda bunun yerine [Spam Blocker](./spam-blocker.md) veya [EVM Contract Call Challenge](./evm-contract-call.md) seçeneklerini değerlendirin.
