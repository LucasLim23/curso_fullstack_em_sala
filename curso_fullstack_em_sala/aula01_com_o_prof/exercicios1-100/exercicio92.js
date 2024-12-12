let numeros = [37,36,35,34,33,32,31];

function resultado(menores){
    return menores.filter(numero => numero <35)
};

console.log(resultado(numeros));