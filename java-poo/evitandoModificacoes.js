//Object.preventExtensions
//Classe que impede um objeto de ter mais atributos do que o limite ou modificados

//Objeto que terá apenas 3 atributos
const produto = Object.preventExtensions({
    nome:'Qualquer',
    preco: 24,
    tag: 'promocao'
})

console.log('Extensível: ',Object.isExtensible(produto))

produto.nome = 'Borracha'
//Atributo descricao nao vai ser implementado
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)


/*Object.seal (restringe o objeto,
onde você não possui criar ou excluir mais atributos para o objeto)*/
const pessoa = {nome: 'Juliana',idade:35}
//Selando o objeto
Object.seal(pessoa)
console.log('Selado:',Object.isSealed(pessoa))

//Não terá efeitos
pessoa.sobrenome = 'Silva'
delete pessoa.nome
//Apenas altera valores
pessoa.idade = 29
console.log(pessoa)

//Object.freeze = selado + valores constantes
const elemento = {
    nome: 'Davi',
    idade: 1
}
Object.freeze(elemento)

elemento.nome = 'Kayky'

console.log(elemento.nome)
