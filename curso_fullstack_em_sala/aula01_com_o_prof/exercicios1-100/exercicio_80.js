var numeros = [8,16,24,32, 33]

function dividido8 (num){
    return num.filter(function(n){
        return n%8==0
    })
}


console.log (dividido8(numeros))