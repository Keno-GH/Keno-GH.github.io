---
title: 'Bonus 01: Mecanizado Mesa'
date: 2020-06-17T19:30:08+10:00
draft: false
weight: 4
summary: 
---

En este bonus se pide generar un mecanizado a un modelo 3D dado o un modelo extra y generar planimetrías.

---

## Introduccion

Este trabajo fue demasiado desafiante para mi habilidad actual, ya que no pude alinear correctamente la mesa con el eje X sin que esta explotara. Sin embargo, me ayudó a entender mejor las herramientas de mecanizado. La falta de tutorial me dió libertad creativa para entender cual sería el mejor set de herramientas para el mecanizado de esta mesa.

![modelo](/img/Bonus_01/modelo.png)

## Pasos de mecanizado

El primer paso es un 2D contour con un flat end mill de 6mm, este solo pasa por los objetos más simples y los agujeros circulares de suficiente tamaño.
![paso1foto](/img/Bonus_01/paso1foto.png)
![flatendmill6](/img/Bonus_01/flatendmill6.png)

El siguiente paso es un 2D contour con un flat end mill de 4mm. Este es el que hace la mayoría de los contour de las piezas. Es necesario usar una fresa más pequeña para poder complir con el requerimiento de detalles de las piezas.
![paso2foto](/img/Bonus_01/paso2foto.png)
![flatendmill4](/img/Bonus_01/flatendmill4.png)

El paso 3 es un pocket clearing para los gradientes de ls superficie de la mesa y para unos pockets en otra pieza. Este tambien usa un flat end mill de 4mm.
![paso3foto](/img/Bonus_01/paso3foto.png)

El paso 4 es un 2D contour para los agujeros pequeños. Este usa un flat end mill de 2mm.
![paso4foto](/img/Bonus_01/paso4foto.png)
![flatendmill2](/img/Bonus_01/flatendmill2.png)

El utlimo paso son dos parallel perpendiculares con un ball end mill de 3mm. Este se usa solo para terminaciones por donde se hizo pocket clearing en el paso 3.
![paso5foto](/img/Bonus_01/paso5foto.png)
![ballendmill3](/img/Bonus_01/ballendmill3.png)

### video

{{< video-local src="Bonus_01/machining.mp4" >}}