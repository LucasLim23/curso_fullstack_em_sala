var numeros = [49,50,60,40,80,90]

function menoresQue50 (n){
    return n.filter(function(n){
        return n<50
    })
}

console.log(menoresQue50(numeros))