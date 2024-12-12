var numeros = [5,25,50,3,6,4]

function multiplosCinco (n){
    return n.filter(function(n){
        return n%5==0
    })
}

//outra forma que eu fiz
function multiplosCincoo (n){
    return n.filter(function(n){
        if(n%5==0){
        return n    
       }  
    })
}
console.log(multiplosCinco(numeros))
console.log(multiplosCincoo(numeros))