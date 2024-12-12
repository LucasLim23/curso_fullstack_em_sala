var nomes = ["Amelia", "João", "Amanda", "Camila", "Larissa"]

function nomesComA (nome){
    return nome.filter(function(L){
        return L.startsWith("A")
    })
}

console.log(nomesComA(nomes))