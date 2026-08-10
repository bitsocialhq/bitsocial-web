---
title: 바우처 챌린지
description: 커뮤니티 소유자가 배포한 고유 바우처 코드로 게시 권한을 제한하는 스팸 방지 챌린지.
sidebar_position: 3
---

# 바우처 챌린지

바우처 챌린지는 커뮤니티 소유자가 배포한 고유 바우처 코드가 있어야만 콘텐츠를 게시할 수 있게 합니다. 자동 점수 산정에 기대는 대신, 소유자가 직접 통제하는 경로로 아는 사람에게 코드를 전달하는 수동 초대 방식으로 신뢰의 축을 옮깁니다.

- **소스 코드 및 최신 README:** [github.com/bitsocialnet/voucher-challenge](https://github.com/bitsocialnet/voucher-challenge#readme)
- **npm 패키지:** [`@bitsocial/voucher-challenge`](https://www.npmjs.com/package/@bitsocial/voucher-challenge)

## 설치

```bash
npm install @bitsocial/voucher-challenge
```

## 작동 방식

1. 커뮤니티 소유자가 고유한 바우처 코드를 하나 이상 생성합니다.
2. 소유자가 원하는 경로(다이렉트 메시지, 이메일, 대면 전달 등)로 신뢰하는 작성자에게 그 코드를 배포합니다.
3. 작성자가 글을 올리려 하면 챌린지 시스템이 바우처 코드를 입력하라고 요청합니다.
4. 코드를 검증합니다. 정상적인 코드이고 아직 사용되지 않았다면 게시가 승인됩니다.

각 바우처 코드는 한번 사용되면 특정 작성자에게 귀속되므로 다른 사람이 재사용할 수 없습니다.

## 최신 패키지 문서

이 문서는 설정 가이드를 그대로 옮긴 것이 아니라 의도적으로 개요만 다룹니다. 현재 챌린지 이름, Bitsocial CLI 예제, pkc-js 등록 방법, 지원 옵션, 사용 처리 동작의 기준이 되는 출처는 패키지 README입니다.

- [바우처 챌린지 README](https://github.com/bitsocialnet/voucher-challenge#readme)

바우처 옵션과 설치 절차는 이 웹사이트가 아니라 해당 패키지와 함께 버전 관리되므로, 실제 운영 중인 커뮤니티를 설정할 때는 원본 README를 우선하세요.

## 언제 사용하면 좋은가

바우처 챌린지는 다음과 같은 경우에 가장 잘 맞습니다.

- 구성원을 의도적으로 제한하는 **초대 전용 커뮤니티**.
- 소유자가 참여자를 한 명씩 직접 확인하는 **선별된 공간**.
- 자동 스팸 점수 산정이 불필요하거나 바람직하지 않은 **높은 신뢰 환경**.

코드를 수동으로 배포해야 하므로 규모가 큰 공개 커뮤니티에는 맞지 않습니다. 그런 경우에는 [스팸 차단기](./spam-blocker.md)나 [EVM 컨트랙트 호출 챌린지](./evm-contract-call.md)를 대신 고려해 보세요.
