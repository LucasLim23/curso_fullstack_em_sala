class Aluno {
    constructor (nome, idade, notas){
        this.nome=nome,
        this.idade=idade,
        this.notas=notas
    }
}

var alunos = [
    new Aluno ("José João", 30, 9.0),
    new Aluno ("Mari", 29, 9.0),
    new Aluno ("Lucas", 23, 9.0)
]

for (let i=0; i<alunos.length; i++){
    console.log(alunos[i].nome)
}