const produto = new Object
produto.nome  = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco //deletando o atributo preco do objeto

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    }
}

carro.proprietario.endereco.numero //acessando o número dentro do objeto carro