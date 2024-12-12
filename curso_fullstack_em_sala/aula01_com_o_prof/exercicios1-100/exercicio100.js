let numeros = [5,10,15,20,25,30,35];

function resultado(array){
    return array.filter(numero => numero / 10)
};

console.log(resultado(numeros));