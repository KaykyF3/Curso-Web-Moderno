//usando a notação literal
//Primeira forma
const obj1 =  {

}
console.log(obj1)

//Segunda forma (Object em JS)
const obj2 = new Object
obj2.nome =  'teste'
console.log(obj2)

//Terceira Forma (Função construtora)
function Produto(nome,preco,desc){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

//Quarta Forma - Função Factory
function criarFuncionario(nome,salarioBase,faltas){
    return {
        nome,salarioBase,faltas,
        getSalario(){
            return (salarioBase/30)*(30-faltas)
        }
    }
}

const f1 = criarFuncionario('Joao',7980,4)
const f2 = criarFuncionario('Maria',11400,1)
console.log(f1.getSalario(),f2.getSalario())

//Qunta Forma - Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)