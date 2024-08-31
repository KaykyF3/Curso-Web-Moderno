function juros_simples(cap,tax,temp){
    return `Montante em juros Simples: ${cap+(cap*(tax/100)*temp)}`
}

function juros_compostos(cap,tax,temp){
    let taxa = 1 + (tax/100)
    let mont = cap*Math.pow(taxa,temp)
    return `Montante em juros Compostos: ${mont.toFixed(2)}`
}

console.log(juros_simples(2000,2,3))
console.log(juros_compostos(2000,2,3))