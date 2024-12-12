var nomes = ["josE", "joaO"]

function primeiraMaiusculaUltimaMinuscula(nomes){
    return nomes.map(function(n){
        return n.charAt(0).toUpperCase() + n.slice(1, n.length-1) + n.charAt(n.length-1).toLowerCase()
    })
}

console.log(primeiraMaiusculaUltimaMinuscula(nomes))