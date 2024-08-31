//funcao sem retorno
function imprimirSoma(a,b){
    console.log(a+b)
}

imprimirSoma(2,5);

function soma(a,b){
    return a + b
}

console.log(soma(3,5))

//Armazenando uma função em uma variável
const imprimirSoma2 = function(a,b){
    console.log(a+b)
}

imprimirSoma2(2,3)


//Armazenando uma função arrow uma variável

const imprimirSoma3 = (a,b) => {
    console.log(a+b)
}

imprimirSoma3(6,8)
