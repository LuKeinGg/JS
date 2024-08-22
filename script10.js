function getSum(nums) {
    const valorInicial = 0;
    const sum = nums.reduce((acc, num) => acc + num, valorInicial);
    return sum;
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

console.log(getSum(numeros)); // Salida: 210