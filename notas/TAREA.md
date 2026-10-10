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

Creé la clase Tarea con los atributos nombre y completada, y los
métodos cambiarEstado() y descripcion().

Lo hice para guardar el nombre y el estado de cada tarea en un objeto.
Ahora la lista se genera desde esos objetos y muestra cuántas tareas
están completadas.

```js
// Versión 3: DOM, eventos, clases y objetos
class Tarea {
  constructor(nombre, completada = false) {
    this.nombre = nombre;
    this.completada = completada;
  }

  cambiarEstado() {
    this.completada = !this.completada;
  }

  descripcion() {
    return this.nombre;
  }
}

const titulo = document.querySelector("#titulo");
const formulario = document.querySelector("#formTarea");
const nombreTarea = document.querySelector("#nombreTarea");
const mensaje = document.querySelector("#mensaje");
const vistaPrevia = document.querySelector("#vistaPrevia");
const listaTareas = document.querySelector("#listaTareas");
const resumen = document.querySelector("#resumen");

titulo.textContent = "Mi lista de tareas";

const tareas = [
  new Tarea("Estudiar JavaScript"),
  new Tarea("Completar el laboratorio")
];

function mostrarTareas() {
  listaTareas.textContent = "";

  tareas.forEach((tarea) => {
    const li = document.createElement("li");

    const texto = document.createElement("span");
    texto.textContent = tarea.descripcion() + " ";
    texto.classList.toggle("completada", tarea.completada);

    const completar = document.createElement("button");
    completar.type = "button";
    completar.textContent = tarea.completada
      ? "Desmarcar"
      : "Completar";

    completar.addEventListener("click", () => {
      tarea.cambiarEstado();
      mostrarTareas();
    });

    const borrar = document.createElement("button");
    borrar.type = "button";
    borrar.textContent = "Borrar";

    borrar.addEventListener("click", () => {
      const posicion = tareas.indexOf(tarea);
      tareas.splice(posicion, 1);
      mostrarTareas();
    });

    li.appendChild(texto);
    li.appendChild(completar);
    li.appendChild(borrar);
    listaTareas.appendChild(li);
  });

  const completadas = tareas.filter((tarea) => tarea.completada).length;

  resumen.textContent =
    "Total de tareas: " + tareas.length +
    " | Completadas: " + completadas;
}

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

  tareas.push(new Tarea(nombre));
  mostrarTareas();

  mensaje.textContent = "Tarea agregada.";
  mensaje.classList.remove("error");
  formulario.reset();
  vistaPrevia.textContent = "";
});

mostrarTareas();
```
Creé la clase Tarea con los atributos nombre y completada, y los
métodos cambiarEstado() y descripcion().

Lo hice para guardar el nombre y el estado de cada tarea en un objeto.
Ahora la lista se genera desde esos objetos y muestra cuántas tareas
están completadas.

## Dónde uso DOM, eventos y objetos

| Parte | Código | Para qué sirve |
|---|---|---|
| DOM | document.createElement("li") | Crea el elemento de cada tarea. |
| DOM | listaTareas.appendChild(li) | Muestra la tarea en la página. |
| Evento input | nombreTarea.addEventListener("input", ...) | Muestra lo que escribo. |
| Evento submit | formulario.addEventListener("submit", ...) | Valida y agrega una tarea. |
| Evento click | completar.addEventListener("click", ...) | Marca o desmarca una tarea. |
| Objeto | new Tarea(nombre) | Guarda el nombre y el estado de una tarea. |

## Pruebas realizadas

| Acción | Resultado esperado | Resultado obtenido | Cumple (Sí/No) |
|---|---|---|---|
| Escribir una tarea | Aparece la vista previa. | Por comprobar | Por comprobar |
| Agregar una tarea | Aparece en la lista y aumenta el total. | Por comprobar | Por comprobar |
| Enviar el campo vacío | Aparece un mensaje rojo. | Por comprobar | Por comprobar |
| Enviar solo espacios | No agrega la tarea y muestra un error. | Por comprobar | Por comprobar |
| Pulsar Completar | Tacha la tarea y aumenta las completadas. | Por comprobar | Por comprobar |
| Pulsar Desmarcar | Quita el tachado y disminuye las completadas. | Por comprobar | Por comprobar |
| Pulsar Borrar | Elimina la tarea y disminuye el total. | Por comprobar | Por comprobar |

## Por qué diseñé así mi clase

Usé nombre para identificar la tarea y completada para guardar su
estado. El método cambiarEstado() permite marcarla o desmarcarla,
y descripcion() devuelve el texto que muestro en la página.
Así cada objeto guarda los datos y el comportamiento de una tarea.