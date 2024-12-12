var nomes = ["Amelia", "Alicia", "Gabriel", "JJ"]

function nomesComFinalLetA (n){
    return n.filter(function(n){
        return n.endsWith("a")
        
    })
}

console.log(nomesComFinalLetA(nomes))