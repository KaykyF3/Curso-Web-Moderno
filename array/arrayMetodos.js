const pilotos = ['Vettel','Alonso','Raikokken','Massa']

//Tira o ultimo elemento do array
pilotos.pop()
console.log(pilotos)

//Coloca algum elemento na última posição do array
pilotos.push('Verstappen')
console.log(pilotos)

//Remove o primeiro elemento do array
pilotos.shift() 
console.log(pilotos)

//Coloca algum elemento na primeira posição do array
pilotos.unshift('Hamilton')

//Coloca elementos nas posições determinadas
pilotos.splice(2,0,'Bottas','Massa')
console.log(pilotos)

//Removendo com splice
pilotos.splice(3,1)
console.log(pilotos)

//Irá retorar um novo array (Tudo após o indice 2 do array pilotos)
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)
const algunsPilotos2 = pilotos.splice(1,3)
console.log(algunsPilotos2)