/*
Operadores de comparação são usados para comparar dois valores. Eles retornam um valor booleano (true ou false) com base na comparação realizada.

> maior que
>= maior ou igual a
< menor que
<= menor ou igual a
== igual a (verifica apenas o valor, não o tipo)****** 
=== estritamente igual a (verifica valor e tipo)
!= diferente de (verifica apenas o valor, não o tipo)****
!== estritamente diferente de (verifica valor e tipo)

*/

console.log(10 > 5); // true
console.log(10 >= 10); // true
console.log(5 < 10); // true
console.log(5 <= 5); // true
console.log(10 == '10'); // true (verifica apenas o valor)
console.log(10 === '10'); // false (verifica valor e tipo)
console.log(10 != '5'); // true (verifica apenas o valor)
console.log(10 !== '10'); // true (verifica valor e tipo)   37

const comp = 10 > 5;
console.log(comp, 'é maior que 5');
