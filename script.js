let root = document.documentElement;

root.addEventListener("mousemove", (e) => {
  root.style.setProperty("--mouse-x", e.clientX + "px");
  root.style.setProperty("--mouse-y", e.clientY + "px");
});

// Funcion para mostrar una seccion y ocultar las demas.
function mostrarSeccion(idSeccion) {
  const secciones = document.getElementsByClassName('seccion');

  for (let i = 0; i < secciones.length; i++) {
    secciones[i].classList.remove('seccion-visible');
  }

  const seccionMostrar = document.getElementById(idSeccion);
  if (seccionMostrar) {
    seccionMostrar.classList.add('seccion-visible');
  }
}