var numeros = [10,22,8,47]

function menoresQue30 (n){
    return n.filter(function(n){
        return n<30
    })
}

console.log(menoresQue30(numeros))