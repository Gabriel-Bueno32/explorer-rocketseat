let list = []
let exit = false

while(!exit) {
    let option = Number(prompt("Ola usuario! Digite o numero da opcao desejada\n 1. Cadastrar um item na lista\n 2. Mostrar itens cadastrados\n 3. Sair do programa"))

    switch (option) {
        case 1:
            let item = prompt("Digite o nome do item")
            list.push(item)
            break;
        case 2:
            if(list.length == 0) {
                alert("Não existem itens cadastrados")
            } else {
                alert(list)
            }
            break;
        case 3:
            exit = true
            break;
        default:
           alert("Opção inválida. Tente novamente")
    }
}