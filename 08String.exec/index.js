//               0123456789
let umaString = 'Uma String';

console.log(umaString[0]); // U
console.log(umaString.charAt(2)); //a
console.log(umaString.concat(' é legal D+!')); 
console.log(`${umaString} é legal!`);

console.log(umaString.indexOf('S')); // 4
console.log(umaString.replace(/r/, '#'));
console.log(umaString.length); //retorna o tamanho da string deis do 1
console.log(umaString.split(' ', 1)); // ['Uma', 'String']
