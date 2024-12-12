let pessoa = {
    nome: "José João",
    cpf: "099.642.254-40",
    cidade: "João Pessoa",
  
}

notas = [8.00, 9.30, 10.00, 8.00]

console.log (pessoa)
console.log (`A primeria nota, é: ${notas[0]}`)
console.log (`A segunda nota, é: ${notas[1]}`)
console.log (`A terceira nota, é: ${notas[2]}`)
console.log (`A quarta nota, é: ${notas[3]}`)


var media = (notas[0] + notas[1] + notas[2] + notas[3])/notas.length

console.log (`Sua média, foi: ${media.toFixed(2)}`)