// Selecciono los elementos del formulario
const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const password = document.getElementById("password");
const email = document.getElementById("email");

// Selecciono los elementos para mostrar errores
const errorNombre = document.getElementById("errorNombre");
const errorPassword = document.getElementById("errorPassword");
const errorEmail = document.getElementById("errorEmail");

// Función para validar el campo de nombre
function validarNombre() {
    if (nombre.value.trim() === "") {
        errorNombre.textContent = "El nombre es obligatorio.";
        return false;
    } else {
        errorNombre.textContent = "";
        return true;
    }
}

function validarPassword() {
    if (password.value.length < 8) {
        errorPassword.textContent = "La contraseña debe tener al menos 8 caracteres.";
        return false;
    } else {
        errorPassword.textContent = "";
        return true;
    }
}

function validarEmail() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email.value)) {
        errorEmail.textContent = "El correo electrónico no es válido.";
        return false;
    } else {
        errorEmail.textContent = "";
        return true;
    }

}


//Añado eventos a los elementos del formulario
nombre.addEventListener("input", validarNombre);
password.addEventListener("input", validarPassword);
email.addEventListener("input", validarEmail);

// Valido el formulario al enviarlo
formulario.addEventListener("submit", function (event) {
    const nombreValido = validarNombre();
    const passwordValido = validarPassword();
    const emailValido = validarEmail();

    if (!nombreValido || !passwordValido || !emailValido) {
        event.preventDefault(); // Esto evita que se envíe el formulario si hay errores
    } else {
        event.preventDefault(); // Evita el envío del formulario para mostrar el mensaje de éxito
        mensajeExito.textContent = "El formulario ha sido enviado correctamente.";

        // Esto es para que se limpien los campos del formulario
        nombre.value = "";
        password.value = "";
        email.value = "";
    }
});