notas = [0, 3.0, 10.0]

const media = (notas[0]+ notas[1] + notas[2])/notas.length

console.log("A primeira nota do aluno, foi: " + notas[0])
console.log("A segunda nota do aluno, foi: " + notas[1])
console.log("A terceira nota do aluno, foi: " + notas[2])

if (media >=7){
    console.log("Parabéns, aprovado")
} else {
    console.log ("Reprovado! Tente outra vez")
}