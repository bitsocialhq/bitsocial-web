---
title: EVM 컨트랙트 호출 챌린지
description: EVM 스마트 컨트랙트를 호출해 온체인 조건을 검증하는 스팸 방지 챌린지.
sidebar_position: 4
---

# EVM 컨트랙트 호출 챌린지

EVM 컨트랙트 호출 챌린지는 게시를 허용하기 전에 작성자의 온체인 상태를 검증합니다. 커뮤니티 소유자는 최소 토큰 보유량 같은 읽기 전용 스마트 컨트랙트 조건을 지갑이나 확인된 신원이 충족해야만 글을 올릴 수 있도록 설정할 수 있습니다.

- **소스 코드 및 최신 README:** [github.com/bitsocialnet/evm-contract-challenge](https://github.com/bitsocialnet/evm-contract-challenge#readme)
- **npm 패키지:** [`@bitsocial/evm-contract-challenge`](https://www.npmjs.com/package/@bitsocial/evm-contract-challenge)

## 설치

```bash
npm install @bitsocial/evm-contract-challenge
```

## 어디에 적합한가

참여 자격을 외부 EVM 신호에 연동하고 싶은 커뮤니티에 이 챌린지를 사용하세요. 토큰 보유, NFT 보유, 인격 증명 점수, 거버넌스 참여 자격, 그 밖에 컨트랙트로 조회할 수 있는 조건이 여기에 해당합니다.

한번 설정하고 나면 작성자 입장에서는 자동으로 처리됩니다. 챌린지가 사용 가능한 지갑이나 신원 출처를 확인하고, 설정된 컨트랙트 메서드를 호출한 뒤, 반환된 값을 커뮤니티의 조건과 비교합니다.

## 최신 패키지 문서

이 문서는 설정 레퍼런스를 그대로 옮긴 것이 아니라 의도적으로 개요만 다룹니다. 챌린지 이름, Bitsocial CLI 예제, pkc-js 등록 방법, 옵션 기본값, ABI 예제, RPC 동작, 지원되는 지갑 출처의 기준이 되는 출처는 패키지 README입니다.

- [EVM 컨트랙트 챌린지 README](https://github.com/bitsocialnet/evm-contract-challenge#readme)

컨트랙트 옵션과 예제는 이 웹사이트가 아니라 해당 패키지와 함께 버전 관리되므로, 실제 운영 중인 커뮤니티를 설정할 때는 원본 README를 우선하세요.

## 언제 사용하면 좋은가

EVM 컨트랙트 호출 챌린지는 다음과 같은 경우에 특히 잘 맞습니다.

- 게시 권한을 토큰 보유자로 제한하는 **토큰 게이팅 커뮤니티**.
- 특정 NFT 보유가 필요한 **NFT 기반 접근 제어**.
- 참여를 거버넌스 토큰 보유자로 한정하는 **DAO 거버넌스 공간**.

온체인 신원에 의존하지 않는 커뮤니티라면 [스팸 차단기](./spam-blocker.md)나 [바우처 챌린지](./voucher-challenge.md)를 대신 고려해 보세요.
