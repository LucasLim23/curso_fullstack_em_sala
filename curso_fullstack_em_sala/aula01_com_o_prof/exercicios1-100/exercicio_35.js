let numeros = [2,4,6]

function reducaoPorUm(n){
    return n.map(function(n){
        return n-1
    })
}

console.log(reducaoPorUm(numeros))