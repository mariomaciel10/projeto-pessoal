 
console.log("material de estudo")

let materia = prompt("qual materia vc quer estudar?")

switch (materia) {
    case "matematica":
        matematica()
        break

    default:
        alert("matéria não encontrada")
}

function matematica() {
    let mt = prompt("digite: conteudo / explicacao / atividades")

    switch (mt) {
        case "conteudo":
            alert("potenciação")
            break

        case "2":
            alert("frações")
            break

        case "3":
            alert("equações")
            break

        default:
            alert("opção inválida")
    }
}