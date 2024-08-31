//funcao para gerar numeros aleatorios
function rand ( {min=0, max=1000} ){
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}
//passando objeto de max 50 e min 40 para a funcao
const obj = { max: 50,min:40} 
    //passando
console.log(rand(obj))
                //passando o minimo limitado até 955, e max até 1000(padrão)
console.log(rand({min:955}))