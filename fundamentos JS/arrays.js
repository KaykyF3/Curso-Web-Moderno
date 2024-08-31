const valores = [7.7,8.9,6.3,9.2]

console.log(valores[0],valores[3])
console.log(valores.length)

//jogando para o vetor as seguintes info
// push = coloca
// pop = remove o ultimo elemento do array
valores.push({id:3},false,null,'teste')
console.log(valores.pop())

//deletando o primeiro elemento do array
delete valores[0]
console.log(valores)