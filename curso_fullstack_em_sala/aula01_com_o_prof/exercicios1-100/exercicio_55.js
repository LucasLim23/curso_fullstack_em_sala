var numeros = [2,3,5,7.35]

function divisaoPorDois (n){
    return n.map(function(n){
        return (n/2).toFixed(2)
    })
}

console.log(divisaoPorDois(numeros))