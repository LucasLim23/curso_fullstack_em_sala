var numero = [17,3,5,6]

function imparesMaioresQue15(n){
    return n.filter(function(n){
        return n>15 && n%2==1
    })
}

console.log (imparesMaioresQue15(numero))