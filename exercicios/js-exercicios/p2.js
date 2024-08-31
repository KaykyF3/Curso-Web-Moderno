function triang(n1,n2,n3){
    if(n1 != n2 && n2 != n3 && n1 != n3){
        return 'O triângulo é escaleno'
    }else if(n1 == n2 && n1 != n3 || n2 == n3 && n2 != n1){
        return 'O triângulo é isósceles'
    }else {
        return 'O triângulo é equilatero'
    }
}

console.log(triang(3,2,2))