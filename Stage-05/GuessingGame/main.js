// Variaveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
let tries = 1

//Funcoes
function handleTryClick(event) {
    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber")
    console.log(inputNumber.value)
    
    if (Number(inputNumber.value) >= 0 && Number(inputNumber.value) <= 10) {
        if(Number(inputNumber.value) == randomNumber) {
            toggleScreen()
    
            screen2.querySelector("h2").innerText = `Acertou em ${tries} tentativas!`
        }
        inputNumber.value = ""
    } else{
        alert("Insira um numero entre 0 e 10")
    }
    
    tries++;
}

function handleResetClick() {
    toggleScreen()

    tries = 1
    randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

//Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)