import * as sounds from './sounds.js'
import state from "./state.js";

let currentSound = null

export function rainSound() {
    toggleSound(sounds.rainSound)
}

export function coffeeSound() {
    toggleSound(sounds.coffeeSound)
}

export function treeSound() {
    toggleSound(sounds.treeSound)
}

export function fireSound() {
    toggleSound(sounds.fireSound)
}

function toggleSound(sound) {
    // Verifica se o som atual é o mesmo que o som que está sendo clicado
    if (state.isMute || currentSound !== sound) {
        // Se houver um som atual, pausa-o
        if (currentSound) currentSound.pause()
        // Inicia o novo som
        sound.play()
        currentSound = sound
        state.isMute = false
    } else if (currentSound != null && !state.isMute) {
        currentSound.pause()
        currentSound = null
        state.isMute = true
    } 
    
    console.log(currentSound)
    console.log(state.isMute)
}

