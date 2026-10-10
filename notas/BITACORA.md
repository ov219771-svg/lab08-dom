# Bitacora de JavaScript interactivo

Laboratorio 08: JavaScript Interactivo - DOM, Eventos y Objetos.

Navegador usado: escribe aquí el navegador que usaste.

## Ejercicio 2: Seleccionar y modificar el DOM

| Instrucción | Qué cambió en la pantalla | Se mantiene al recargar (Sí/No) |
|---|---|---|
| textContent desde la consola | Cambié el título a Hola desde la consola. | No |
| textContent desde app.js | Cambié el título a Hola TECSUP. | Sí |
| style.color | Cambié el color del título a azul. | Sí |
| classList.add | Agregué un fondo amarillo al párrafo. | Sí |
| createElement + appendChild | Agregué JavaScript a la lista. | Sí |

## Ejercicio 3: Evento click

| Tipo de evento | Qué acción lo dispara | Cuánto suma por acción |
|---|---|---|
| click | Hacer un clic en el botón. | 1 |
| dblclick | Hacer doble clic en el botón. | 1 |
| mouseover | Pasar el puntero sobre el botón. | 1 |

evento.type mostró el tipo de evento: click, dblclick o mouseover.
evento.target mostró el botón que recibió el evento.

## Ejercicio 4: Eventos input y submit

| Prueba | Qué pasó en la pantalla | Se recargó la página (Sí/No) |
|---|---|---|
| Escribir en el campo nombre | El saludo cambió mientras escribía mi nombre. | No |
| Enviar sin preventDefault | La página se recargó y el campo quedó vacío. | Sí |
| Enviar con preventDefault, correo sin @ | Apareció el mensaje de error en rojo. | No |
| Enviar con preventDefault, correo con @ | Apareció Enviado seguido del correo. | No |

## Ejercicio 5: Clases y objetos

| Objeto | nombre | precio | descripcion() | conDescuento(0.25) |
|---|---|---|---|---|
| laptop | Laptop | 2500 | Laptop - S/ 2500.00 | 1875 |
| mouse | Mouse | 45 | Mouse - S/ 45.00 | 33.75 |
| teclado | Teclado | 120 | Teclado - S/ 120.00 | 90 |
| monitor | Monitor | 680 | Monitor - S/ 680.00 | 510 |

La clase me permitió crear productos con la misma estructura sin repetir código.
Pude agregar el monitor a la lista sin modificar el HTML.

## Ejercicio 6: DOM, eventos y objetos juntos