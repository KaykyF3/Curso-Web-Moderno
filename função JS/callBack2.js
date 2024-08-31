//Sem callback
const notas = [7.7,6.5,5.2,8.9,3.6,7.1,9.0]

let notasBaixas1 = []

for(let i in notas){
    if(notas[i] < 7){   
        //jogando no vetor notasBaixas as notas menor que 7
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

//Com callback
/*Função filter irá filtrar os valores seguindo uma condição, 
no caso irá pegar os valores retornados pela função menores que 7 para serem salvos pelo notasBaixas2*/
const notasBaixas2 = notas.filter(function (nota){
    return nota < 7
})

console.log(notasBaixas2)



const test = [1,2,4,5,6,887]
//Formas de exibir elementos de um array
/*
PRIMEIRA FORMA
test.forEach((teste) => {
    console.log(teste)
})
*/
/*
SEGUNDA FORMA
for(let i in test){
    console.log(test[i])
}
*/