/*Map() função responsável por alterar os dados dentro de um array
O objetivo do map é transformar os elementos de um array. Ele aplica uma função
a cada elemento do array original e retorna um novo array com os resultados dessa transformação.

*/
const nums = [1,2,3,4,5]
//variável que irá armazenar o resultado da alteração do array
let resultado = nums.map((e)=> {
    return e * 2
})

console.log(resultado)

const precos = [10, 20.5, 30, 45.99];

// Usando map para formatar os preços como strings de moeda
const precosFormatados = precos.map(preco => {
  return `R$ ${preco.toFixed(2)}`;
});

// Resultado: ['R$ 10.00', 'R$ 20.50', 'R$ 30.00', 'R$ 45.99']
console.log(precosFormatados);

const pessoas = [
    { nome: 'Alice', idade: 28 },
    { nome: 'Bob', idade: 34 },
    { nome: 'Charlie', idade: 25 }
  ];
  
// Usando map para extrair apenas os nomes
const nomes = pessoas.map(pessoa => pessoa.nome);
  
// Resultado: ['Alice', 'Bob', 'Charlie']
console.log(nomes);
