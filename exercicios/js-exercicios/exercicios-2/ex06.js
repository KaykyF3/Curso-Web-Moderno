//Exercício 06

function simboloMais(parametro){
    var string = new Array(parametro);
    for(i=0;i<parametro;i++){
       string[i] = "+"  
    }
    return string
}

console.log(simboloMais(4))