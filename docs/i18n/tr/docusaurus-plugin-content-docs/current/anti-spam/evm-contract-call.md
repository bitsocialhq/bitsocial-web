---
title: EVM Contract Call Challenge
description: Bir EVM akıllı sözleşmesini çağırarak zincir üzerindeki koşulları doğrulayan anti-spam sınaması.
sidebar_position: 4
---

# EVM Contract Call Challenge

EVM Contract Call Challenge, bir yayına izin vermeden önce yazarın zincir üzerindeki durumunu doğrular. Topluluk sahipleri, gönderi paylaşılmadan önce bir cüzdanın veya çözümlenmiş bir kimliğin, asgari bir token bakiyesi tutmak gibi salt okunur bir akıllı sözleşme koşulunu karşılamasını zorunlu kılabilir.

- **Kaynak kodu ve güncel README:** [github.com/bitsocialnet/evm-contract-challenge](https://github.com/bitsocialnet/evm-contract-challenge#readme)
- **npm paketi:** [`@bitsocial/evm-contract-challenge`](https://www.npmjs.com/package/@bitsocial/evm-contract-challenge)

## Kurulum

```bash
npm install @bitsocial/evm-contract-challenge
```

## Nereye Oturur

Bu doğrulamayı, katılımın harici bir EVM sinyaline bağlı olması gereken topluluklarda kullanın: token sahipliği, NFT sahipliği, kişilik kanıtı puanları, yönetişim üyeliği veya sözleşmeden okunabilen başka bir koşul.

Bir kez yapılandırıldıktan sonra doğrulama, yazar açısından otomatiktir. Uygun cüzdan ya da kimlik kaynaklarını denetler, yapılandırılmış sözleşme metodunu çağırır ve dönen değeri topluluğun koşuluyla karşılaştırır.

## Güncel Paket Referansı

Bu sayfa bilinçli olarak bir genel bakıştır; birebir yansıtılmış bir yapılandırma referansı değildir. Doğrulama adları, Bitsocial CLI örnekleri, pkc-js kaydı, seçenek varsayılanları, ABI örnekleri, RPC davranışı ve desteklenen cüzdan kaynakları için kaynak, paketin README dosyasıdır:

- [EVM Contract Challenge README](https://github.com/bitsocialnet/evm-contract-challenge#readme)

Canlı bir topluluğu yapılandırırken yukarı akıştaki README'yi tercih edin; çünkü sözleşme seçenekleri ve örnekleri bu web sitesiyle değil, o paketle birlikte sürümlenir.

## Ne Zaman Kullanılır

EVM Contract Call Challenge şunlar için idealdir:

- Gönderi paylaşmayı token sahipleriyle sınırlayan **token kapılı topluluklar**.
- Belirli bir NFT'ye sahip olmanın zorunlu tutulduğu **NFT kapılı erişim**.
- Katılımın yönetişim tokeni sahipleriyle sınırlandığı **DAO yönetişim alanları**.

Zincir üzerindeki kimliğe dayanmayan topluluklar için bunun yerine [Spam Blocker](./spam-blocker.md) veya [Voucher Challenge](./voucher-challenge.md) seçeneklerini değerlendirin.
