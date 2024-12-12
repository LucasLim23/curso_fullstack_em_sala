var numeros = [2,4,6]

function multiplicacaoPor4(n){
    return n.map(function(numero){
        return numero*4
    })
}

console.log(multiplicacaoPor4(numeros))