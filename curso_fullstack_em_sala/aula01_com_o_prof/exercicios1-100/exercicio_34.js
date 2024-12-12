let aluno = [
    {nome:"Lucas",idade:23,notas:[5,8,9]},
    {nome:"João",idade:24,notas:[7,6,8]},
    {nome:"Mariane",idade:29,notas:[9,6,5]}
];

function resultado(media){
    return media.reduce((soma,aluno)=> soma + aluno.idade, 0 )
}

console.log(resultado(aluno));