/*
Operadores Lógicos
&& (AND) E
|| (OR) OU
!  (NOT) Não
*/
console.log(true &&  true) // true se eu tenho dinheiro e esta chuvendo 'sim'
console.log(true && false) // false 
console.log(false && true) // false
console.log(false && false) // false;
// Todas as expressões precisam ser verdadeiras para retornar true

console.log(true || true) // true
console.log(true || false) // true
console.log(false || true) // true
console.log(false || false) // false
// Apenas uma expressão precisa ser verdadeira para retornar true

console.log(!true) // false
console.log(!false) // true
// Inverte o valor lógico   

const usuario = 'Luiz'
const senha = '123456'

const vaiLogar = usuario === 'Luiz' && senha === '123456'
console.log(vaiLogar) // true