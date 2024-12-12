 var numeros = [5,4,9]

function acrescimo (n){
    return n.map(function(n){
        return n+5
    })
}

console.log(acrescimo(numeros))