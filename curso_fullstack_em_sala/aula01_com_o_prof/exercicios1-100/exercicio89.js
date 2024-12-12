let nomes = ["lucas","lima","da","costa"];

function resultado(palavra){
    return palavra.map(nome => {
        if(nome.length > 1){
            return nome.charAt(0).toLowerCase()+nome.slice(1,-1)+nome.charAt(nome.length -1).toUpperCase();
        }else{
            return nome.toLowerCase();
        }
    });
}

console.log(resultado(nomes));