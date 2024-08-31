const funcs = []

for(let i = 0; i<10;i++){
    //passando o valor de I para o vetor funcs
    funcs.push(function(){
        console.log(i)
    })
}

//chamando a funcao de indice 2
funcs[2]()
funcs[8]()