numeros = [4, 3 ,2]

function media(numeros){
   let soma = 0

   for (let i=0; i < numeros.length; i++){
    soma += numeros[i]
   } 

   let Media = soma / numeros.length
   return Media
}


console.log (media(numeros))
