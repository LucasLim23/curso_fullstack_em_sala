var nomes = ["jose", "joão"]

function primeiraeUltimaMaiscula(l){
    return l.map(function(l){
        return l.charAt(0).toUpperCase() + l.slice(1, l.length-1) + l.charAt(l.length-1).toUpperCase()
    })
}

console.log(primeiraeUltimaMaiscula(nomes))

