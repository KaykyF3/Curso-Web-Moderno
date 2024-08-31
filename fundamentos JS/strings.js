const escola = "Cod3r"
console.log(escola.charAt(4))

//mostrando o indice de uma letra em um string
console.log(escola.indexOf('d'))
//função que vai devolver os valores de X até Y, no caso de indice 0 até 3
console.log(escola.substring(0,3))
                //substituindo o elemento de indice 3 da string por e 
console.log(escola.replace(3,'e'))

console.log('Ana,Maria,Pedro')
//Transformando a string em três elementos separados atraves da virgula
console.log('Ana,Maria,Pedro'.split(','))