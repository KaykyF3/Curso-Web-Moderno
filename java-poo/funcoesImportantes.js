const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

                //Função que irá mostrar as chaves do objeto (nome,idade,peso)
console.log(Object.keys(pessoa))
                //Função que irá mostrar os dados de cada chave (Rebeca,2,13)
console.log(Object.values(pessoa))
                //Função que irá mostrar a chave e o dado de cada objeto
console.log(Object.entries(pessoa))


//para cada elemento de pessoa, irei mostrar no console
Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
});

//Object.assign (ECMAScript 2015)
const dest = {a:1}
const o1 = {b:2}
const o2 = {c:3, a: 4}
                    //passando os dados do objeto o1 e o2 para o objeto dest
const obj = Object.assign(dest,o1,o2)

console.log(obj)