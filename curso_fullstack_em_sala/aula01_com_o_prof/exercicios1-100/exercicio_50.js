nomes = ["José", "Madruga"]

function nomesComQuatroCaract (n){
    return n.filter(function (n){
        return n.length == 4
    })
}

console.log (nomesComQuatroCaract(nomes))