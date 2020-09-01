---
title: 'Encargo 02: Mecanizado Simple'
date: 2020-06-17T19:30:08+10:00
draft: false
weight: 4
summary: 
---

Se pide utilizar Fusion 360 para preparar maquina de cortado con fresa para una silla y grabar el cortado.

---

## Introducción

El mecanizado que trabajamos acá se basa en usar una fresa que corta las piezas en un mecanizado con un eje Z que cambia solo en "pisos" (en vez de un gradiente). Se trabaja una silla diseñada para este tipo de maquinas, aunque no todas las piezas pueden ser trabajadas con este mecanizado, como el respaldo o el asiento, las cuales requieren otro tipo de trabajo.

Para este mecanizado, se usan herramientas simples. Especifamente Pocket y Contour.

Pocket simplemente fresa un volumen del material, y contour fresa un contorno alrededor de la figura que buscamos crear.

Acá cabe destacar que el contour debe ser configurado para dejar "orejas" uniendo el material que estamos fresando con la pieza, las cuales deben ser cortadas manualmente despues de que la maquina termine su trabajo. Esto se hace para que la pieza no se mueva libremente, lo que pondría en riesgo la máquina fresadora y potencialmente arruinaría la pieza. 

## Imagenes del modelo

![draw1](/img/Mecanizado_Simple/draw-01.png)
![draw2](/img/Mecanizado_Simple/draw-02.png)
![draw3](/img/Mecanizado_Simple/draw-03.png)
![draw4](/img/Mecanizado_Simple/draw-04.png)
![draw5](/img/Mecanizado_Simple/draw-05.png)
![draw6](/img/Mecanizado_Simple/draw-06.png)

## Iframe

{{< iframe-fusion >}}

## Video de mecanizado

{{< video-local src="video_mecanizado_simple.mp4" >}}