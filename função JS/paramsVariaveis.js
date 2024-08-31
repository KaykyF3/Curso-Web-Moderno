//Quando a função não tem parâmetros
function soma(){
    let soma = 0;
        //Argumentos irá pegar todos os valores que são enviados para função
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1,2.2,3.3))
console.log(soma(1.1,2.2,"Teste"))
console.log(soma('a','b','c'))
