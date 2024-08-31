function soma1(a,b,c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c 
}

console.log(soma1())

function soma2(a,b,c){
//a é difirente de undefined? se sim, recebe a, se não, recebe 1
    a = a !== undefined ? a : 1
//b está em argumentos? se sim, b recebe b, se não, recebe 1
    b = 1 in arguments ? b : 1
//c não é um número? se sim, recebe 1, se não recebe C
    c = isNaN(c) ? 1 : c
    return a + b + c
}

console.log(soma2(),soma2(3),soma2(1,2,3))

