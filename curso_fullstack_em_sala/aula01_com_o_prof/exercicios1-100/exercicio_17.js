class livros {
    constructor(titulo, autor, anoPubli ){
        this.titulo = titulo;
        this.autor = autor;
        this.anoPubli = anoPubli;
    }
}


let biblia = new livros ("biblia", "Deus", "000")

console.log(biblia)
console.log (biblia.titulo)
console.log (biblia.autor)
console.log (biblia.anoPubli)