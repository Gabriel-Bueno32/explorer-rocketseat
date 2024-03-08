let result = prompt("Advinhe o numero que estou pensando? Esta entre 0  e 10")
const randomNumber = Math.round(Math.random() * 10)
let tries = 1

while(Number(result) != randomNumber) {
    result = prompt("Erro, tente novamente:")
    tries++;
}

alert(`Parabens voce adivinhou em ${tries} tentativas`)