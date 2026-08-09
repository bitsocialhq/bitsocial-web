---
title: Bots do Telegram
description: Bots de feed que monitoram listas de comunidades Bitsocial e encaminham postagens para canais do Telegram.
sidebar_position: 4
---

# Bots do Telegram

Os bots do Bitsocial para Telegram monitoram as listas de comunidades dos clientes na rede Bitsocial e encaminham automaticamente as novas postagens para canais do Telegram. Cada mensagem encaminhada traz botões embutidos que levam de volta à postagem original no 5chan e no Seedit.

- **GitHub**: [bitsocialnet/bitsocial-telegram-bots](https://github.com/bitsocialnet/bitsocial-telegram-bots)

## Bots disponíveis

| Bot             | Estado    | Descrição                                                                          |
| --------------- | --------- | ---------------------------------------------------------------------------------- |
| **5chan Feed**  | Ativo     | Monitora todos os diretórios do 5chan e encaminha novas postagens para o Telegram. |
| **Seedit Feed** | Planejado | Vai oferecer a mesma funcionalidade para as comunidades do Seedit.                 |

## Instalação e configuração

### Pré-requisitos

- Node.js
- Yarn
- Um token de bot do Telegram (crie um pelo [BotFather](https://t.me/BotFather))

### Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/bitsocialnet/bitsocial-telegram-bots.git
cd bitsocial-telegram-bots
yarn install
```

### Configuração

Crie um arquivo `.env` na raiz do projeto com o seu token de bot:

```env
BOT_TOKEN=your_telegram_bot_token
```

### Execução

Inicie o bot depois de configurar o ambiente:

```bash
yarn start
```

## Formato das postagens

Quando o bot encaminha uma postagem para o Telegram, ele inclui dois botões embutidos:

- **Ver no 5chan** -- Abre a postagem no cliente web do 5chan.
- **Ver no Seedit** -- Abre a postagem no cliente web do Seedit.

Assim, quem acompanha o canal no Telegram vai direto para a discussão completa no cliente que preferir.
