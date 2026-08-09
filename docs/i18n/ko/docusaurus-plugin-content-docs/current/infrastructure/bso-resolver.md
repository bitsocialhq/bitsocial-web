---
title: BSO Resolver
description: Bitsocial TXT 레코드를 통해 .bso 도메인 이름을 공개 키로 확인합니다.
sidebar_position: 1
---

# BSO Resolver

BSO Resolver는 Bitsocial TXT 레코드를 읽어 `.bso` 도메인 이름을 그에 대응하는 공개 키로 변환합니다. 사용자에게 보이는 `.bso` 이름을 피어 투 피어 스택이 이해하는 키 자료로 바꿔야 할 때 Bitsocial 도구들이 사용하는 리졸버 패키지입니다.

- **소스 코드 및 최신 README:** [github.com/bitsocialnet/bso-resolver](https://github.com/bitsocialnet/bso-resolver#readme)
- **npm 패키지:** [`@bitsocial/bso-resolver`](https://www.npmjs.com/package/@bitsocial/bso-resolver)

## 설치

```bash
npm install @bitsocial/bso-resolver
```

## 어디에 들어맞는가

Bitsocial 이름은 커뮤니티와 작성자로 이어지는, 사람이 읽을 수 있는 진입점을 목표로 합니다. 리졸버는 그 이름 계층을 애플리케이션 코드와 분리해 두므로, 클라이언트는 어떤 이름이 지원되는지 먼저 물어본 다음 패키지의 런타임별 진입점을 통해 그 이름을 확인할 수 있습니다.

원시 공개 키만이 아니라 `.bso` 이름도 받아들여야 하는 Bitsocial 지원 클라이언트, 명령줄 도구, 서비스를 통합할 때 사용하세요.

## 최신 패키지 참조

이 페이지는 API 레퍼런스를 그대로 옮긴 것이 아니라 의도적으로 개요만 다룹니다. 생성자 옵션, 반환 타입, 캐싱 동작, 진입점, 제공자 예제, 지원되는 종료 방식에 대해서는 패키지 README가 신뢰할 수 있는 출처입니다.

- [BSO Resolver README](https://github.com/bitsocialnet/bso-resolver#readme)

리졸버의 동작은 이 웹사이트가 아니라 해당 패키지와 함께 버전이 관리되므로, 코드를 프로젝트에 복사할 때는 업스트림 README를 우선하세요.
