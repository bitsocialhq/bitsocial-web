---
title: Captcha Canvas Challenge
description: Автономний виклик captcha на основі зображення для спільнот Bitsocial.
sidebar_position: 2
---

# Captcha Canvas Challenge

Captcha Canvas Challenge — це автономний пакет графічної captcha для спільнот Bitsocial. Він малює випадковий текст на полотні й дозволяє спільноті вимагати від авторів розв’язати зображення, перш ніж публікацію буде прийнято.

- **Вихідний код і актуальний README:** [github.com/bitsocialnet/captcha-canvas-challenge](https://github.com/bitsocialnet/captcha-canvas-challenge#readme)
- **Пакет npm:** [`@bitsocial/captcha-canvas-challenge`](https://www.npmjs.com/package/@bitsocial/captcha-canvas-challenge)

## Встановлення

```bash
npm install @bitsocial/captcha-canvas-challenge
```

## Де це доречно

Виклики captcha корисні тоді, коли спільноті потрібен простий інтерактивний бар’єр проти спаму в ситуаціях із невисокими ставками. Цей пакет навмисно вузький: він дає лише реалізацію виклику, а спільнота або вузол Bitsocial вирішує, коли і як його показати.

Для сильнішого захисту поєднуйте його з ширшими системами модерації чи оцінювання ризиків, а не сприймайте captcha як повноцінну стратегію боротьби зі спамом.

## Актуальний опис пакета

Ця сторінка навмисно є оглядом, а не дзеркалом посібника з налаштування. Джерелом істини щодо актуальних назв викликів, прикладів реєстрації, прикладів для CLI, підтримуваних параметрів, вимог і приміток про безпеку є README пакета:

- [README Captcha Canvas Challenge](https://github.com/bitsocialnet/captcha-canvas-challenge#readme)

Налаштовуючи живу спільноту, орієнтуйтеся на README в апстрімі, бо параметри пакета та способи встановлення версіонуються разом із самим пакетом, а не з цим сайтом.
