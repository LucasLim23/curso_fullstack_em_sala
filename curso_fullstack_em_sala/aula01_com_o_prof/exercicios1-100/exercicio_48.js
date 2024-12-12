numeros = [3,5,4,8,7]

function numImpares (n){
    return n.filter(function(n){
        return n%2==1
    })
}

console.log(numImpares(numeros))