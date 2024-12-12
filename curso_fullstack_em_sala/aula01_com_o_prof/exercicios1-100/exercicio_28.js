var numeros = [2,4,9,3,6]

function multiplosTres(numeros){
    return numeros.map(function(l){
        if (l%3==0){
        return l

        }
    })

}

console.log(multiplosTres(numeros))