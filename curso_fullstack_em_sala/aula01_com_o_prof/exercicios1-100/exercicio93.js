let nomes = ["Lucas","Lima","da","Costa"];

function resultado(vogais){
    return vogais.map(nome => nome.replace(/[aeiouAEIOU]/g, letra => letra + letra + letra))
};

console.log(resultado(nomes));