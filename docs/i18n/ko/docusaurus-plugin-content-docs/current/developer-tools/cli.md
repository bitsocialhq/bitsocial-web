---
title: Bitsocial CLI
description: Bitsocial 노드를 실행하고 커뮤니티를 만들며 프로토콜 작업을 관리하는 명령줄 인터페이스.
sidebar_position: 2
---

# Bitsocial CLI

`bitsocial-cli`는 Bitsocial 프로토콜 백엔드와 상호작용하는 명령줄 도구입니다. 로컬 P2P 데몬을 실행하고, 커뮤니티를 만들고 설정하며, 콘텐츠를 게시하는 일을 모두 터미널에서 처리할 수 있습니다.

공용 Bitsocial 프로토콜 클라이언트 계층 위에 구축되었으며, [5chan](/apps/5chan/)과 [Seedit](/apps/seedit/)이 커뮤니티 생성과 노드 관리에 사용합니다.

## 설치

Windows, macOS, Linux용 사전 빌드된 바이너리가 제공됩니다. 사용하는 플랫폼에 맞는 최신 릴리스를 GitHub에서 내려받으세요.

**[GitHub 릴리스에서 내려받기](https://github.com/bitsocialnet/bitsocial-cli/releases)**

내려받은 뒤에는 바이너리에 실행 권한을 부여합니다(macOS/Linux).

```bash
chmod +x bitsocial
```

## 데몬 실행

CLI의 가장 흔한 용도는 Bitsocial 노드를 실행하는 것입니다. 데몬은 P2P 네트워킹 계층을 시작하고, 클라이언트가 접속할 수 있는 로컬 API를 노출합니다.

```bash
bitsocial daemon
```

처음 실행하면 데몬이 **WebUI** 링크를 출력합니다. WebUI는 노드와 커뮤니티, 설정을 브라우저에서 관리할 수 있는 그래픽 인터페이스로, 터미널 명령보다 GUI가 편한 경우에 유용합니다.

## 주요 작업

| 작업               | 설명                                          |
| ------------------ | --------------------------------------------- |
| 데몬 시작          | Bitsocial P2P 노드를 실행합니다               |
| 커뮤니티 생성      | 새 커뮤니티를 만듭니다                        |
| 커뮤니티 편집      | 커뮤니티 설정을 변경합니다(제목, 설명, 규칙)  |
| 로컬 커뮤니티 목록 | 이 노드에서 호스팅 중인 커뮤니티를 나열합니다 |
| 커뮤니티 시작      | 특정 커뮤니티 제공을 시작합니다               |
| 커뮤니티 중지      | 특정 커뮤니티 제공을 중지합니다               |

설치한 릴리스가 실제로 제공하는 명령 이름과 플래그를 보려면 CLI를 `--help`와 함께 실행하세요.

```bash
bitsocial --help
bitsocial daemon --help
```

## 일반적인 작업 흐름

새 커뮤니티를 호스팅할 때 흔히 쓰는 설정 순서는 다음과 같습니다.

```bash
# 1. Start the daemon
bitsocial daemon

# 2. In another terminal, inspect the available community-management commands
bitsocial --help
```

여기서부터는 설치한 릴리스의 커뮤니티 관리 명령으로 커뮤니티를 만들고, 설정하고, 제공을 시작하면 됩니다. 일단 시작되면 그 커뮤니티는 Bitsocial 네트워크에서 살아 있으며 호환 클라이언트에서 접근할 수 있습니다.

## 링크

- **GitHub:** [bitsocialnet/bitsocial-cli](https://github.com/bitsocialnet/bitsocial-cli)
