//Função reverse = Reverte os dados de um array

//Revertendo uma string
let str = "Hello, world!";
let reversedStr = str.split('').reverse().join('');
console.log(reversedStr); // "!dlrow ,olleH"

/*split(''): Divide a string em um array de caracteres.
reverse(): Reverte o array.
join(''): Junta o array de volta em uma string. */

//Revertendo um array com números
let arr = [1, 2, 3, 4, 5];
let reversedArr = arr.reverse();
console.log(reversedArr); // [5, 4, 3, 2, 1]