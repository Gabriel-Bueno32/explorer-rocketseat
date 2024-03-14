import { controls, climates } from './elements.js'
import * as actions from './actions.js'
import * as climatesSounds from './climates.js'

export function registerControl() {
    controls.addEventListener('click', (event) => {
        const action = event.target.dataset.action
        if(typeof actions[action] != "function") {
            return
        }

        actions[action]()
        console.log(actions[action])
    })
}

export function registerClimates() {
    // Seleciona todos os botões dentro da seção #climates
    const buttons = document.querySelectorAll('#climates button')

    // Adiciona um evento de clique a cada botão
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const climate = button.dataset.action

            // Verifica se o botão clicado já possui a classe 'turn-on'
            const isActive = button.classList.contains('turn-on')

            // Remove a classe 'turn-on' de todos os botões
            buttons.forEach(btn => btn.classList.remove('turn-on'))

            // Se o botão clicado já estiver ativo, remove a classe 'turn-on' dele
            if (isActive) {
                button.classList.remove('turn-on')
            } else {
                // Caso contrário, adiciona a classe 'turn-on' ao botão clicado
                button.classList.add('turn-on')
            }

            // Executa a função correspondente ao clima
            if (typeof climatesSounds[climate] === "function") {
                climatesSounds[climate]()
            }
        })
    })
}