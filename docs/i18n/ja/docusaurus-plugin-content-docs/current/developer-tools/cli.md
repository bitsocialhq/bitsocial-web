---
title: Bitsocial CLI
description: Bitsocial ノードの実行、コミュニティの作成、プロトコル操作の管理を行うコマンドラインインターフェイス。
sidebar_position: 2
---

# Bitsocial CLI

`bitsocial-cli` は、Bitsocial プロトコルのバックエンドを操作するためのコマンドラインツールです。ローカルの P2P デーモンを動かし、コミュニティを作成・設定し、コンテンツを公開するまでを、すべてターミナルから行えます。

共有の Bitsocial プロトコルクライアント層の上に作られており、[5chan](/apps/5chan/) と [Seedit](/apps/seedit/) がコミュニティの作成とノード管理に利用しています。

## インストール

Windows、macOS、Linux 向けにビルド済みのバイナリが用意されています。お使いのプラットフォーム向けの最新リリースを GitHub からダウンロードしてください。

**[GitHub Releases からダウンロード](https://github.com/bitsocialnet/bitsocial-cli/releases)**

ダウンロードしたら、バイナリに実行権限を付けます（macOS / Linux）。

```bash
chmod +x bitsocial
```

## デーモンの実行

CLI のもっとも一般的な使い方は、Bitsocial ノードを動かすことです。デーモンは P2P のネットワーク層を起動し、クライアントが接続できるローカル API を公開します。

```bash
bitsocial daemon
```

初回起動時、デーモンは **WebUI** へのリンクを出力します。WebUI は、ノード、コミュニティ、設定を管理するためのブラウザ上のグラフィカルインターフェイスです。ターミナルのコマンドより GUI を好む場合に便利です。

## 主な操作

| 操作                                 | 説明                                                   |
| ------------------------------------ | ------------------------------------------------------ |
| デーモンを起動する                   | Bitsocial の P2P ノードを立ち上げる                    |
| コミュニティを作成する               | 新しいコミュニティを作る                               |
| コミュニティを編集する               | コミュニティの設定（タイトル、説明、ルール）を更新する |
| ローカルのコミュニティを一覧表示する | このノードでホストしているコミュニティを一覧表示する   |
| コミュニティを開始する               | 特定のコミュニティの配信を開始する                     |
| コミュニティを停止する               | 特定のコミュニティの配信を停止する                     |

インストール済みのリリースが提供している現在のコマンド名とフラグを確認するには、`--help` を付けて CLI を実行します。

```bash
bitsocial --help
bitsocial daemon --help
```

## 典型的なワークフロー

新しいコミュニティをホストするときによく使う手順は次のとおりです。

```bash
# 1. Start the daemon
bitsocial daemon

# 2. In another terminal, inspect the available community-management commands
bitsocial --help
```

そこから先は、インストール済みリリースのコミュニティ管理コマンドを使って、コミュニティを作成し、設定し、配信を開始します。開始したコミュニティは Bitsocial ネットワーク上で稼働し、対応するクライアントからアクセスできます。

## リンク

- **GitHub:** [bitsocialnet/bitsocial-cli](https://github.com/bitsocialnet/bitsocial-cli)
