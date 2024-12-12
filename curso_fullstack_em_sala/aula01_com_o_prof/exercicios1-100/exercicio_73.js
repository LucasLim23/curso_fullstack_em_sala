nomes = ["jose", "Joao"]

function removerVogais(n){
    return n.map(function(n){
        return n.replace(/[aeiouAEIOUáéíóúÁÉÍÓÚ]/g , function(vogal){
            return vogal + vogal
        })
    })
}

console.log(removerVogais(nomes))