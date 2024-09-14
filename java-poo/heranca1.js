//Conceito de herança
//Protótipo = Progenitor do objeto
const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

            //acessando elemento do protótipo da ferrari(pai...) que não existe em ferrari
console.log(ferrari.__proto__)
console.log(ferrari.__proto__ == Object.prototype)
