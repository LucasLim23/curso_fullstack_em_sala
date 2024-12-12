let nome = ["Lucas","Lima","da","Costa"];

function resultado(string){
    return string.map(nome => nome.toUpperCase().split("").reverse().join("").toUpperCase())
};

console.log(resultado(nome));