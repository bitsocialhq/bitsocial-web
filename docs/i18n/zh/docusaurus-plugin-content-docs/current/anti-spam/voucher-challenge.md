---
title: 兑换码挑战
description: 由社区所有者分发唯一兑换码、以此把关内容发布的反垃圾挑战。
sidebar_position: 3
---

# 兑换码挑战

兑换码挑战用社区所有者分发的唯一兑换码来把关内容发布。它不依赖自动化评分，而是把信任转移到人工邀请流程上：由所有者掌控的渠道，把兑换码发给认识的人。

- **源代码与最新 README：** [github.com/bitsocialnet/voucher-challenge](https://github.com/bitsocialnet/voucher-challenge#readme)
- **npm 包：** [`@bitsocial/voucher-challenge`](https://www.npmjs.com/package/@bitsocial/voucher-challenge)

## 安装

```bash
npm install @bitsocial/voucher-challenge
```

## 工作原理

1. 社区所有者生成一个或多个唯一的兑换码。
2. 所有者通过自己选择的渠道（私信、邮件、线下等）把这些兑换码交给受信任的作者。
3. 当作者尝试发布内容时，挑战系统会提示他们输入兑换码。
4. 系统校验该兑换码——如果它真实且尚未被使用，这次发布就会被接受。

每个兑换码一经兑换就会与特定作者绑定，防止被他人重复使用。

## 当前软件包参考

本页刻意只做概览，而不是照搬一份配置指南。软件包的 README 才是当前挑战名称、Bitsocial CLI 示例、pkc-js 注册方式、支持选项和兑换行为的权威来源：

- [兑换码挑战 README](https://github.com/bitsocialnet/voucher-challenge#readme)

为线上社区做配置时，请优先参考上游 README，因为兑换码相关选项和安装流程是随该包一起做版本管理的，而不是随本网站。

## 什么时候用它

兑换码挑战最适合：

- **仅限邀请的社区**，成员资格被有意收紧。
- **精选空间**，由所有者亲自审核每一位参与者。
- **高信任环境**，自动化的垃圾内容评分没有必要，甚至并不受欢迎。

由于需要人工分发兑换码，它无法扩展到大型开放社区。那类场景可以考虑 [Spam Blocker](./spam-blocker.md) 或 [EVM 合约调用挑战](./evm-contract-call.md)。
