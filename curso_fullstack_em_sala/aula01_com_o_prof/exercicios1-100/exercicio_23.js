let numeros = [1,2,3,4,5,6,7];

function resultado(soma){
    return soma.reduce((acumulador,atual)=>acumulador + atual,0);
}

console.log(resultado(numeros));