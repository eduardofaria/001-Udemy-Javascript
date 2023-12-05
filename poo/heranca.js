function Animal (tipo){
    if (tipo) this.tipo = tipo;
}

Animal.prototype.obterTipo = function(){
    return this.tipo;
}

Animal.prototype.tipo = "desconhecido";

function Cachorro (nome, tipo){
    
}

//Polyfill (MDN) para suporte em browsers antigos   