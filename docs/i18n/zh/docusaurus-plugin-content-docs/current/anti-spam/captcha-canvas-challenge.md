---
title: 验证码画布挑战
description: 面向 Bitsocial 社区的独立图形验证码挑战。
sidebar_position: 2
---

# 验证码画布挑战

验证码画布挑战（Captcha Canvas Challenge）是面向 Bitsocial 社区的独立图形验证码软件包。它把随机生成的文字渲染到画布上，让社区可以要求作者先解出图中的字符，然后才接受其发布的内容。

- **源代码与最新 README：** [github.com/bitsocialnet/captcha-canvas-challenge](https://github.com/bitsocialnet/captcha-canvas-challenge#readme)
- **npm 包：** [`@bitsocial/captcha-canvas-challenge`](https://www.npmjs.com/package/@bitsocial/captcha-canvas-challenge)

## 安装

```bash
npm install @bitsocial/captcha-canvas-challenge
```

## 适用场景

当社区想要一道简单的交互式关卡、用来抵挡风险不高的垃圾内容时，验证码挑战很有用。这个包刻意做得很窄：它只提供挑战本身的实现，至于何时以及如何呈现，由社区或 Bitsocial 节点决定。

如果需要更强的防护，请把它与更全面的审核或风险评分系统结合使用，而不要把验证码当成一套完整的反垃圾策略。

## 当前软件包参考

本页刻意只做概览，而不是照搬一份配置指南。软件包的 README 才是当前挑战名称、注册示例、CLI 示例、支持选项、运行要求和安全说明的权威来源：

- [验证码画布挑战 README](https://github.com/bitsocialnet/captcha-canvas-challenge#readme)

为线上社区做配置时，请优先参考上游 README，因为软件包的选项和安装流程是随该包一起做版本管理的，而不是随本网站。
