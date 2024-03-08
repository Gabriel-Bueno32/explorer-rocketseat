let studentName = prompt("Coloque seu nome")
let studentGradeOne = prompt("Coloque sua primeira nota")
let studentGradeTwo = prompt("Coloque sua segunda nota")
let studentGradeThree = prompt("Coloque sua terceira nota")

let avarage = (Number(studentGradeOne) + Number(studentGradeTwo) + Number(studentGradeThree)) / 3

if (avarage >= 6) {
    alert(`Parabens ${studentName} voce passou na materia`)
} else {
    alert(`${studentName} infelizmente voce nao passou, se esforce na recuperacao`)
}