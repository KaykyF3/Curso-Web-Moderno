/*
const prod1 = {
    nome: '...',
    preco: 45
}
const prod2 = {
    nome: '...',
    preco 1234
}
*/
//Ao invés de criar tantos objetos com mesmos atributos porém com dados diferentes, cria-se um factory

//Função Factory (retorna um objeto)

function criarPessoa(){
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())

function criarPessoa1(nomeP,preco){
    return {
        nome: nomeP,
        preco: `R$ ${preco.toFixed(2)}`
    }
}

console.log(criarPessoa1('Abacate',7))