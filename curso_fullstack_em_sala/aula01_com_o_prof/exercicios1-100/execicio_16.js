s
let numeros = [10, 20, 30, 40, 50];


let soma = 0;


let i = 0;


while (i < numeros.length) {
    soma += numeros[i]; 
    i++;
}

// Imprime o resultado da soma
console.log("A soma de todos os números é: " + soma);