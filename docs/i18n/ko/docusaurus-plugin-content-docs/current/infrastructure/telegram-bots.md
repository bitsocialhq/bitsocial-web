---
title: Telegram 봇
description: Bitsocial 커뮤니티 목록을 모니터링해 게시물을 Telegram 채널로 전달하는 피드 봇.
sidebar_position: 4
---

# Telegram 봇

Bitsocial Telegram 봇은 Bitsocial 네트워크의 클라이언트 커뮤니티 목록을 모니터링하다가 새 게시물을 Telegram 채널로 자동 전달합니다. 전달된 각 메시지에는 5chan과 Seedit의 원본 게시물로 이어지는 인라인 버튼이 들어갑니다.

- **GitHub**: [bitsocialnet/bitsocial-telegram-bots](https://github.com/bitsocialnet/bitsocial-telegram-bots)

## 제공되는 봇

| 봇              | 상태 | 설명                                                                  |
| --------------- | ---- | --------------------------------------------------------------------- |
| **5chan Feed**  | 활성 | 모든 5chan 디렉터리를 모니터링해 새 게시물을 Telegram으로 전달합니다. |
| **Seedit Feed** | 예정 | Seedit 커뮤니티에 대해 같은 기능을 제공할 예정입니다.                 |

## 설정

### 사전 준비물

- Node.js
- Yarn
- Telegram 봇 토큰([BotFather](https://t.me/BotFather)에서 발급)

### 설치

저장소를 복제하고 의존성을 설치합니다.

```bash
git clone https://github.com/bitsocialnet/bitsocial-telegram-bots.git
cd bitsocial-telegram-bots
yarn install
```

### 구성

프로젝트 루트에 봇 토큰을 담은 `.env` 파일을 만듭니다.

```env
BOT_TOKEN=your_telegram_bot_token
```

### 실행

환경 구성을 마친 뒤 봇을 시작합니다.

```bash
yarn start
```

## 게시물 형식

봇이 게시물을 Telegram으로 전달할 때는 인라인 버튼 두 개가 함께 붙습니다.

- **5chan에서 보기** — 5chan 웹 클라이언트에서 게시물을 엽니다.
- **Seedit에서 보기** — Seedit 웹 클라이언트에서 게시물을 엽니다.

덕분에 Telegram 구독자는 자신이 선호하는 클라이언트에서 전체 토론 스레드로 곧장 이동할 수 있습니다.
