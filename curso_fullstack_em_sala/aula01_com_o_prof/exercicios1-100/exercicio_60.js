var numeros = [12, 7, 49]

function divisiveisPor7(n){
    return n.filter(function(n){
        return n%7==0
    })
}

console.log(divisiveisPor7(numeros))