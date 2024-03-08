let students = [
    {
        name: "Leticia",
        grade1: 6,
        grade2: 8
    },
    {
        name: "Gabriel",
        grade1: 3,
        grade2: 4
    },
    {
        name: "Bruno",
        grade1: 7,
        grade2: 10
    }
]

function avarage(grade1, grade2) {
    return (grade1 + grade2) / 2
}

for(let student of students) {
    let finalGrade = avarage(student.grade1, student.grade2)
    
    if(finalGrade >= 7) {
        alert(`A media do(a) aluno(a) ${student.name} é: ${finalGrade}\n Parabens ${student.name}! Voce foi aprovado(a) no curso`)
    } else {
        alert(`A media do(a) aluno(a) ${student.name} é: ${finalGrade}\n Nao foi dessa vez ${student.name}! Tente novamente`)
    }
}