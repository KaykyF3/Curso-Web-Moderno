            //CLASSE = FUNÇÃO
            //valores padrão
function Carro(velocidadeMaxima=200,delta=5){
    let velocidadeAtual = 0


    //metodo publico -- atributos
    this.acelerar = function(){
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        }else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    //metodo publico
    //retornando o valor da velocidadeAtual
    this.getvelocidadeAtual = function (){
        return velocidadeAtual
    }
}

//instanciando objeto através da classe Carro
const uno = new Carro()
uno.acelerar()
console.log(uno.getvelocidadeAtual())

const ferrari = new Carro(350,20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getvelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)