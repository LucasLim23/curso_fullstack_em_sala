var names = ["José", "Bruno", "brasil"]

function nomesComB(n){
    return n.filter(function(n){
        return  n.startsWith("B")
    })
}

console.log(nomesComB(names))