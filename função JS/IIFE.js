// IIFE = Immediately Invoked Function Expression

//Função anônima que irá ser auto-invocada
/*Essa técnica é frequentemente usada em JavaScript para encapsular variáveis 
e funções dentro de um escopo local, ajudando a evitar conflitos com outras partes do código */
(
    function(){
        console.log("Testando a função anônima.")
        console.log('Foge do escopo mais abrangente')
    }
)()