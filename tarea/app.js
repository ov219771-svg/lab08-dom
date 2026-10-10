// Versión 1: solo DOM
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