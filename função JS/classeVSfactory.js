class Pessoa {
    constructor(nome){
        this.nome = nome
    }
    
    falar(){
        console.log(`O meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Kayky')

p1.falar()


const criarPessoa = function(nome) {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = new criarPessoa('João')

p2.falar()