var numeros = [25, 41, 42]

function maioresque25 (n){
    return n.filter(function(numero){
        return numero>25
    })
}

console.log(maioresque25(numeros))