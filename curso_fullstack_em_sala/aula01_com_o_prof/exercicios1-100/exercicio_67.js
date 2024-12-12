var numeros = [5,6,8]

function soma5(numero){
    return numero.map(function(n){
        return n+5
    })
}


console.log(soma5(numeros))