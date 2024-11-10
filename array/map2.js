//Map - Parte 2
//Map = Função que executa alguma instrução em cada elemento de uma array
//Estrutura -> array.map(instrução)
const carrinho = [
    '{"nome": "Borracha","preco":3.45}',
    '{"nome": "Caderno","preco":13.90}',
    '{"nome": "Kit de Lápis","preco": 41.22}',
    '{"nome": "Caneta","preco":7.50}',
]

//Retornar um array apenas com os preços

console.log(carrinho)

                            //recebendo um elemento e transformando o em objeto
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

/*Transforma o carrinho em objeto, e passa apenas os atributos preco para a variavel resultado */
const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)
