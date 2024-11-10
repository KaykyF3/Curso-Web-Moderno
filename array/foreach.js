const aprovados = ['Agatha','Aldo','Daniel','Raquel']

//Para cada elemento do vetor, imprima na tela o índice e o nome...
aprovados.forEach(function(nome,indice){
    console.log(`${indice+1} ${nome}`)  
})

aprovados.forEach(nome => console.log(nome))
