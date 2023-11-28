(function (){
    const visitante = "Eduardo";

    let saudacaoDOM = document.querySelector("#principal .top-bar p");
    let saudacaoContent = saudacaoDOM.textContent;
    let saudacao = saudacaoContent + visitante + "!";

    saudacaoDOM.textContent = saudacao;

})();