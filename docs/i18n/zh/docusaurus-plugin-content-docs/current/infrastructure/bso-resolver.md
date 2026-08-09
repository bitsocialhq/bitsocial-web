---
title: BSO 解析器
description: 通过 Bitsocial TXT 记录将 .bso 域名解析为公钥。
sidebar_position: 1
---

# BSO 解析器

BSO 解析器通过读取 Bitsocial TXT 记录，把 `.bso` 域名转换成对应的公钥。当面向用户的 `.bso` 名称需要变成点对点协议栈能够理解的密钥材料时，Bitsocial 工具链使用的就是这个解析器包。

- **源代码与最新 README：** [github.com/bitsocialnet/bso-resolver](https://github.com/bitsocialnet/bso-resolver#readme)
- **npm 包：** [`@bitsocial/bso-resolver`](https://www.npmjs.com/package/@bitsocial/bso-resolver)

## 安装

```bash
npm install @bitsocial/bso-resolver
```

## 它处在什么位置

Bitsocial 名称的用途，是为社区和作者提供人类可读的入口。解析器把这一层命名逻辑与应用代码分开，因此客户端可以先询问某个名称是否受支持，再通过该包针对具体运行时的入口去解析它。

当你要集成一个支持 Bitsocial 的客户端、命令行工具或服务，并且希望它能接受 `.bso` 名称而不只是原始公钥时，就可以使用它。

## 当前包参考文档

本页有意只作为概览，而不是 API 参考的镜像。关于构造函数选项、返回类型、缓存行为、入口点、提供方示例以及受支持的关停语义，包的 README 才是权威来源：

- [BSO Resolver README](https://github.com/bitsocialnet/bso-resolver#readme)

把代码复制进项目时，请优先参考上游 README，因为解析器的行为是随该包版本演进的，而不是随本网站。
