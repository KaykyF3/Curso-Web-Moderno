/*
operador unário = 1 operando
operador binário = 2 operandos
operador ternário = 3 operandos
*/
function resultado (nota) {
                //se nota for maior que sete, res recebe aprovado, caso for o contrário, reprovado
    return nota >= 7 ? 'Aprovado':'Reprovado'
}

console.log(resultado(6))