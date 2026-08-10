---
title: Telegram ボット
description: Bitsocial のコミュニティ一覧を監視し、投稿を Telegram のチャンネルへ転送するフィードボット。
sidebar_position: 4
---

# Telegram ボット

Bitsocial の Telegram ボットは、Bitsocial ネットワーク上にあるクライアントのコミュニティ一覧を監視し、新しい投稿を Telegram のチャンネルへ自動で転送します。転送される各メッセージには、5chan と Seedit にある元の投稿へ戻れるインラインボタンが付きます。

- **GitHub**: [bitsocialnet/bitsocial-telegram-bots](https://github.com/bitsocialnet/bitsocial-telegram-bots)

## 利用できるボット

| ボット          | 状態   | 説明                                                                       |
| --------------- | ------ | -------------------------------------------------------------------------- |
| **5chan Feed**  | 稼働中 | 5chan のすべてのディレクトリを監視し、新しい投稿を Telegram へ転送します。 |
| **Seedit Feed** | 予定   | Seedit のコミュニティ向けに同じ機能を提供する予定です。                    |

## セットアップ

### 前提条件

- Node.js
- Yarn
- Telegram のボットトークン（[BotFather](https://t.me/BotFather) で作成します）

### インストール

リポジトリをクローンして依存関係をインストールします。

```bash
git clone https://github.com/bitsocialnet/bitsocial-telegram-bots.git
cd bitsocial-telegram-bots
yarn install
```

### 設定

プロジェクトのルートに、ボットトークンを記述した `.env` ファイルを作成します。

```env
BOT_TOKEN=your_telegram_bot_token
```

### 実行

環境を設定したらボットを起動します。

```bash
yarn start
```

## 投稿の形式

ボットが投稿を Telegram へ転送するとき、2 つのインラインボタンが付きます。

- **View on 5chan** -- 5chan のウェブクライアントでその投稿を開きます。
- **View on Seedit** -- Seedit のウェブクライアントでその投稿を開きます。

これにより、Telegram の購読者は自分の好きなクライアントで、スレッド全体の議論へ直接移動できます。
