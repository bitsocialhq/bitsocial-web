---
title: Desafío Captcha Canvas
description: Desafío captcha independiente basado en imágenes para comunidades de Bitsocial.
sidebar_position: 2
---

# Desafío Captcha Canvas

Captcha Canvas Challenge es un paquete independiente de captcha con imágenes para comunidades de Bitsocial. Dibuja un texto aleatorio sobre un canvas y permite que una comunidad pida a los autores que resuelvan la imagen antes de aceptar una publicación.

- **Código fuente y README actual:** [github.com/bitsocialnet/captcha-canvas-challenge](https://github.com/bitsocialnet/captcha-canvas-challenge#readme)
- **Paquete de npm:** [`@bitsocial/captcha-canvas-challenge`](https://www.npmjs.com/package/@bitsocial/captcha-canvas-challenge)

## Instalación

```bash
npm install @bitsocial/captcha-canvas-challenge
```

## Dónde encaja

Los desafíos captcha resultan útiles cuando una comunidad quiere una barrera interactiva sencilla para frenar el spam en situaciones de poco riesgo. Este paquete es deliberadamente limitado: aporta la implementación del desafío, mientras que la comunidad o el nodo de Bitsocial decide cuándo y cómo presentarlo.

Para una protección más fuerte, combínalo con sistemas más amplios de moderación o de puntuación de riesgo en lugar de tratar un captcha como una estrategia antispam completa.

## Referencia actual del paquete

Esta página es deliberadamente una visión general, no una copia de la guía de configuración. El README del paquete es la fuente de verdad sobre los nombres actuales de los desafíos, los ejemplos de registro, los ejemplos de CLI, las opciones admitidas, los requisitos y las notas de seguridad:

- [README de Captcha Canvas Challenge](https://github.com/bitsocialnet/captcha-canvas-challenge#readme)

Cuando configures una comunidad en producción, guíate por el README original, porque las opciones del paquete y los flujos de instalación se versionan con ese paquete y no con este sitio web.
