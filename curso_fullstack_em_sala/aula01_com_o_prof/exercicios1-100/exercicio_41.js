var nomes = ["jOSE", "jOAO"]

function primeiraMaiuscula(n){
    return n.map(function(l){
        return l.charAt(0).toUpperCase() + l.slice(1)
    })
}

console.log(primeiraMaiuscula(nomes))