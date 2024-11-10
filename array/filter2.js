Array.prototype.filter2 = function(callback){
    const newArray = []; //adicionando os dados filtrados nesse Array
    for(let i = 0;i <this.length; i++){
        if(callback(this[i],i,this)){
            newArray.push(this[i])
        }
    }
}

//Filter - Função usada para filtrar um array
const produtos = [
    {nome:'Notebook',preco: 2499,fragil:true},
    {nome:'iPadPro',preco: 4000,fragil:true},
    {nome:'Copo de Vidro',preco: 14,fragil:true},
    {nome:'Copo de Plástico',preco: 18,fragil:false}
]

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil
//Irá retornar os elementos que possuem o atributo preço de P que é maior que 500 e são frágeis
console.log(produtos.filter2(caro).filter2(fragil))