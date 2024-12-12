var nomes = ["Josejo", "Joao", "Camila"]

function tamanho6(nome){
    return nome.filter(function(n){
        return n.length == 6
    })
}

console.log(tamanho6(nomes))