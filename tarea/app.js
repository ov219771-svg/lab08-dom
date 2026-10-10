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