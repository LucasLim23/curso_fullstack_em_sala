var numeros = [2,4,6,5,8,7]

function numerosDobrados(numero){
    return numero.map(function(n){
        
        return n*2
    })
}

console.log(numerosDobrados(numeros))