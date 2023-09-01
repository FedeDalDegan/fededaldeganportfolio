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

// Modo obscuro

const toggleModeButton = document.getElementById("toggle-mode");
const body = document.body;

window.addEventListener("load", function() {
  const isDarkModeSaved = localStorage.getItem("darkModeEnabled");
  if (isDarkModeSaved === "true") {
    body.classList.add("dark-mode");
  }
});

toggleModeButton.addEventListener("click", function() {
  body.classList.toggle("dark-mode");
  const isDarkMode = body.classList.contains("dark-mode");
  localStorage.setItem("darkModeEnabled", isDarkMode); // Guardar el estado en el almacenamiento local
});


