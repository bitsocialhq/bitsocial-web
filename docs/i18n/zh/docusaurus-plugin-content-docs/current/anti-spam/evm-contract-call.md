---
title: EVM 合约调用挑战
description: 通过调用 EVM 智能合约来验证链上条件的反垃圾挑战。
sidebar_position: 4
---

# EVM 合约调用挑战

EVM 合约调用挑战会在允许发布内容之前验证作者的链上状态。社区所有者可以要求钱包或解析出的身份先满足某个只读的智能合约条件，例如持有一定数量的代币，然后才能发帖。

- **源代码与最新 README：** [github.com/bitsocialnet/evm-contract-challenge](https://github.com/bitsocialnet/evm-contract-challenge#readme)
- **npm 包：** [`@bitsocial/evm-contract-challenge`](https://www.npmjs.com/package/@bitsocial/evm-contract-challenge)

## 安装

```bash
npm install @bitsocial/evm-contract-challenge
```

## 适用场景

如果一个社区的参与资格应当取决于外部的 EVM 信号，就适合用这个挑战：代币持有、NFT 持有、真人证明分数、治理成员身份，或者其他可由合约读取的条件。

配置完成后，从作者的角度看，这个挑战是自动完成的。它会检查符合条件的钱包或身份来源，调用配置好的合约方法，再把返回值与社区设定的条件做比较。

## 当前软件包参考

本页刻意只做概览，而不是照搬一份配置参考。软件包的 README 才是挑战名称、Bitsocial CLI 示例、pkc-js 注册方式、选项默认值、ABI 示例、RPC 行为和支持的钱包来源的权威来源：

- [EVM 合约挑战 README](https://github.com/bitsocialnet/evm-contract-challenge#readme)

为线上社区做配置时，请优先参考上游 README，因为合约选项和示例是随该包一起做版本管理的，而不是随本网站。

## 什么时候用它

EVM 合约调用挑战特别适合：

- **代币门槛社区**，只允许代币持有者发帖。
- **NFT 门槛访问**，需要持有特定 NFT 才能参与。
- **DAO 治理空间**，参与资格仅限治理代币持有者。

对于不依赖链上身份的社区，可以考虑 [Spam Blocker](./spam-blocker.md) 或[兑换码挑战](./voucher-challenge.md)。
