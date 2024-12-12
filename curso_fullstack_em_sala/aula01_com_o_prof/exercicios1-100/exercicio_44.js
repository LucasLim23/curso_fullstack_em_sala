var numeros = [2,4,5,9,8,7]

function divisiveisPorDois (n){
    return n.filter(function(n){
        return n %2==0 
    })

    
}

console.log (divisiveisPorDois(numeros))