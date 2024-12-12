var numeros = [100,20,22,40]

function maioresQue20 (n){
    return n.filter(function(n){
        return n>20
    })
}

console.log(maioresQue20(numeros))