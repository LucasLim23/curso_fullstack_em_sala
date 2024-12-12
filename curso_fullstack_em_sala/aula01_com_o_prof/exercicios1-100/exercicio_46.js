nomes = ["zeze", "sIsI", "João", "JosE"]

function verificacaoLetraE(n){
    return n.filter(function(n){
        return n.toLowerCase().includes("e")
    })
}

console.log(verificacaoLetraE(nomes))