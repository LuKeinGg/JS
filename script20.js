// Selecciono la imagen por su ID
const imagen = document.getElementById("miImagen");

// Ruta de la imagen original
const imagenOriginal = "imagen-original.jpg";

// Ruta de la nueva imagen que se mostrará al pasar el mouse por encima
const nuevaImagen = "PerroRiendo.jpg";

// Evento que cambia la imagen al pasar el mouse por encima
imagen.addEventListener("mouseover", function () {
    imagen.src = nuevaImagen;
});

// Evento que vuelve a la imagen original cuando se retira el mouse
imagen.addEventListener("mouseout", function () {
    imagen.src = imagenOriginal;
});
