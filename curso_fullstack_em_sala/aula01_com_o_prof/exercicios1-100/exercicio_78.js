var frases = ["Olá, tudo bem?" , "Como vai"]

function letrasU (l){
    return l.filter(function(l){
        return l.includes("u")

       
    })
}

console.log(letrasU(frases))