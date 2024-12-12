var numeros = [2.4258, 5.5336]

function numerosAbreviados(num){
    return num.map (function (n){
        return n.toFixed(2)
    })
}

console.log(numerosAbreviados(numeros))