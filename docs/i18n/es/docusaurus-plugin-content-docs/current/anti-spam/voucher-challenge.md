---
title: Desafío de vales
description: Desafío antispam que condiciona la publicación a códigos de vale únicos repartidos por quien es dueño de la comunidad.
sidebar_position: 3
---

# Desafío de vales

Voucher Challenge condiciona la publicación de contenido a códigos de vale únicos que reparte quien es dueño de la comunidad. En lugar de basarse en una puntuación automática, traslada la confianza a un flujo manual de invitaciones en el que personas conocidas reciben códigos por un canal que controla esa misma persona.

- **Código fuente y README actual:** [github.com/bitsocialnet/voucher-challenge](https://github.com/bitsocialnet/voucher-challenge#readme)
- **Paquete de npm:** [`@bitsocial/voucher-challenge`](https://www.npmjs.com/package/@bitsocial/voucher-challenge)

## Instalación

```bash
npm install @bitsocial/voucher-challenge
```

## Cómo funciona

1. La persona dueña de la comunidad genera uno o varios códigos de vale únicos.
2. Reparte esos códigos entre autores de confianza por el canal que prefiera (mensaje directo, correo electrónico, en persona, etc.).
3. Cuando un autor intenta publicar, el sistema de desafíos le pide un código de vale.
4. El código se valida: si es auténtico y no se ha usado antes, la publicación se acepta.

Cada código de vale queda vinculado a un autor concreto en cuanto se canjea, de modo que nadie más puede reutilizarlo.

## Referencia actual del paquete

Esta página es deliberadamente una visión general, no una copia de la guía de configuración. El README del paquete es la fuente de verdad sobre los nombres actuales de los desafíos, los ejemplos con la CLI de Bitsocial, el registro en pkc-js, las opciones admitidas y el comportamiento del canje:

- [README de Voucher Challenge](https://github.com/bitsocialnet/voucher-challenge#readme)

Cuando configures una comunidad en producción, guíate por el README original, porque las opciones de los vales y los flujos de instalación se versionan con ese paquete y no con este sitio web.

## Cuándo usarlo

El desafío de vales encaja mejor en:

- **Comunidades solo por invitación**, donde la pertenencia se restringe a propósito.
- **Espacios seleccionados**, donde quien es dueño revisa personalmente a cada participante.
- **Entornos de mucha confianza**, donde la puntuación automática de spam es innecesaria o poco deseable.

Como exige repartir los códigos a mano, no funciona bien en comunidades abiertas y grandes. Para esos casos, considera [Bloqueador de spam](./spam-blocker.md) o el [Desafío de llamada a contrato EVM](./evm-contract-call.md) en su lugar.
