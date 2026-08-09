---
title: Bitsocial 命令行工具
description: 用于运行 Bitsocial 节点、创建社区和管理协议操作的命令行界面。
sidebar_position: 2
---

# Bitsocial 命令行工具

`bitsocial-cli` 是一个与 Bitsocial 协议后端交互的命令行工具。它让你可以运行本地 P2P 守护进程、创建和配置社区、发布内容——全部在终端里完成。

它构建在共享的 Bitsocial 协议客户端层之上，[5chan](/apps/5chan/) 和 [Seedit](/apps/seedit/) 也用它来创建社区和管理节点。

## 安装

Windows、macOS 和 Linux 均提供预编译的二进制文件。请从 GitHub 下载适合你平台的最新版本：

**[从 GitHub Releases 下载](https://github.com/bitsocialnet/bitsocial-cli/releases)**

下载完成后，给二进制文件加上可执行权限（macOS/Linux）：

```bash
chmod +x bitsocial
```

## 运行守护进程

CLI 最常见的用途是运行一个 Bitsocial 节点。守护进程会启动 P2P 网络层，并暴露一个供客户端连接的本地 API。

```bash
bitsocial daemon
```

首次启动时，守护进程会输出指向 **WebUI** 的链接。WebUI 是一个基于浏览器的图形界面，用于管理你的节点、社区和设置。如果你比起终端命令更喜欢图形界面，它会很有用。

## 主要操作

| 操作         | 说明                             |
| ------------ | -------------------------------- |
| 启动守护进程 | 启动 Bitsocial P2P 节点          |
| 创建社区     | 新建一个社区                     |
| 编辑社区     | 更新社区设置（标题、描述、规则） |
| 列出本地社区 | 列出本节点托管的社区             |
| 启动社区     | 开始为某个特定社区提供服务       |
| 停止社区     | 停止为某个特定社区提供服务       |

用 `--help` 运行 CLI，即可查看你所安装版本提供的当前命令名称和参数：

```bash
bitsocial --help
bitsocial daemon --help
```

## 典型工作流

托管一个新社区的常见流程：

```bash
# 1. Start the daemon
bitsocial daemon

# 2. In another terminal, inspect the available community-management commands
bitsocial --help
```

在此之后，使用你所安装版本的社区管理命令来创建、配置社区并开始提供服务。社区一旦启动，就在 Bitsocial 网络上线了，兼容的客户端都可以访问它。

## 链接

- **GitHub：** [bitsocialnet/bitsocial-cli](https://github.com/bitsocialnet/bitsocial-cli)
