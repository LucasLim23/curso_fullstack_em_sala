var nomes = ["Camila", "Amanda", "João", "José"]

function possuiO (l){
    return l.filter(function(L){
        return l.toLowerCase().includes("o")
    })
}

console.log(possuiO(nomes))