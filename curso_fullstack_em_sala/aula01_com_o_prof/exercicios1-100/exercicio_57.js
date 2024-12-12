let nome = ["Lucas","Lima","da","Costa"];

function resultado(string){
    return string.map(nome => nome.toLowerCase().split("").reverse().join("").toLowerCase())
};

console.log(resultado(nome));