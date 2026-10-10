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