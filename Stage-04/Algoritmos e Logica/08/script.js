const pancients = [
    {
        name: "Serjao",
        age: 20,
        weight: 100,
        height: 180
    },
    {
        name: "Serjona",
        age: 22,
        weight: 70,
        height: 160
    },
    {
        name: "serjau",
        age: 34,
        weight: 120,
        height: 180
    }
]

function IMC(height, weight) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
}

for(let pancient of pancients) {
    alert(`O IMC do ${pancient.name} é ${IMC(pancient.height, pancient.weight)}`)
}