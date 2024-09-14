const pai = {
    nome: 'Pedro',
    corCabelo: 'preto'
}

//Criando um objeto filha que terá como protótipo o pai
const filha1 = Object.create(pai)
filha1.nome = 'Fernanda'

console.log(filha1)

/*Criando um objeto filha2 que terá como protótipo o pai e
os valores internos não serão mudados */
const filha2 = Object.create(pai,{
    nome: {value: 1,writable:false,enumerable:true}
})

console.log(filha2.nome)
filha2.nome = 'Joana'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))


