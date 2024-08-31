function testando(num){
	try{
 		if(num == 3){
    		throw new Error('Não irá funcionar');
        }
		console.log(num);
    }catch(erro){
  		console.log(`Erro: ${erro.message}`);
  	}
}

testando(3);