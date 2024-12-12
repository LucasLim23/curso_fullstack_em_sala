const profissao = "Programador"

function ObjetivoDoCurso(){
    
  return `O meu objetivo de carreira é ser um excelente ${profissao}`
}


//Outra forma

let ObjetivoDoCurso2 = () => {
 return `O meu objetivo de carreira é ser um excelente ${profissao}`
}

console.log(ObjetivoDoCurso())
console.log(ObjetivoDoCurso2())
