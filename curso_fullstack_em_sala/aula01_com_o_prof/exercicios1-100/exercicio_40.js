var numeros = [100, 1000, 200, 2,3]

function numerosMaiores10 (n){
    return n.filter (function(n){
        return n > 10
    })
}

console.log(numerosMaiores10(numeros))