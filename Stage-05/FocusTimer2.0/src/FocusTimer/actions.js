import state from "./state.js";
import * as timer from "./timer.js"
import * as el from "./elements.js"

export function toggleRunning() {
    state.isRunning = true
    timer.countdown()
}

export function reset() {
    state.isRunning = false
    timer.updateDisplay()
}

export function minus() {
    if(!state.isRunning) {
        let minutes = Number(el.minutes.textContent) - 5
        if(minutes < 0) {
            minutes = 0
        }
        timer.updateDisplay(minutes)
        return
    }
}

export function sum() {
    if(!state.isRunning) {
        let minutes = Number(el.minutes.textContent) + 5
        if(minutes > 60) {
            minutes = 60
        }
        timer.updateDisplay(minutes)
        return
    }
}