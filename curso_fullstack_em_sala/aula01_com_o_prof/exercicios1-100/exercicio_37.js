let nome = ["Lucas","Lima","da","Costa"];

function resultado(invertido){
    return invertido.map(nome => nome.split("").reverse().join(""))
};

console.log(resultado(nome));