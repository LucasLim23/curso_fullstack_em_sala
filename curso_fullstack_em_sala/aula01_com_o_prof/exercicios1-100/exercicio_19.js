let numeros = [2,3,5,8,9]


function menorNumero (numeros){
    let menor = Math.min(...numeros)

    return menor
}



console.log (menorNumero(numeros))