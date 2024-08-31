function tratarErroLancar(erro){
    //throw(lança) responde o erro do algoritmo com alguma coisa
    throw new Error('Ocorreu um erro: ' + erro.message);
}

function imprimirNomeGritado(obj){  
    try{
                //name e não nome, irá gerar um erro
        console.log(obj.name.toUpperCase() + '!!!')
        //bloco de código que irá manter uma instrução que pode gerar algum tipo de erro ou exceção
    }
    //se der erro, o bloco catch irá pegar o erro e gerar uma resposta ao erro
        //e=erro
    catch(e) {
        tratarErroLancar(e)
    }finally {
        console.log('Final')
    }
}

const obj = {
    nome: 'Roberto'
}


imprimirNomeGritado(obj)