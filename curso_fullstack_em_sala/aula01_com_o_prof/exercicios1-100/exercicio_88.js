var numeros = [8, 21, 19, 9]

function imparesEmenoresQue20 (n){
    return n.filter (function(numero){
        return numero%2==1 && numero<20
    })
}

console.log(imparesEmenoresQue20(numeros))