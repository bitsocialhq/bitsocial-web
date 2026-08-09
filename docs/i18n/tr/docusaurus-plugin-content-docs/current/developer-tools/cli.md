---
title: Bitsocial CLI
description: Bir Bitsocial düğümü çalıştırmak, topluluk oluşturmak ve protokol işlemlerini yönetmek için komut satırı arayüzü.
sidebar_position: 2
---

# Bitsocial CLI

`bitsocial-cli`, Bitsocial protokol arka ucuyla etkileşim kurmaya yarayan bir komut satırı aracıdır. Yerel bir P2P arka plan hizmeti çalıştırmanıza, topluluk oluşturup yapılandırmanıza ve içerik yayımlamanıza olanak tanır — hepsi terminalden.

Paylaşılan Bitsocial protokol istemci katmanı üzerine kuruludur ve topluluk oluşturma ile düğüm yönetimi için [5chan](/apps/5chan/) ve [Seedit](/apps/seedit/) tarafından kullanılır.

## Kurulum

Windows, macOS ve Linux için önceden derlenmiş ikili dosyalar mevcuttur. Platformunuza uygun en son sürümü GitHub'dan indirin:

**[GitHub Releases'ten indirin](https://github.com/bitsocialnet/bitsocial-cli/releases)**

İndirdikten sonra ikili dosyayı çalıştırılabilir yapın (macOS/Linux):

```bash
chmod +x bitsocial
```

## Arka Plan Hizmetini Çalıştırma

CLI'nin en yaygın kullanımı bir Bitsocial düğümü çalıştırmaktır. Arka plan hizmeti P2P ağ katmanını başlatır ve istemcilerin bağlanabileceği yerel bir API sunar.

```bash
bitsocial daemon
```

İlk başlatmada arka plan hizmeti, düğümünüzü, topluluklarınızı ve ayarlarınızı yönetmeye yarayan tarayıcı tabanlı grafik arayüz olan **WebUI**'ye giden bağlantıları çıktı olarak verir. Terminal komutları yerine grafik arayüz kullanmayı tercih ediyorsanız bu işinize yarar.

## Temel İşlemler

| İşlem                        | Açıklama                                                   |
| ---------------------------- | ---------------------------------------------------------- |
| Arka plan hizmetini başlatma | Bitsocial P2P düğümünü başlatır                            |
| Topluluk oluşturma           | Yeni bir topluluk oluşturur                                |
| Topluluğu düzenleme          | Topluluk ayarlarını günceller (başlık, açıklama, kurallar) |
| Yerel toplulukları listeleme | Bu düğümde barındırılan toplulukları listeler              |
| Topluluğu başlatma           | Belirli bir topluluğu sunmaya başlar                       |
| Topluluğu durdurma           | Belirli bir topluluğu sunmayı durdurur                     |

Kurulu sürümünüzün sunduğu güncel komut adlarını ve bayrakları görmek için CLI'yi `--help` ile çalıştırın:

```bash
bitsocial --help
bitsocial daemon --help
```

## Tipik İş Akışı

Yeni bir topluluğu barındırmak için sık kullanılan kurulum akışı:

```bash
# 1. Start the daemon
bitsocial daemon

# 2. In another terminal, inspect the available community-management commands
bitsocial --help
```

Buradan sonra, bir topluluğu oluşturmak, yapılandırmak ve sunmaya başlamak için kurulu sürümün topluluk yönetimi komutlarını kullanın. Topluluk bir kez başlatıldığında Bitsocial ağında yayına girer ve uyumlu istemcilerden erişilebilir olur.

## Bağlantılar

- **GitHub:** [bitsocialnet/bitsocial-cli](https://github.com/bitsocialnet/bitsocial-cli)
