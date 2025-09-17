/*
Primitivvos - string - number - boolean - undefined - null (symbol - bigint) Valors imutáveis - não dá pra mudar o valor da variável, mas dá pra mudar o conteúdo.

Refereência - array - object - function - valores mutáveis
*/
//          0123
// let nome = "Luiz"; // string
// nome = "Otávio";
// console.log(nome[1]);

// // alterando o valor da variável
// let a = 'A'
// let b = a //  Copia o valor
// console.log(a, b);

// a = 'Outra coisa'
// console.log(a, b);

let a = [1,2,3]
let b = a;
console.log(a, b);

a.push(4)
console.log(a, b);

b.pop()
console.log(b, a);
