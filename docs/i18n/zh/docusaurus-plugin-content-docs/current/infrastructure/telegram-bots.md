---
title: Telegram 机器人
description: 监控 Bitsocial 社区列表并把帖子转发到 Telegram 频道的信息流机器人。
sidebar_position: 4
---

# Telegram 机器人

Bitsocial 的 Telegram 机器人会监控 Bitsocial 网络上各客户端的社区列表，并自动把新帖子转发到 Telegram 频道。每条转发的消息都带有内联按钮，可以跳回 5chan 和 Seedit 上的原帖。

- **GitHub**：[bitsocialnet/bitsocial-telegram-bots](https://github.com/bitsocialnet/bitsocial-telegram-bots)

## 现有机器人

| 机器人          | 状态   | 说明                                             |
| --------------- | ------ | ------------------------------------------------ |
| **5chan Feed**  | 运行中 | 监控所有 5chan 目录，并把新帖子转发到 Telegram。 |
| **Seedit Feed** | 计划中 | 将为 Seedit 社区提供同样的功能。                 |

## 部署

### 前置条件

- Node.js
- Yarn
- 一个 Telegram 机器人令牌（通过 [BotFather](https://t.me/BotFather) 创建）

### 安装

克隆仓库并安装依赖：

```bash
git clone https://github.com/bitsocialnet/bitsocial-telegram-bots.git
cd bitsocial-telegram-bots
yarn install
```

### 配置

在项目根目录创建一个 `.env` 文件，写入你的机器人令牌：

```env
BOT_TOKEN=your_telegram_bot_token
```

### 运行

配置好环境之后启动机器人：

```bash
yarn start
```

## 帖子格式

机器人把帖子转发到 Telegram 时，会附带两个内联按钮：

- **在 5chan 上查看** —— 在 5chan 网页客户端中打开该帖子。
- **在 Seedit 上查看** —— 在 Seedit 网页客户端中打开该帖子。

这样，Telegram 频道的订阅者就可以在自己偏好的客户端里，直接跳转到完整的讨论串。
