/* 
Exercício 05
*/


function rep(elemento,repeticao){
    //criando um array de tamanho REPETICAO 
    var array = new Array(repeticao);
    for(i=0;i<repeticao;i++){
        array[i] = elemento
    }

    return array
}

console.log(rep(1,3))