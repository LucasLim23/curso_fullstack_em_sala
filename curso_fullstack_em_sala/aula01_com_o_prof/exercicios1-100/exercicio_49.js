nomes = ["José", "João"]

function ultimaMaiuscula(n){
    return n.map(function(n){
        return n.slice(0, n.length-1) + n.charAt(n.length-1).toUpperCase() 
    })
}

console.log(ultimaMaiuscula(nomes))