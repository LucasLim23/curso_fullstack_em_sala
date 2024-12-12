var numeros = [6,12,4, 9]

function divisivelpor6(n){
    return n.filter(function(n){
        return n%6==0
    })
}

console.log(divisivelpor6(numeros))