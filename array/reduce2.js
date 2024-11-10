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

//Desafio 1: todos os alunos são bolsistas?
        //Passando por cada elemento
const resultado = alunos.reduce(function(acumulador,alunos){
    return acumulador && alunos.bolsista;
    //Acumulador começa com true
},true);

console.log(resultado)

//Desafio 2: Algum aluno é bolsista?
const resultado2 = alunos.reduce(function(acumulador,alunos){
    return acumulador || alunos.bolsista
},false);

console.log(resultado2)