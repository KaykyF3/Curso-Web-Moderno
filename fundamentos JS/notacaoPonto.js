console.log(Math.ceil(6.1))
const obj1 = {}

obj1.nome = 'Bola'
console.log(obj1.nome)

//classe
function Obj(nome){
    this.nome
    this.exec = function(){
        console.log('Exec...')
    }
}
//instanciando o objeto
                    //enviando cadeira como parametro
const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec() //chamando a função exec do ojbeto
