---
title: React Hooks
description: 用于在 Bitsocial 协议之上构建去中心化社交应用的 React hooks 库。
sidebar_position: 1
---

# React Hooks

`bitsocial-react-hooks` 这个包提供了一套开发者熟悉的 React hooks API，用来与 Bitsocial 协议交互。它负责拉取内容流、评论和作者资料，管理账户、发布内容、订阅社区——全程都不依赖中心服务器。

这个库是 [5chan](/apps/5chan/) 以及其他 Bitsocial 客户端应用所使用的主要接口。

:::note
`bitsocial-react-hooks` 目前直接从 GitHub 引入，还没有发布到 npm。
:::

## 安装

由于这个包还没上 npm，请直接从 GitHub 安装，并锁定到某个具体的提交哈希：

```bash
yarn add https://github.com/bitsocialnet/bitsocial-react-hooks.git#<commit-hash>
```

把 `<commit-hash>` 换成你想使用的那个提交。

## API 概览

这些 hooks 按功能分类组织。下面按类别列出各自最常用的 hooks。完整的签名、参数和返回类型，请查看 [GitHub 上的完整 API 参考](https://github.com/bitsocialnet/bitsocial-react-hooks)。

### 账户

管理本地用户账户、身份和设置。

- `useAccount(accountName?)` —— 返回当前（或指定名称的）账户对象
- `useAccounts()` —— 返回本地存储的所有账户
- `useAccountComments(options?)` —— 返回当前账户发布的评论

### 评论

获取单条评论和讨论串，并与之交互。

- `useComment(commentCid?)` —— 按 CID 获取单条评论
- `useComments(commentCids?)` —— 批量获取多条评论
- `useEditedComment(comment?)` —— 返回某条评论最新的编辑版本

### 社区

读取社区的元数据和设置。

- 单个社区查询 hook —— 按地址获取一个社区
- 多社区查询 hook —— 一次获取多个社区
- 社区统计 hook —— 返回订阅者数量和帖子数量

### 作者

查询作者资料和元数据。

- `useAuthor(authorAddress?)` —— 获取作者资料
- `useAuthorComments(options?)` —— 返回指定作者发布的评论
- `useResolvedAuthorAddress(authorAddress?)` —— 把人类可读的地址（例如 ENS）解析成对应的协议地址

### 内容流

订阅内容流并分页加载。

- `useFeed(options?)` —— 返回来自一个或多个社区的分页帖子流
- `useBufferedFeeds(feedOptions?)` —— 预先缓冲多条内容流，让渲染更快
- `useAuthorFeed(authorAddress?)` —— 返回指定作者的帖子流

### 操作

发布内容以及执行写入操作。

- `usePublishComment(options?)` —— 发布新评论或回复
- `usePublishVote(options?)` —— 投出赞成票或反对票
- `useSubscribe(options?)` —— 订阅或取消订阅某个社区

### 状态与 RPC

监控连接状态，并与远程的 Bitsocial 守护进程交互。

- `useClientsStates(options?)` —— 返回 IPFS/pubsub 客户端的连接状态
- RPC 设置 hook —— 返回当前 RPC 守护进程的配置

## 开发

想在本地开发这个 hooks 库：

**前置条件：** Node.js、已启用 Corepack、Yarn 4

```bash
git clone https://github.com/bitsocialnet/bitsocial-react-hooks.git
cd bitsocial-react-hooks
corepack enable
yarn install
```

测试和构建命令请参考该仓库的 README。

## 链接

- **GitHub：** [bitsocialnet/bitsocial-react-hooks](https://github.com/bitsocialnet/bitsocial-react-hooks)
- **许可证：** GPL-2.0-only
