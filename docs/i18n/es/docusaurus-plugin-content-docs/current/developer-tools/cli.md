---
title: CLI de Bitsocial
description: Interfaz de línea de comandos para ejecutar un nodo de Bitsocial, crear comunidades y gestionar operaciones del protocolo.
sidebar_position: 2
---

# CLI de Bitsocial

`bitsocial-cli` es una herramienta de línea de comandos para trabajar con el backend del protocolo Bitsocial. Permite ejecutar un demonio P2P local, crear y configurar comunidades y publicar contenido, todo desde la terminal.

Está construida sobre la capa cliente compartida del protocolo Bitsocial y la usan [5chan](/apps/5chan/) y [Seedit](/apps/seedit/) para crear comunidades y gestionar nodos.

## Instalación

Hay binarios precompilados para Windows, macOS y Linux. Descarga la última versión para tu plataforma desde GitHub:

**[Descargar desde GitHub Releases](https://github.com/bitsocialnet/bitsocial-cli/releases)**

Después de la descarga, dale permisos de ejecución al binario (macOS/Linux):

```bash
chmod +x bitsocial
```

## Ejecutar el demonio

El uso más habitual de la CLI es ejecutar un nodo de Bitsocial. El demonio arranca la capa de red P2P y expone una API local a la que se pueden conectar los clientes.

```bash
bitsocial daemon
```

En el primer arranque, el demonio muestra enlaces a la **WebUI**, una interfaz gráfica basada en navegador para gestionar tu nodo, tus comunidades y su configuración. Resulta útil si prefieres una interfaz gráfica a los comandos de terminal.

## Acciones principales

| Acción                     | Descripción                                                          |
| -------------------------- | -------------------------------------------------------------------- |
| Arrancar el demonio        | Poner en marcha el nodo P2P de Bitsocial                             |
| Crear una comunidad        | Crear una comunidad nueva                                            |
| Editar una comunidad       | Actualizar los ajustes de la comunidad (título, descripción, reglas) |
| Listar comunidades locales | Listar las comunidades alojadas en este nodo                         |
| Iniciar una comunidad      | Empezar a servir una comunidad concreta                              |
| Detener una comunidad      | Dejar de servir una comunidad concreta                               |

Ejecuta la CLI con `--help` para ver los nombres de comando y las opciones que expone la versión que tienes instalada:

```bash
bitsocial --help
bitsocial daemon --help
```

## Flujo de trabajo típico

Un flujo de configuración habitual para alojar una comunidad nueva:

```bash
# 1. Start the daemon
bitsocial daemon

# 2. In another terminal, inspect the available community-management commands
bitsocial --help
```

A partir de ahí, usa los comandos de gestión de comunidades de la versión instalada para crear, configurar y empezar a servir una comunidad. Una vez iniciada, la comunidad está activa en la red de Bitsocial y es accesible desde clientes compatibles.

## Enlaces

- **GitHub:** [bitsocialnet/bitsocial-cli](https://github.com/bitsocialnet/bitsocial-cli)
