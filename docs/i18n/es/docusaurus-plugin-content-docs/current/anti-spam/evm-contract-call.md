---
title: Desafío de llamada a contrato EVM
description: Desafío antispam que verifica condiciones en la cadena llamando a un contrato inteligente EVM.
sidebar_position: 4
---

# Desafío de llamada a contrato EVM

EVM Contract Call Challenge comprueba el estado en cadena de un autor antes de permitir una publicación. Quienes son dueños de una comunidad pueden exigir que una cartera o una identidad resuelta cumpla una condición de solo lectura de un contrato inteligente, como tener un saldo mínimo de tokens, antes de poder publicar.

- **Código fuente y README actual:** [github.com/bitsocialnet/evm-contract-challenge](https://github.com/bitsocialnet/evm-contract-challenge#readme)
- **Paquete de npm:** [`@bitsocial/evm-contract-challenge`](https://www.npmjs.com/package/@bitsocial/evm-contract-challenge)

## Instalación

```bash
npm install @bitsocial/evm-contract-challenge
```

## Dónde encaja

Usa este desafío en comunidades donde la participación deba depender de una señal externa de EVM: tener tokens, tener un NFT, puntuaciones de prueba de personalidad, pertenencia a un órgano de gobernanza u otra condición que un contrato pueda comprobar.

Una vez configurado, el desafío es automático desde el punto de vista del autor. Comprueba las carteras o fuentes de identidad admitidas, llama al método del contrato configurado y compara el valor devuelto con la condición de la comunidad.

## Referencia actual del paquete

Esta página es deliberadamente una visión general, no una copia de la referencia de configuración. El README del paquete es la fuente de verdad sobre los nombres de los desafíos, los ejemplos con la CLI de Bitsocial, el registro en pkc-js, los valores por defecto de las opciones, los ejemplos de ABI, el comportamiento de RPC y las fuentes de cartera admitidas:

- [README de EVM Contract Challenge](https://github.com/bitsocialnet/evm-contract-challenge#readme)

Cuando configures una comunidad en producción, guíate por el README original, porque las opciones de contrato y los ejemplos se versionan con ese paquete y no con este sitio web.

## Cuándo usarlo

El desafío de llamada a contrato EVM es ideal para:

- **Comunidades con acceso por token** que limitan la publicación a quienes tienen el token.
- **Acceso con NFT**, donde hace falta ser dueño de un NFT concreto.
- **Espacios de gobernanza de una DAO** donde la participación se limita a quienes tienen el token de gobernanza.

Para comunidades que no dependen de la identidad en cadena, considera [Bloqueador de spam](./spam-blocker.md) o el [Desafío de vales](./voucher-challenge.md) en su lugar.
