//A variável pessoa possui na memória um endereço (123) Exemplo
// Lá no endereço da memória temos o objeto 
const pessoa = {
    nome: 'João'
}

pessoa.nome = 'Kauã';
console.log(pessoa.nome)
pessoa.nome = 'Davi';
console.log(pessoa.nome)
pessoa.nome = 'Kayky';
console.log(pessoa.nome)

/*Essa função congela a variável, impedindo que ela receba novos dados 
O último dado ainda permanecerá nela */
Object.freeze(pessoa)

pessoa.nome = 'Teste'
console.log(pessoa.nome)
