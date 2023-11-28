let btnMake = document.getElementById("makeTabuada");
let btnClear = document.getElementById("clearTabuada");
let divOutput = document.getElementById("output");

function calcular() {
    let resultado = "";
    let valor = Number(prompt("Qual o número?"))
    if (!valor) {
        alert("Digite um valor válido.");
        return;
        }

    for (let i = 0; i <= 1000; i++){
        resultado += `${valor} x ${i} = ${(valor * i)}<br>`;
    }

    divOutput.innerHTML = resultado;
}

function limpar() {
    divOutput.innerHTML = "";
}

btnMake.addEventListener("click", calcular);
btnClear.addEventListener("click", limpar);