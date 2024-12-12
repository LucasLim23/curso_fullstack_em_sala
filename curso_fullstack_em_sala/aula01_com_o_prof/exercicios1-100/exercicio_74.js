var frases = ["Olá, tudo otimo?", "Que dia é hoje", "ola"]

function letrasI(frase){
    return frase.filter(function(f){
        return f.toLowerCase().includes("i")
    })
}

console.log(letrasI(frases))