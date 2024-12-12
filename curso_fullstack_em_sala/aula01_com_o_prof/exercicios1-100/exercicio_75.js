var numeros = [2,3,4]

function elevadoAQuartaPot(n){
    return n.map(function(n){
        return n*n*n*n
    })
}

console.log(elevadoAQuartaPot(numeros))