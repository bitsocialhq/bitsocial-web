---
title: EVM コントラクト呼び出しチャレンジ
description: EVM スマートコントラクトを呼び出してオンチェーンの条件を検証するスパム対策チャレンジ。
sidebar_position: 4
---

# EVM コントラクト呼び出しチャレンジ

EVM Contract Call Challenge は、投稿を許可する前に作成者のオンチェーンの状態を検証します。コミュニティのオーナーは、投稿の条件として、ウォレットまたは解決済みのアイデンティティが読み取り専用のスマートコントラクトの条件、たとえば最低限のトークン残高の保有などを満たすことを求められます。

- **ソースコードと最新の README:** [github.com/bitsocialnet/evm-contract-challenge](https://github.com/bitsocialnet/evm-contract-challenge#readme)
- **npm パッケージ:** [`@bitsocial/evm-contract-challenge`](https://www.npmjs.com/package/@bitsocial/evm-contract-challenge)

## インストール

```bash
npm install @bitsocial/evm-contract-challenge
```

## どんな場面に向くか

このチャレンジは、参加の可否を外部の EVM 上のシグナルに委ねたいコミュニティで使ってください。トークンの保有、NFT の保有、人格証明のスコア、ガバナンスへの参加資格、あるいはコントラクトから読み取れるその他の条件が該当します。

いったん設定してしまえば、作成者から見たこのチャレンジは自動的に進みます。対象となるウォレットやアイデンティティの取得元を確認し、設定されたコントラクトのメソッドを呼び出し、返された値をコミュニティの条件と照合します。

## 最新のパッケージリファレンス

このページは意図的に概要にとどめてあり、設定リファレンスを写したものではありません。チャレンジ名、Bitsocial CLI の例、pkc-js への登録、オプションの既定値、ABI の例、RPC の挙動、対応するウォレットの取得元については、パッケージの README が信頼できる情報源です。

- [EVM Contract Challenge の README](https://github.com/bitsocialnet/evm-contract-challenge#readme)

実運用中のコミュニティを設定するときは、上流の README を優先してください。コントラクトのオプションや例は、このウェブサイトではなくパッケージ側のバージョンに紐づいているためです。

## いつ使うか

EVM Contract Call Challenge が適しているのは次のような場合です。

- **トークンでゲートするコミュニティ** — 投稿をトークン保有者に限定する場合。
- **NFT によるアクセス制御** — 特定の NFT の保有を必須とする場合。
- **DAO のガバナンス空間** — 参加をガバナンストークンの保有者に限定する場合。

オンチェーンのアイデンティティに依存しないコミュニティでは、代わりに [スパムブロッカー](./spam-blocker.md) や [バウチャーチャレンジ](./voucher-challenge.md) を検討してください。
