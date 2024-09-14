// Cadeia de protótipos (prototype chain)
const avo = {
    attr1: 'A'
}
    //Pai tem como protótipo o avo
const pai = {
    __proto__:avo,
    attr2:'B'
}
    //Pai tem como protótipo o avo
const filho = {
    __proto__:pai,attr3:'C'
}
            //Acessando o atributo 1 do filho, que não tem
            //depois tenta achar no pai, que também não tem,
            //depois tenta achar no avô que tem
console.log(filho.attr1,filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else {
            this.velAtual = this.velMax
        }
    }
}

const ferrari = {
    //__proto__: carro, //herda características do carro
    modelo: 'F40',
    velMax: 340
}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

//Segunda maneira de fazer um objeto ser herdado de outro
                    //FERRARI tem como protótipo CARRO
Object.setPrototypeOf(ferrari,carro)
Object.setPrototypeOf(volvo,carro)

console.log(Object.keys(carro))
