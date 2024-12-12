let nomes = ["Lucas","LYma","da","Costa"];

function resultado(string){
    return string.filter(nome => nome.includes("Y"))
};

console.log(resultado(nomes));