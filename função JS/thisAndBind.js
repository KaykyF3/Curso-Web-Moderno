const pessoa = {
    //atributo
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //irá dar erro pois o algoritmo 'não sabe onde está' a função falar, apenas com a referência PESSOA
const falardePessoa = pessoa.falar.bind(pessoa) 
//a constante irá armazenar a função constante
//funcao bind irá passar o elemento pra função que será referenciado como objeto
/* A função bind é utilizada para criar uma nova função onde o valor de this é pré-definido. 
Isso significa que quando você usa bind, 
está configurando qual objeto será referenciado como this quando a nova função for executada. */
/*
Quando você faz const novaFuncao = funcaoOriginal.bind(novoThis);, 
você está criando uma nova função (novaFuncao) 
que é essencialmente uma versão da função original (funcaoOriginal), 
porém com o contexto this vinculado a novoThis.
*/