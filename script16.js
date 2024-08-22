// Selecciono el párrafo y el botón
const parrafo = document.getElementById("Mostrar o ocultar el boton");
const boton = document.getElementById("Button");

// Añado un evento al botón
boton.addEventListener("click", function () {
    // Verifico si el párrafo está oculto
    if (parrafo.style.display === "none") {
        // Si está oculto, lo muestro
        parrafo.style.display = "block";
    } else {
        // Si está visible, lo oculto
        parrafo.style.display = "none";
    }
});
