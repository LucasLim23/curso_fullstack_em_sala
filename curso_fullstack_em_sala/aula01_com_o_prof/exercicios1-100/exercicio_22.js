/*const numeros =  Array.from({ length: 100 }, (_, index) => index+1)

var qtdFizz = 0;
var qtdBuzz =0;
var qtdFizzBuzz = 0;

numeros.map(i => {
    if (i %3 ==0){
        console.log ("Fizz")
        qtdfizz++
    } else if (i %5 ==0){
        console.log ("Buzz")
        qtdBuzz++
    } else if (i%3==0 && i%5==0){
        console.log("FizzBuzz")
        qtdFizzBuzz++
    }
})

console.log(qtdFizz)
console.log(qtdBuzz)
console.log(qtdFizzBuzz)
 */

var numeros = [2,4,5,6]

var numerosDobrados = numeros.map(function(num){
    return num*2
})

console.log (numerosDobrados)


