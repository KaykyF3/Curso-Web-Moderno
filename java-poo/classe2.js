class Avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }


}

//Outra maneira de dizer que uma classe irá herdar de outro
    //Pai herda de avo
class Pai extends Avo{
    constructor(sobrenome,profissao='Professor'){
        //chamando o construtor da classe que super(Avo)
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai{
    constructor(){
        //Passando para o construtor da super classe (pai) o valor Silva 
        super('Silva') 
    }
}

const filho = new Filho
console.log(filho)