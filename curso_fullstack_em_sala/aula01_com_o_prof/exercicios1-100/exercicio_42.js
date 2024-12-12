let nome = ["Lucas","Lima","da","Costa"];

function resultado(string){
    return string.filter(nome => nome.length >=5)
}

console.log(resultado(nome));