// novo recurso do ES2015

//destructuring = extrair informações de algum elemento

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}
                //extraindo nome e idade do objeto e atribuindo a variável
//as chaves são criadas para criar o operador destructuring para extrair informações de algum elemento
const { nome , idade } = pessoa
console.log(nome,idade)

        //extraindo o atributo nome e idade, e criando a variavel n e i para passar os valores
const {nome: n, idade: i} = pessoa
console.log(n,i)
                 //extraindo nome e idade do objeto e atribuindo a variável

const { endereco: {logradouro,numero,cep } } = pessoa
console.log(logradouro,numero,cep)