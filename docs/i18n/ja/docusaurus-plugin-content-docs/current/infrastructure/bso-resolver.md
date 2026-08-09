---
title: BSO Resolver
description: Bitsocial の TXT レコードを通じて .bso ドメイン名を公開鍵へ解決します。
sidebar_position: 1
---

# BSO Resolver

BSO Resolver は、Bitsocial の TXT レコードを読み取ることで `.bso` ドメイン名を対応する公開鍵へ変換します。利用者に見える `.bso` の名前を、ピアツーピアのスタックが理解できる鍵素材に変える必要があるとき、Bitsocial のツール群が使うリゾルバーパッケージです。

- **ソースコードと最新の README:** [github.com/bitsocialnet/bso-resolver](https://github.com/bitsocialnet/bso-resolver#readme)
- **npm パッケージ:** [`@bitsocial/bso-resolver`](https://www.npmjs.com/package/@bitsocial/bso-resolver)

## インストール

```bash
npm install @bitsocial/bso-resolver
```

## どこに位置づけられるか

Bitsocial の名前は、コミュニティや書き手にたどり着くための、人間が読める入口として設計されています。リゾルバーはこの命名の層をアプリケーションのコードから切り離しておくため、クライアントはまずその名前に対応しているかを問い合わせ、そのうえでパッケージのランタイム別エントリーポイントを通して解決できます。

生の公開鍵だけでなく `.bso` の名前も受け付ける必要がある、Bitsocial 対応のクライアント、コマンドラインツール、あるいはサービスを組み込むときに使ってください。

## 最新のパッケージリファレンス

このページは意図的に概要にとどめてあり、API リファレンスを写したものではありません。コンストラクターのオプション、戻り値の型、キャッシュの挙動、エントリーポイント、プロバイダーの例、対応しているシャットダウンの扱いについては、パッケージの README が正典です。

- [BSO Resolver の README](https://github.com/bitsocialnet/bso-resolver#readme)

コードをプロジェクトに写すときは上流の README を優先してください。リゾルバーの挙動は、このウェブサイトではなくそのパッケージとともにバージョン管理されているからです。
