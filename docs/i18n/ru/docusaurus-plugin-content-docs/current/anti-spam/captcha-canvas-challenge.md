---
title: Captcha Canvas Challenge
description: Отдельный пакет с графической капчей для сообществ Bitsocial.
sidebar_position: 2
---

# Captcha Canvas Challenge

Captcha Canvas Challenge — отдельный пакет с графической капчей для сообществ Bitsocial. Он рисует случайный текст на холсте и позволяет сообществу требовать от автора распознать изображение, прежде чем публикация будет принята.

- **Исходный код и актуальный README:** [github.com/bitsocialnet/captcha-canvas-challenge](https://github.com/bitsocialnet/captcha-canvas-challenge#readme)
- **Пакет npm:** [`@bitsocial/captcha-canvas-challenge`](https://www.npmjs.com/package/@bitsocial/captcha-canvas-challenge)

## Установка

```bash
npm install @bitsocial/captcha-canvas-challenge
```

## Где это уместно

Капча полезна, когда сообществу нужен простой интерактивный барьер против спама там, где ставки невелики. Пакет намеренно узкий: он даёт только реализацию проверки, а когда и как её показывать, решает сообщество или узел Bitsocial.

Для более серьёзной защиты сочетайте её с полноценными системами модерации или оценки рисков, а не считайте капчу законченной стратегией борьбы со спамом.

## Актуальная документация пакета

Эта страница намеренно остаётся обзором, а не копией руководства по настройке. Источник истины по актуальным именам проверок, примерам регистрации, примерам для CLI, поддерживаемым опциям, требованиям и замечаниям по безопасности — README пакета:

- [README Captcha Canvas Challenge](https://github.com/bitsocialnet/captcha-canvas-challenge#readme)

При настройке действующего сообщества опирайтесь на README в репозитории: опции пакета и порядок установки версионируются вместе с пакетом, а не с этим сайтом.
