let numeros = [5,6,7,8,9,10];

function resultado(potencia){
    return potencia.map(numero => Math.pow(numero,5))
};

console.log(resultado(numeros));