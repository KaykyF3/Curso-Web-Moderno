//Função Anonima = Função sem nome

const soma = function (x,y) {
    return x + y
}
                                        //var operacao chama a variável SOMA e passa os argumentos a e b
const imprimirResultado = function(a,b,operacao=soma){
    console.log(operacao(a,b))
}


imprimirResultado(3,4)
imprimirResultado(3,4,soma)
imprimirResultado(3,4,function(x,y){
    return x - y
})

imprimirResultado(3,4,(x,y) => x * y)