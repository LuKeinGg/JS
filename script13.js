// Selecciono el párrafo y el botón por su ID
const parrafo = document.getElementById("miParrafo");
const boton = document.getElementById("miBoton");

// Aca añado un evento de clic al botón
boton.addEventListener("click", function () {
    // Aca cambio el texto del párrafo
    parrafo.textContent = "Texto cambiado";
});