
function receberPrimeiroEUltimo(array){
    var novoArray = new Array;
    novoArray[0] = array[0]
    novoArray[1] = array[array.length -1]
    return novoArray
}

console.log(receberPrimeiroEUltimo([7,14,"olá"]))