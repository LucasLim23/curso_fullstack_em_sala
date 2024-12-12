let nomes = ["lucas","lima","da","costa"];

function resultado(invertido){
    return invertido.map(nome => nome.toUpperCase().split("").reverse().join(""))
};

console.log(resultado(nomes));