function convertToCelsius(temp) {
    let resultado = (temp - 32) * 5 / 9;
    return parseFloat(resultado.toFixed(1)); // Redondea a 1 decimal
}

function convertToFahrenheit(temp) {
    return parseFloat((temp * 9 / 5 + 32).toFixed(1)); // Redondea a 1 decimal
}

console.log(convertToCelsius(100));  // Deberia dar 37.8
console.log(convertToFahrenheit(37.8));  // Deberia dar 100.0
