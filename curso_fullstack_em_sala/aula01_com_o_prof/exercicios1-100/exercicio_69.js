var nome = ['JosÉ', 'JoãO']

function primeiraeUltimaMinuscula(l){
    return l.map(function(l){
        return l.charAt(0).toLowerCase() + l.slice (1, l.length -1) + l.charAt(l.length-1).toLowerCase()
    })
}

console.log(primeiraeUltimaMinuscula(nome))