//Reduce
//Função que irá transformar um array em um elemento menor

/*é utilizado para executar uma função em cada elemento de um array, resultando em um único valor final.
Ele reduz o array a um valor acumulado, seja um número, 
string, objeto, ou outro tipo de dado, conforme a lógica definida na função passada a ele. */
const alunos = [

    {nome:'João',nota:7.3,bolsista:false},
    {nome:'Ana',nota:9.2,bolsista:true},
    {nome:'Pedro',nota:9.8,bolsista:false},
    {nome:'Maria',nota:8.7,bolsista:true},
]

                        //Extrai apenas as notas
const resultado = alunos.map(a => a.nota).reduce(function(acumulador,atual){
    console.log(acumulador,atual)
    return acumulador+atual
})

console.log(resultado)

//Segundo exemplo
const numeros = [1, 2, 3, 4];

          //Cada elemeto será passado para a função como argumento
const soma = numeros.reduce((acumulador, valorAtual) => {
  return acumulador + valorAtual;
  //acumulador começa com zero
}, 0);

console.log(soma); // Saída: 10