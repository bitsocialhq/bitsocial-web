---
title: CLI do Bitsocial
description: Interface de linha de comando para executar um nó Bitsocial, criar comunidades e gerenciar operações de protocolo.
sidebar_position: 2
---

# CLI do Bitsocial

O `bitsocial-cli` é uma ferramenta de linha de comando para interagir com o backend do protocolo Bitsocial. Com ela você executa um daemon P2P local, cria e configura comunidades e publica conteúdo -- tudo pelo terminal.

Ela é construída sobre a camada compartilhada de cliente do protocolo Bitsocial e é usada pelo [5chan](/apps/5chan/) e pelo [Seedit](/apps/seedit/) para criar comunidades e gerenciar nós.

## Instalação

Há binários prontos para Windows, macOS e Linux. Baixe a versão mais recente para a sua plataforma no GitHub:

**[Baixar nas releases do GitHub](https://github.com/bitsocialnet/bitsocial-cli/releases)**

Depois do download, torne o binário executável (macOS/Linux):

```bash
chmod +x bitsocial
```

## Executando o daemon

O uso mais comum da CLI é executar um nó Bitsocial. O daemon inicia a camada de rede P2P e expõe uma API local à qual os clientes podem se conectar.

```bash
bitsocial daemon
```

Na primeira execução, o daemon mostra links para a **WebUI**, uma interface gráfica no navegador para gerenciar o seu nó, as comunidades e as configurações. Ela é útil se você prefere uma GUI em vez de comandos no terminal.

## Ações principais

| Ação                      | Descrição                                                            |
| ------------------------- | -------------------------------------------------------------------- |
| Iniciar o daemon          | Executar o nó P2P Bitsocial                                          |
| Criar uma comunidade      | Criar uma nova comunidade                                            |
| Editar uma comunidade     | Atualizar as configurações da comunidade (título, descrição, regras) |
| Listar comunidades locais | Listar as comunidades hospedadas neste nó                            |
| Iniciar uma comunidade    | Começar a servir uma comunidade específica                           |
| Parar uma comunidade      | Parar de servir uma comunidade específica                            |

Execute a CLI com `--help` para ver os nomes de comandos e as flags que a sua versão instalada expõe:

```bash
bitsocial --help
bitsocial daemon --help
```

## Fluxo de trabalho típico

Um fluxo comum para hospedar uma nova comunidade:

```bash
# 1. Start the daemon
bitsocial daemon

# 2. In another terminal, inspect the available community-management commands
bitsocial --help
```

A partir daí, use os comandos de gerenciamento de comunidades da versão instalada para criar, configurar e começar a servir uma comunidade. Depois de iniciada, a comunidade fica ativa na rede Bitsocial e acessível a partir de clientes compatíveis.

## Links

- **GitHub:** [bitsocialnet/bitsocial-cli](https://github.com/bitsocialnet/bitsocial-cli)
