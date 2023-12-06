function Animal (tipo){
    if (tipo) this.tipo = tipo;
}

Animal.prototype.obterTipo = function(){
    return this.tipo;
}

Animal.prototype.tipo = "desconhecido";

function Cachorro (nome, tipo) {
    this.nome = nome;
    Animal.call(this, tipo);
    this.constructor = Cachorro;
}

Cachorro.prototype = new Animal();

let rex = new Cachorro ("rex", "mamifero");

console.log(rex);


for (let props in rex){
    if (rex.hasOwnProperty(props)){
        console.log(props);
    }
}

console.log(rex instanceof Animal);
console.log(Animal.prototype.isPrototypeOf(rex));
console.log(Object.getPrototypeOf(rex));

//Polyfill (MDN) para suporte em browsers antigos   