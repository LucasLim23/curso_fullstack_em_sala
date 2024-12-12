var numeros = [5,8,4,4312,1635]

function divisiveispor4(n){
    return n.filter(function(n){
        return n%4==0
    })
}

console.log(divisiveispor4(numeros))