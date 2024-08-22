function generatePassword(length) {
    // Verificar si la longitud es menor a 8
    if (length < 8) {
        console.log("La longitud mínima de la contraseña es 8 caracteres.");
        return "";
    }

    // Caracteres disponibles para la contraseña
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()-_=+[]{}|;:,.<>?/";

    // Crear una combinación de todos los caracteres
    const allCharacters = upperCase + lowerCase + numbers + symbols;

    // Asegurarse de que la contraseña tenga al menos un carácter de cada tipo
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    // Completar el resto de la contraseña con caracteres aleatorios
    for (let i = password.length; i < length; i++) {
        password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }

    // Mezclar los caracteres para asegurarse de que estén en un orden aleatorio
    password = password.split('').sort(() => 0.5 - Math.random()).join('');

    return password;
}

// Ejemplo de uso:
console.log(generatePassword(8));  // Genera una contraseña de 8 caracteres
console.log(generatePassword(12)); // Genera una contraseña de 12 caracteres
