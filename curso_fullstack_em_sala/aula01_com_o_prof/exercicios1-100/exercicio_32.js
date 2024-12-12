class Aluno {
    constructor (nome, idade, notas){
        this.nome=nome,
        this.idade=idade,
        this.notas=notas
    }
}
var alunos = [
    new Aluno ("José João", 30, [9.0, 9.0, 9.0]),
    new Aluno ("Mari", 29, [9.0, 8.0,7.5]),
    new Aluno ("Lucas", 23, [9.0, 8.5 ,7.0])
]

let nomesAlunos = alunos.map(function(aluno){
    return aluno.nome
})

console.log(nomesAlunos)