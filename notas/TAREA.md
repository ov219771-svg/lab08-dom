# Tarea: Mi componente interactivo

## Componente elegido

Elegí una lista de tareas para organizar mis actividades de estudio.

## Versión 1: solo DOM

Agregué un título, dos tareas iniciales y un contador.
Lo hice para construir la estructura antes de agregar eventos.
La página muestra las tareas, pero todavía no permite agregarlas desde el formulario.

```js
const titulo = document.querySelector("#titulo");
const listaTareas = document.querySelector("#listaTareas");
const resumen = document.querySelector("#resumen");

titulo.textContent = "Mi lista de tareas";

const tareasIniciales = [
  "Estudiar JavaScript",
  "Completar el laboratorio"
];

tareasIniciales.forEach((nombre) => {
  const li = document.createElement("li");
  li.textContent = nombre;
  listaTareas.appendChild(li);
});

resumen.textContent = "Total de tareas: " + tareasIniciales.length;
```

## Versión 2: con eventos

Pendiente.

## Versión 3: con clases y objetos

Pendiente.

## Dónde uso DOM, eventos y objetos

Pendiente.

## Pruebas realizadas

Pendiente.

## Por qué diseñé así mi clase

Pendiente.