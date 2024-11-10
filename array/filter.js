//Filter - Função usada para filtrar um array
const produtos = [
    {nome:'Notebook',preco: 2499,fragil:true},
    {nome:'iPadPro',preco: 4000,fragil:true},
    {nome:'Copo de Vidro',preco: 14,fragil:true},
    {nome:'Copo de Plástico',preco: 18,fragil:false}
]

    //Para cada elemento do array...
    console.log(produtos.filter(function(p){
    //P é um parâmetro que é objeto da função
    //Retornando os elementos que possuem false
    return false
}))

const caro = function(produto) { 
    return produto.preco >= 500 
}
const fragil = function(produto) { 
    return produto.fragil 
}
//Irá retornar os elementos que possuem o atributo preço de P que é maior que 500 e são frágeis
console.log(produtos.filter(caro).filter(fragil))


//Exemplo 2:
//Retornando as palavras que possuem mais que 5 carácteres
const palavras = ['maçã', 'banana', 'laranja', 'kiwi', 'abacaxi'];

// Usando filter para encontrar palavras com mais de 5 letras
const palavrasLongas = palavras.filter(palavra => palavra.length > 5);

// Resultado: ['banana', 'laranja', 'abacaxi']
console.log(palavrasLongas);


