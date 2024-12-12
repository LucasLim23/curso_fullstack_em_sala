var numeros = [ 2,4,8,9]

function multiPorTres(n){
    return n.map (function(n){
        return n*3
    })
}

console.log(multiPorTres(numeros))