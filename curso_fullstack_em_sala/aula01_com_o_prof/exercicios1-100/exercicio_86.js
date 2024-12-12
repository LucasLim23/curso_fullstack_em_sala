var nomes = ["Daniela", "daniela", "José", "jose"]

function inicioComD (letra){
    return letra.filter(function(l){
        return l.charAt(0).includes("D")
    
    })
            
}

console.log(inicioComD(nomes))