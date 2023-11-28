(function(){

let valores = [];
let media = "";

function inserirNumeros() {
    let numeros = Number(prompt("Quantos valores são para calcular a média?"));
    if (!numeros) {
        alert("Informe um valor válido");
        return;
    }
    
    for (let i = 0; i < numeros; i++){
        valores.push(prompt("Informe o valor:"));
    }
    console.log("Valores: " + valores);
    // return calcularMedia(...valores); [MÉTODO ALTERNATIVO]
    return calcularMedia.apply(null, valores);
}

function calcularMedia(valores){
    let total = 0;
    for (let i = 0; i < arguments.length; i++){
        total += Number(arguments[i]);
    }
    console.log(`Total: ${total} / Divisor: ${arguments.length}`);
    let media = total / arguments.length;
    
    return alert(`A média é ${media}`);
    
}
inserirNumeros();

})();