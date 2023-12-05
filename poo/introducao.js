function Animal (tipo){
    if (tipo) this.tipo = tipo;
}

Animal.prototype.obterTipo = function(){
    return this.tipo;
}

Animal.prototype.tipo = "desconhecido";

let dog = new Animal("mamifero");
let cat = new Animal("mamifero");
let snake = new Animal("reptil");
let fish = new Animal();

let frog = {tipo: "anfibio"};
Animal.prototype.obterTipo.call(frog);

//Polyfill (MDN) para suporte em browsers antigos