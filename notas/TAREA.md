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

Agregué los eventos input, submit y click para escribir, agregar,
completar y borrar tareas. También validé que el campo no esté vacío.

Lo hice para manejar la lista desde la página. Ahora puedo agregar
tareas, marcarlas, borrarlas y ver cómo cambia el contador.

```js
// Versión 2: DOM y eventos
const titulo = document.querySelector("#titulo");
const formulario = document.querySelector("#formTarea");
const nombreTarea = document.querySelector("#nombreTarea");
const mensaje = document.querySelector("#mensaje");
const vistaPrevia = document.querySelector("#vistaPrevia");
const listaTareas = document.querySelector("#listaTareas");
const resumen = document.querySelector("#resumen");

titulo.textContent = "Mi lista de tareas";

function actualizarResumen() {
  resumen.textContent =
    "Total de tareas: " + listaTareas.children.length;
}

function agregarTarea(nombre) {
  const li = document.createElement("li");

  const texto = document.createElement("span");
  texto.textContent = nombre + " ";

  const completar = document.createElement("button");
  completar.type = "button";
  completar.textContent = "Completar";

  completar.addEventListener("click", () => {
    texto.classList.toggle("completada");
    completar.textContent = texto.classList.contains("completada")
      ? "Desmarcar"
      : "Completar";
  });

  const borrar = document.createElement("button");
  borrar.type = "button";
  borrar.textContent = "Borrar";

  borrar.addEventListener("click", () => {
    li.remove();
    actualizarResumen();
  });

  li.appendChild(texto);
  li.appendChild(completar);
  li.appendChild(borrar);
  listaTareas.appendChild(li);

  actualizarResumen();
}

agregarTarea("Estudiar JavaScript");
agregarTarea("Completar el laboratorio");

nombreTarea.addEventListener("input", () => {
  vistaPrevia.textContent = "Escribiendo: " + nombreTarea.value;
  mensaje.textContent = "";
});

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nombre = nombreTarea.value.trim();

  if (nombre === "") {
    mensaje.textContent = "Escribe una tarea antes de agregar.";
    mensaje.classList.add("error");
    return;
  }

  agregarTarea(nombre);

  mensaje.textContent = "Tarea agregada.";
  mensaje.classList.remove("error");
  formulario.reset();
  vistaPrevia.textContent = "";
});
```

## Versión 3: con clases y objetos

Pendiente.

## Dónde uso DOM, eventos y objetos

Pendiente.

## Pruebas realizadas

Pendiente.

## Por qué diseñé así mi clase

Pendiente.