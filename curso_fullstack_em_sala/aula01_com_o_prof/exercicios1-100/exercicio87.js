let numeros = [4,5,6,7,8,9,10];

function resultado(multiplicado){
    return multiplicado.map(numero => numero * 4)
};

console.log(resultado(numeros));