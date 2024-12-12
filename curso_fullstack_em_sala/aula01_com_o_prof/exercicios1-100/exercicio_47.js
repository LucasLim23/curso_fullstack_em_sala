var numeros = [10,20,45,87]

function multPor10 (n){
    return n.map(function(n){
        return n*10
    })
}

console.log (multPor10(numeros))