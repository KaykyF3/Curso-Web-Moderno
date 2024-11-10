const alunos = [
    {nome:'João',nota:7.9},
    {nome:'João',nota:7.9},
    {nome:'João',nota:7.9}
]

// Imperativa
//Forma de programação onde é especificado os detalhes das instruções.
let total1 = 0 //Variável acumulativa
for(i=0; i<alunos.length;i++){
    total1 += alunos[i].notas
}

console.log(`Média: ${total1/alunos.length}`)

//Declarativo
//Forma de programação onde não é especificado exatamente como será feito as instruções
//Mais amplo, onde apenas os parâmetros são dados ao algoritmo
const getNota = aluno => aluno.nota
            //Acumulador
const soma = (total,atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)

console.log(`${total12/alunos.length}`)