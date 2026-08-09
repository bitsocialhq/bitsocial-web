---
title: Bitsocial Chain
description: Fase 2 del plan maestro, dedicada a la capa económica propuesta como appchain L2 de Ethereum para las aplicaciones de Bitsocial.
---

# Bitsocial Chain

Bitsocial Chain es la capa económica propuesta como appchain L2 de Ethereum para las aplicaciones de
Bitsocial. El sitio dedicado actualmente a la cadena es
[chain.bitsocial.net](https://chain.bitsocial.net).

La capa social peer-to-peer permite que las comunidades, las identidades y el contenido vivan fuera
de la base de datos central de una plataforma. Bitsocial Chain pretende añadir las primitivas
compartidas de nombres, monetización y pagos que hacen más difícil asfixiar económicamente a esas
aplicaciones.

## Qué debería hacer posible

- dominios descentralizados de Bitsocial como `.bso`
- premios y propinas
- vías de monetización duraderas
- liquidez compartida entre aplicaciones
- estructuras financieras más difíciles de cortar para bancos o plataformas
- efectos de red que no dependan de que una sola empresa sea dueña de toda la pila

El objetivo no es empezar por la mecánica del token. El objetivo es que las aplicaciones sociales
útiles sean más duraderas, más fáciles de financiar y menos dependientes de proveedores centralizados
de pagos o de nombres.

## Prueba de concepto actual

La primera prueba de concepto de Bitsocial Chain se centra en los nombres nativos `.bso`. Demuestra
que un registro de nombres puede derivarse del historial de la L1 de Ethereum sin llevar el contenido
social a la cadena:

- los usuarios envían intenciones de registro, actualización, transferencia y revocación mediante
  transacciones normales en la L1 de Ethereum
- cualquiera puede ejecutar el nodo de derivación y reconstruir ese mismo estado del registro `.bso`
- un resolutor asocia cada nombre `.bso` con la clave pública de Bitsocial que los clientes ya usan
  sobre el protocolo peer-to-peer
- las publicaciones, los votos, la moderación, los feeds y el contenido de las comunidades se quedan
  fuera de la cadena y en peer-to-peer

Esa prueba de concepto no es un lanzamiento en producción de Stage 2. Todavía no tiene sistema de
pruebas, juego de desafíos, código auditado, despliegue en vivo, precios definitivos ni gobernanza
definitiva. Su postura a largo plazo es transparente por defecto y compatible con la privacidad por
diseño: la cadena principal es pública, mientras que las futuras propinas, pagos, premios y liquidez
deberían evitar forzar vínculos permanentes entre la identidad social y el historial de la wallet.

## Por qué importa

Descentralizar las comunidades y las identidades es necesario, pero no basta para descentralizar
todas las redes sociales.

Si las aplicaciones sociales siguen dependiendo de unas pocas vías económicas centralizadas, siguen
siendo fáciles de presionar, de expulsar o de asfixiar económicamente. Bitsocial Chain es la
respuesta propuesta a esa segunda capa de dependencia.

## Relación con las aplicaciones

Bitsocial Chain debería situarse por debajo de las aplicaciones de Bitsocial, no sustituirlas.

De cara al público, el resultado debería ser:

- las comunidades siguen siendo peer-to-peer
- las aplicaciones mantienen sus diferencias
- los usuarios obtienen funciones prácticas de nombres y monetización
- los creadores y las comunidades pueden recibir apoyo desde cualquier cliente
- el valor puede circular por el ecosistema sin recrear a un dueño centralizado de la plataforma

## Por qué llega tan pronto

El plan maestro actual coloca a Bitsocial Chain justo después de las primeras categorías de entrada:
imageboards, foros y la capa pública de RPC que hace que esas aplicaciones resulten prácticas para
más usuarios.

Ese calendario importa porque las aplicaciones sociales necesitan efectos de red fuertes. Si los
nombres, el apoyo, los premios, las propinas y la monetización llegan demasiado tarde, los
competidores centralizados conservan su mayor ventaja durante demasiado tiempo.

## Principios de diseño

Como Bitsocial Chain sigue siendo infraestructura propuesta y no un producto lanzado, el plan debe
mantenerse disciplinado:

- Primero las aplicaciones y las comunidades. La capa de red debería fortalecer productos sociales
  reales.
- Primero las funciones prácticas. Los nombres, los premios, las propinas y los pagos son más fáciles
  de explicar que una arquitectura financiera abstracta.
- Contribución real antes que hype. Las primitivas económicas deberían recompensar la participación,
  la construcción y el apoyo a la comunidad.
- La curación está permitida. Las aplicaciones pueden dar forma a los rankings, los valores por
  defecto y el descubrimiento para favorecer a las comunidades duraderas.
- La mecánica exacta sigue abierta. Esta página explica el papel de Bitsocial Chain, no una promesa
  cerrada sobre la economía final.
