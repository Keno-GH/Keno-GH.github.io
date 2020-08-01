---
title: 'Encargo 04: Mecanizado 2.5D'
date: 2020-06-17T19:30:08+10:00
draft: false
weight: 4
summary: 
---

Se nos solicita hacer un mecanizado 2.5D al respaldo de la silla que trabajamos en el encargo del mecanizado simple.

---

## ¿Qué es el mecanizado 2.5D?

El mecanizado 2.5D es un tipo de mecanizado donde la maquina se mueve libremente por el eje X e Y, pero el eje Z no permite rotación, solo cambios de elevación.

![Infografia1](/img/Mecanizado_2.5D/Ejemplo_de_limitaciones_del_mecanizado_2.5D.jpg)

Esto permite hacer gradientes desde arriba hacia abajo con maquinas de relativo bajo costo en comparación a una maquina con completa capacidad de maquinado 3D.
Un mecanizado 2D es, como su nombre sugiere, sin cambios en el eje Z, lo que significa que es un corte en un objeto.

## Trabajando el respaldo

El tutorial que se nos entregó solo explica como hacer la cara superior o frontal del respaldo. Mostraré paso a paso como hice el mecanizado 2.5D completo.

### Cara superior

Para esta parte seguí el tutorial al pie de la letra. Grabé este procedimiento y lo procese en un video a alta velocidad donde se puede ver parte de mi trabajo.

{{< vimeo 442406422 >}}

Parte de este proceso fue modificar las fresas para que tuvieran la longitud adecuada para este trabajo.

![Fresa1](/img/Mecanizado_2.5D/Fresa1.png)

También se debe usar una fresa de punta redonda para las terminaciones.

![Fresa2](/img/Mecanizado_2.5D/Fresa2.png)

### Cara inferior

Para empezar, hice un setup nuevo con el objeto volteado con la misma maquina y configuraciones similares a la cara superior, y repetí los procesos de la superior.

![Frame1](/img/Mecanizado_2.5D/frame1.png)

Me preocupe de asignar las fresas correctas, de punta plana para el sacado de relleno y de punta redonda para las terminaciones.

Nuevamente, hice un video en velocidad rápida de este proceso. En el principio me confundí con la configuración correcta, pero eventualmente lo logré.

{{< vimeo 443838989 >}}

## Optimizado de velocidad

Al tener toda el proceso ya configurado, pude revisar los tiempos de trabajo. Eran en total más de 4 horas de trabajo.

![Frame2](/img/Mecanizado_2.5D/frame2.png)

Investigando un poco, me di cuenta de que la maquina estaba configurada para trabajar con metal, lo que probablemente influía en gran medida con la velocidad del mecanizado, ya que el metal es mucho más duro y denso que la madera. Para saber la velocidad con la que la maquina debía pasar, sin embargo, me dediqué a investigar acerca de la terminología en la configuración de la maquina.

![Frame3](/img/Mecanizado_2.5D/frame3.png)

Me percaté de que probablemente la velocida de corte era la métrica que tenía que reconfigurar. Encontré esta útil tabla que daba los valores recomendades de velocidad de corte, y la utilicé para establecer la velocidad de corte en la maquina.

![Frame4](/img/Mecanizado_2.5D/frame4.png)

Fuente: https://stepcraft.odoo.com/milling-parameters

Esta es la configuración final en mi mecanizado, considerando que mis fresas son de 6mm. Notese que el cambio importante es el feedrate per tooth, donde el valor recomendado es de 0.085 mm

![Frame5](/img/Mecanizado_2.5D/frame5.png)

## Resultado final y conclusiones

Con estas configuraciones, la velocidad del mecanizado completo se reduce a 3:37:37.

![Frame6](/img/Mecanizado_2.5D/frame6.png)

Es probable que hayan mejores configuraciones con las cuales se pueda reducir con seguridad aun más el tiempo de mecanizado, pero hay muchos conceptos que aun escapan de mi entendimiento. Sin embargo, aprendí mucho gracias a toda esta experimentación. Tengo muchas ganas de tener acceso a este tipo de máquinas en el futuro.