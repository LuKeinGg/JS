// Selecciono el campo de texto por su ID
const campoTexto = document.getElementById("campoTexto");

// Evento para cuando el campo de texto está enfocado
campoTexto.addEventListener("focus", function () {
    campoTexto.classList.add("focused");
});

// Evento para cuando el campo de texto pierde el foco
campoTexto.addEventListener("blur", function () {
    campoTexto.classList.remove("focused");
});
