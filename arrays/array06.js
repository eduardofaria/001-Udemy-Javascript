/* REDUCE é: Fazer alguma coisa com um elemento, em seguida com o próximo, acumulando o que fez com o anterior, continuando nessa ordem, do início até o fim da array.
    Então, uma array [A, B, C , D] seria fazer algo com A, depois somar o feito com A, com B, depois esse A com B, com C, depois (A, B e C) com D.
    Exemplo:
        arr.reduce(A, B);
    Onde A = O QUE FAZER com CADA ELEMENTO (ex: uma function)
    Essa função em A, recebe dois parâmetros do reduce:
    PRIMEIRO PARÂMETRO na function: O resultado acumulado até o momento (o RETURN da função).
    SEGUNDO PARÂMETRO, na function: O item atual do momento.

    Onde B = ONDE COMEÇAR (É opcional, MAS se usado, define também o tipo de saída.
    Ex: Entra string sai string, object gera objeto, number gera number, se misturar tipos, gera string.
     */

let lista = ["João", "Maria", "Roberto", "Mauro", "Joana", "Francisca", "Juvenal", "Marlom", "Paulo"];

(function(){

    let catalogo = lista.reduce(function(elemento_Anterior, elemento_Seguinte){
        let primeiraLetraDoNome = elemento_Seguinte[0]; // na primeira passagem do laço, esse elemento_Seguinte vai ser o primeiro elemento da Array, pq usei o parâmetro {} (objeto vazio) como PRIMEIRO elemento (elemento_Anterior na primeira passada do lasso).
        if (elemento_Anterior[primeiraLetraDoNome]){ //Já pega a primeira letra, ela passa a existir no acumulador, não tem como não deixar de pegar uma letra, pois sempre haverá uma letra num array de nomes (a não ser que um dos elementos seja "" vazio)
            elemento_Anterior[primeiraLetraDoNome]++;
        } else {
            elemento_Anterior[primeiraLetraDoNome] = 1;
        }

        return elemento_Anterior; // Ou seja, o que foi acumulado até então.
        
    }, {} /* Esse {} quer dizer que INICIA em um objeto vazio, ou seja o PRÓXIMO ELEMENTO é o PRIMEIRO do array*/);
    console.log(catalogo);

})();
    
    
    /*
    
    Saída para: ["João", "Maria", "Roberto", "Mauro", "Joana", "Francisca", "Juvenal", "Marlom", "Paulo"] é:
    { J: 3, M: 3, R: 1, F: 1, P: 1 }
    
    Saída para: ["João", "Maria", "Roberto", "Mauro", "Joana", "Francisca", "Juvenal", "Marlom", "Paulo", ""] é:
    { J: 3, M: 3, R: 1, F: 1, P: 1, undefined: 1 }
    
    */