const notas = [6.7,7.4,9.8,8.1,7.7]
    //passando todos os valores de NOTAS para I
for(i in notas){
    console.log(i, ' ',notas[i])
}
const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 34,
    peso: 65
}
    //passando os atributos de pessoa para a variável 'atribute'
for(let atribute in pessoa){
    console.log(`${atribute} = ${pessoa[atributo]}`)
}

//in = itera sobre os índices de um array
//of = itera sobre os elementos de um array