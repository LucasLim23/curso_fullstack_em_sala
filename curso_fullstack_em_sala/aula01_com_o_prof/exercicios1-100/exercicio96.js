let numeros = [9,18,27,36,4,2,3,2,1];

function resultado(multiplos){
    return multiplos.filter(numero => numero % 9 === 0)
};

console.log(resultado(numeros));