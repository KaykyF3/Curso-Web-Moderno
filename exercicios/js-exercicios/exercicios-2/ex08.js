//Exercício Objeto

const objeto = Object.create(null);
objeto.nome = 'Teste';
objeto.idade = 24;
objeto.descricao = 'Descrição Teste'


function removerPropriedade(objeto,propriedade){
    delete objeto[propriedade];
    return objeto
}   

console.log(removerPropriedade(objeto,'descricao'))


