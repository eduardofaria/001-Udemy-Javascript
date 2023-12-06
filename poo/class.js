
// ES5

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

//ES6

class AnimalC {
    constructor(tipo, bbb){
        this.tipo = tipo;
        this.bbb = bbb
    }

    obterTipo (){
        return this.tipo;
    }
}

let animal = new AnimalC("anfibio");


class GatoC extends AnimalC{
    constructor(nome){
        super("mamifero", "bbb"); // Adiciona os poarâmetros que são solicitados na classe extendida
        this.nome = nome;
    }
}

let mingau = new GatoC("mingau");
console.log(mingau);