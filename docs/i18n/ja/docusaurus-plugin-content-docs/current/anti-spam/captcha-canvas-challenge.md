---
title: Captcha Canvas チャレンジ
description: Bitsocial コミュニティ向けの、単体で動く画像ベースのキャプチャチャレンジ。
sidebar_position: 2
---

# Captcha Canvas チャレンジ

Captcha Canvas Challenge は、Bitsocial コミュニティ向けの単体で動く画像キャプチャのパッケージです。ランダムな文字列をキャンバスに描画し、投稿が受け入れられる前に、コミュニティが作成者へ画像の解読を求められるようにします。

- **ソースコードと最新の README:** [github.com/bitsocialnet/captcha-canvas-challenge](https://github.com/bitsocialnet/captcha-canvas-challenge#readme)
- **npm パッケージ:** [`@bitsocial/captcha-canvas-challenge`](https://www.npmjs.com/package/@bitsocial/captcha-canvas-challenge)

## インストール

```bash
npm install @bitsocial/captcha-canvas-challenge
```

## どんな場面に向くか

キャプチャチャレンジは、重要度の低いスパム対策として、簡単で対話的な関門をコミュニティが求める場合に役立ちます。このパッケージは意図的に範囲を絞っており、提供するのはチャレンジの実装だけです。いつ、どのように提示するかは、コミュニティまたは Bitsocial ノードが決めます。

より強い保護が必要な場合は、キャプチャだけでスパム対策が完結すると考えず、より広いモデレーションやリスクスコアリングの仕組みと組み合わせてください。

## 最新のパッケージリファレンス

このページは意図的に概要にとどめてあり、セットアップ手順を写したものではありません。現行のチャレンジ名、登録の例、CLI の例、対応オプション、要件、セキュリティ上の注意については、パッケージの README が信頼できる情報源です。

- [Captcha Canvas Challenge の README](https://github.com/bitsocialnet/captcha-canvas-challenge#readme)

実運用中のコミュニティを設定するときは、上流の README を優先してください。パッケージのオプションやインストールの流れは、このウェブサイトではなくパッケージ側のバージョンに紐づいているためです。
