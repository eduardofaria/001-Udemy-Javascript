// let pessoa = {
//     nome: "João",
//     idade: 28
// }

let pessoas = [{
    nome: "João",
    idade: 28
}, {
    nome: "Maria",
    idade: 30
}, {
    nome: "Debora",
    idade: 15
}];

function montarFrases(){
    // Primeira tentativa
    // for (let umaPessoa in pessoas) {
    //     console.log(`${pessoas[umaPessoa].nome} tem ${pessoas[umaPessoa].idade} anos.`)
    // }

    //Segunda tentativa, convencional
    for (let i = 0; i < pessoas.length; i++){
        console.log(`${pessoas[i].nome} tem ${pessoas[i].idade} anos.`)
    }
}

montarFrases();