//Função CALLBACK, é uma função que é chamada diversas vezes para realizar uma ação
const fabricantes = ["Mercedes","Audi","BMW"]

function imprimir(nome,indice){
    console.log(`${indice}. ${nome}`)
}
//para cada elemento do array, faça algo... (No caso chamar a função fabricantes)
fabricantes.forEach(imprimir)

                //cada elemento do array será passado como parâmetro para a função
fabricantes.forEach(function(fabricante){
        console.log(fabricante)
})