function divisao(dividendo,divisor){
    return `Res: ${(dividendo/divisor).toFixed(2)}, Resto: ${dividendo%divisor}`
}

console.log(divisao(3,2))