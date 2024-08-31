//Função em JS é First-Class Object (citizens)
//higher order function

// criar de forma literal
function fun1(){
}

//Armazenar em uma variável
            //Função anônima
const fun2 = function(){
}

//Armazenar em um array
const array = [function(a,b){
    return a + b
}]
            //passando parâmetro para a função de indice 0 do array
console.log(array[0](2,3))

//Armazenar em um atributo do objeto
const obj = {}
obj.falar = function() {return 'Opa'}
console.log(obj.falar())

//Passando uma função como parâmetro
function run(fun){
    fun()
}
//Passando a função 'funcao' como argumento
run(function funcao(){
    console.log('testando...')
})

//Uma função pode retornar/conter uma função
function soma(a,b){
    return function(c){
        console.log(a + b + c)
    }
}
    //passando 2,3 para a primeira função e 4 para a função interna
soma(2,3,4)