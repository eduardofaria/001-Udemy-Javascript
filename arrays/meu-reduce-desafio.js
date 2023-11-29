/*
    De uma array numeros = [1, 3, 4, 1, 4, 5, 3, 5, 8, 9]
    Retornar apenas os números ÚNICOS ex: numerosUnicos = [1, 3, 4, 5, 8, 9]
*/

(function(){

    const numeros = [1, 3, 4, 1, 4, 5, 3, 5, 8, 9];

    let numerosUnicos = numeros.reduce(function(a, b){
    if(a.indexOf(b) < 0){
        a.push(b);
    }
    return a;
    }, []);

    console.log(numerosUnicos);


})();


