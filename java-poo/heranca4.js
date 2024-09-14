function meuObjeto(){

}

console.log(meuObjeto.prototype)

//Instanciando meuObjeto em dois objetos (obj1,obj2)
const obj1 = new meuObjeto
const obj2 = new meuObjeto
            //Os protótipos dos dois são iguais? R: true
console.log(obj1.__proto__===obj2.__proto__)

console.log(meuObjeto.prototype===obj1.__proto__)

//Criando um atributo nome no protótipo
meuObjeto.prototype.nome = 'Anônimo'
meuObjeto.prototype.falar = function(){
    console.log(`Bom dia meu nome é ${this.nome}`)
}

//Objeto obj1 herdou a função falar do protótipo meuObjeto
obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = meuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()