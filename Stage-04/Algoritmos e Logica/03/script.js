alert("Digite dois numeros.")
let numberOne = prompt("Primeiro numero")
let numberTwo = prompt("Segundo numero")

let numberOneToNumber = Number(numberOne)
let numberTwoToNumber = Number(numberTwo)

let sum = numberOneToNumber + numberTwoToNumber
let sub = numberOneToNumber - numberTwoToNumber
let mult = numberOneToNumber * numberTwoToNumber
let div = numberOneToNumber / numberTwoToNumber
let restDiv = numberOneToNumber % numberTwoToNumber

alert("Soma: " + sum)
alert("Subtracao: " + sub)
alert("Multiplicacao: " + mult)
alert("Divisao: " + div)
alert("Resto da divisao: " + restDiv)