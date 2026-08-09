---
title: React Hooks
description: Bitsocial protokolü üzerinde merkeziyetsiz sosyal uygulamalar geliştirmek için React hook kütüphanesi.
sidebar_position: 1
---

# React Hooks

`bitsocial-react-hooks` paketi, Bitsocial protokolüyle etkileşim kurmak için tanıdık bir React hook API'si sunar. Akışları, yorumları ve yazar profillerini getirme, hesapları yönetme, içerik yayımlama ve topluluklara abone olma işlerini üstlenir — hepsini merkezi bir sunucuya bağlı kalmadan.

Bu kütüphane, [5chan](/apps/5chan/) ve diğer Bitsocial istemci uygulamalarının kullandığı birincil arayüzdür.

:::note
`bitsocial-react-hooks` şu anda npm'de yayımlanmıyor; doğrudan GitHub'dan kullanılıyor.
:::

## Kurulum

Paket henüz npm'de olmadığından, belirli bir commit hash'ine sabitleyerek doğrudan GitHub'dan kurun:

```bash
yarn add https://github.com/bitsocialnet/bitsocial-react-hooks.git#<commit-hash>
```

`<commit-hash>` yerine hedeflemek istediğiniz commit'i yazın.

## API'ye Genel Bakış

Hook'lar işlevsel kategorilere ayrılmıştır. Aşağıda her kategoride en sık kullanılan hook'ların özeti yer alır. İmzaların, parametrelerin ve dönüş tiplerinin tamamı için [GitHub'daki tam API referansına](https://github.com/bitsocialnet/bitsocial-react-hooks) bakın.

### Hesaplar

Yerel kullanıcı hesaplarını, kimliği ve ayarları yönetir.

- `useAccount(accountName?)` -- etkin (ya da adı verilen) hesap nesnesini döndürür
- `useAccounts()` -- yerelde saklanan tüm hesapları döndürür
- `useAccountComments(options?)` -- etkin hesabın yayımladığı yorumları döndürür

### Yorumlar

Tek tek yorumları ve konu zincirlerini getirir, bunlarla etkileşim kurar.

- `useComment(commentCid?)` -- CID'sine göre tek bir yorum getirir
- `useComments(commentCids?)` -- birden çok yorumu toplu olarak getirir
- `useEditedComment(comment?)` -- bir yorumun en son düzenlenmiş sürümünü döndürür

### Topluluklar

Topluluk meta verilerini ve ayarlarını alır.

- Tekil topluluk sorgulama hook'u -- adrese göre bir topluluk getirir
- Çoklu topluluk sorgulama hook'u -- birden çok topluluğu getirir
- Topluluk istatistikleri hook'u -- abone ve gönderi sayılarını döndürür

### Yazarlar

Yazar profillerini ve meta verilerini sorgular.

- `useAuthor(authorAddress?)` -- bir yazar profili getirir
- `useAuthorComments(options?)` -- belirli bir yazarın yorumlarını döndürür
- `useResolvedAuthorAddress(authorAddress?)` -- okunabilir bir adresi (örneğin ENS) protokol adresine çözümler

### Akışlar

İçerik akışlarına abone olur ve bunları sayfalar hâlinde getirir.

- `useFeed(options?)` -- bir ya da daha fazla topluluktan gelen gönderilerin sayfalanmış akışını döndürür
- `useBufferedFeeds(feedOptions?)` -- daha hızlı görüntüleme için birden çok akışı önceden arabelleğe alır
- `useAuthorFeed(authorAddress?)` -- belirli bir yazarın gönderilerinden oluşan akışı döndürür

### Eylemler

İçerik yayımlar ve yazma işlemlerini gerçekleştirir.

- `usePublishComment(options?)` -- yeni bir yorum ya da yanıt yayımlar
- `usePublishVote(options?)` -- olumlu veya olumsuz oy verir
- `useSubscribe(options?)` -- bir topluluğa abone olur ya da aboneliği bırakır

### Durumlar ve RPC

Bağlantı durumunu izler ve uzaktaki bir Bitsocial arka plan hizmetiyle etkileşim kurar.

- `useClientsStates(options?)` -- IPFS/pubsub istemcilerinin bağlantı durumunu döndürür
- RPC ayarları hook'u -- geçerli RPC arka plan hizmeti yapılandırmasını döndürür

## Geliştirme

Hook kütüphanesi üzerinde yerelde çalışmak için:

**Ön koşullar:** Node.js, etkinleştirilmiş Corepack, Yarn 4

```bash
git clone https://github.com/bitsocialnet/bitsocial-react-hooks.git
cd bitsocial-react-hooks
corepack enable
yarn install
```

Test ve derleme komutları için deponun README dosyasına bakın.

## Bağlantılar

- **GitHub:** [bitsocialnet/bitsocial-react-hooks](https://github.com/bitsocialnet/bitsocial-react-hooks)
- **Lisans:** GPL-2.0-only
