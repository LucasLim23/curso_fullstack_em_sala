let numeros = [2,3,4,6,9,7,8]

let numPares = numeros.filter(function(numP){
    return numP %2 ==0
})

console.log(numPares)