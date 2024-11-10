let aprovados = new Array('Bia','Carlos','Ana')

console.log(aprovados)
aprovados = ['Bia','Carlos','Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Abia')
//Comprimento de aprovados
console.log(aprovados.length)


aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8]===undefined)
console.log(aprovados)

//Função Sort(ordenar)
aprovados.sort()
console.log(`Ordenado: ${aprovados}`)


//Deletando o primeiro elemento do array (de índice 1)
delete aprovados[1]

//Função splice que permite manipular dados dentro de um array(excluir ou adicionar)
aprovados = ['Bia','Carlos','Ana']
//Removendo elemento de índice 1 e 2 do array
//aprovados.splice(1,2)
//Removendo elemento de índice 1 e 2 e substituindo por 'Elemento 1' e 'Elemento 2'
aprovados.splice(1,2,'Elemento1','Elemento2')
console.log(aprovados)