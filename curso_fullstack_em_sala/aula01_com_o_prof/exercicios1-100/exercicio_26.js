var letras=["A","B","C"]

function letrasMinusculas(letras){
        return letras.map(function(l){
        
            return l.toLowerCase()
    })
   

}    

console.log(letrasMinusculas(letras))