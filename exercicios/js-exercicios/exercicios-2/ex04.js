/*Ex04 */

function receberBoolean(valor){
    if(typeof valor == "boolean"){
        if(valor == true){
            return console.log(false)
        }else {
            return console.log(true)
        }
    }else if(typeof valor == "number"){
        return console.log(valor * -1) 
    }else {
        return console.log(`O valor esperado era string ou number, mas o valor é ${typeof valor}`)
    }
}

receberBoolean('Testando')