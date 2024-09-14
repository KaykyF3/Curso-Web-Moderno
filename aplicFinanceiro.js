capInicial = 1000;
aplicMensal = 20;
tempAplic = 3;
taxa = 5;

montante = capInicial;
for(i=0;i<tempAplic;i++){
    montante += aplicMensal;
    montante *= (1+taxa/100);
}

console.log(montante);

/*
somaTotalJuros = capInicial;

for(i=0;i<tempAplic;i++){
    capInicial += aplicMensal
    montante = capInicial * (1+(taxa/100))
    capInicial = montante;
    console.log(capInicial)
}
*/

/*
for(i=0;i<tempAplic;i++){
    somaTotalJuros += aplicMensal
	juros = (somaTotalJuros * taxa)/100
    somaTotalJuros += juros
    console.log(somaTotalJuros)
}
*/

//M = Capital * (1+juros)^t

