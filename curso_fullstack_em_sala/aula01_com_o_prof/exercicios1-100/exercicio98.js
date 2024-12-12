let nomes = ["Lucaz","Lima","da","Cozta"];

function resultado(script){
    return script.filter(nome => nome.includes("z"))
};

console.log(resultado(nomes));