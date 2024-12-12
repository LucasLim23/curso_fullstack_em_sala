var saudacoes = ["Ola, tudo bem", "como vai?"]

function semConsoantes(l){
    return l.map(function(l){
        return l.replace(/[^aeiouAEIOU]/g, '', " ")
    })
}

console.log(semConsoantes(saudacoes))