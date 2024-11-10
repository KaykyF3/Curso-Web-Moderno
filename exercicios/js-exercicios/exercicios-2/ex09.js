
function receberArray(array){
    const array2 = new Array()
    for(i=0;i<array.length;i++){
        if(typeof array[i] == "number"){
            array2.push(array[i]) //jogando os números para o array2
        }
    }
    return array2
}


array1 = [232,'Teste1',4234,"Teste"]
console.log(receberArray(array1))
