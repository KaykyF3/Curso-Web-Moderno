//Objeto
//Métodos set e get
const sequencia = {
    valor: 1,
    get valorGet(){
        return this.valor
    },

    set valorSet(Valor){
        this.valor += Valor
    }
}

sequencia.valor = 1000
console.log(sequencia.valorGet)

sequencia.valorSet = 10

console.log(sequencia.valorGet)