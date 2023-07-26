// Hamburguesa

// Obtener referencias a los botones y la navegación
const abrirBtn = document.getElementById("abrir");
const cerrarBtn = document.getElementById("cerrar");
const nav = document.getElementById("nav");

// Agregar eventos click para mostrar y ocultar la navegación
abrirBtn.addEventListener("click", function() {
  nav.classList.add("visible");
});

cerrarBtn.addEventListener("click", function() {
  nav.classList.remove("visible");
});