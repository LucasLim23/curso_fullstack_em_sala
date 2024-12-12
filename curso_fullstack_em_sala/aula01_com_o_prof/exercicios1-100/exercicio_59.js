var numeros = [3,6,9]

function numeroAoCubo(n){
    return n.map(function(n){
        return n*n*n
    })
}

console.log(numeroAoCubo(numeros))