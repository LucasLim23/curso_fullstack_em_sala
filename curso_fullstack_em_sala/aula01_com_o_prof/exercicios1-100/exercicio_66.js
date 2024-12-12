var nomes = ["Camila", "carol", "João"]


function inicioC(l){
    return l.filter(function(l){
        return l.startsWith("C")
    })
}

console.log(inicioC(nomes))