nomes = ["jose", "Joao"]

function removerVogais(n){
    return n.map(function(n){
        return n.replace(/[aeiouAEIOUáéíóúÁÉÍÓÚ]/g, "")
    })
}

console.log(removerVogais(nomes))