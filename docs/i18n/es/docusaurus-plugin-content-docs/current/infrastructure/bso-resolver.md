---
title: BSO Resolver
description: Resuelve nombres de dominio .bso a claves públicas mediante los registros TXT de Bitsocial.
sidebar_position: 1
---

# BSO Resolver

BSO Resolver traduce los nombres de dominio `.bso` a sus claves públicas correspondientes leyendo los registros TXT de Bitsocial. Es el paquete de resolución que usan las herramientas de Bitsocial cuando un nombre `.bso` de cara al usuario tiene que convertirse en el material de clave que entiende la pila peer-to-peer.

- **Código fuente y README actual:** [github.com/bitsocialnet/bso-resolver](https://github.com/bitsocialnet/bso-resolver#readme)
- **Paquete de npm:** [`@bitsocial/bso-resolver`](https://www.npmjs.com/package/@bitsocial/bso-resolver)

## Instalación

```bash
npm install @bitsocial/bso-resolver
```

## Dónde encaja

Los nombres de Bitsocial están pensados como puntos de entrada legibles para comunidades y autores. El resolutor mantiene esa capa de nombres separada del código de la aplicación, de modo que los clientes pueden preguntar si un nombre es compatible y resolverlo después a través del punto de entrada que corresponde a cada entorno de ejecución del paquete.

Úsalo cuando estés integrando un cliente, una herramienta de línea de comandos o un servicio compatible con Bitsocial que necesite aceptar nombres `.bso` y no solo claves públicas en bruto.

## Referencia del paquete actual

Esta página es a propósito una visión general, y no una copia de la referencia de la API. El README del paquete es la fuente de verdad para las opciones del constructor, los tipos de retorno, el comportamiento de la caché, los puntos de entrada, los ejemplos de proveedores y la semántica de apagado admitida:

- [README de BSO Resolver](https://github.com/bitsocialnet/bso-resolver#readme)

Guíate por el README upstream cuando copies código a un proyecto, porque el comportamiento del resolutor se versiona con ese paquete y no con este sitio web.
