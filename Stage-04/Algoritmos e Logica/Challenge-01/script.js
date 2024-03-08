alert("Insira dois numeros")

const number1 = prompt("Primeiro numero")
const number2 = prompt("Segundo numero")

const number1ToNumber = Number(number1)
const number2ToNumber = Number(number2)

let sum = number1ToNumber + number2ToNumber
let sub = number1ToNumber - number2ToNumber
let mult = number1ToNumber * number2ToNumber
let div = number1ToNumber / number2ToNumber
let restDiv = number1ToNumber % number2ToNumber

alert(`A soma dos dois numeros é: ${sum}`)
alert(`A subtracao dos dois numeros é: ${sub}`)
alert(`A multiplicacao dos dois numeros é: ${mult}`)
alert(`A divisao dos dois numeros é: ${div}`)
alert(`O resto da divisao dos dois numeros é: ${restDiv}`)

if(sum % 2 == 0) {
    alert(`A soma dos dois numeros é par: ${sum}`)
} else {
    alert(`A soma dos dois numeros é impar: ${sum}`)
}

if(number1ToNumber == number2ToNumber) {
    alert("Os numeros inseridos sao iguais")
} else {
    alert("Os numeros inseridos sao diferentes")
}