function pessoa(){
    //atributo idade
    this.idade = 0
    //dispara uma instrução após um intervalo
    setInterval(
        function(){
            this.idade++
            console.log(this.idade)
        }
        //após 1000ms
        //passando o this como objeto
        .bind(this),1000)
}

p1 = new pessoa(); 

p1.idade