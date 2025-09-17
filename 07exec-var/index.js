let varA = 'a' //b
let varB = 'b' //c
let varC = 'c' //d

let empy= ''
let somaA = empy + varB
let somaB = empy + varC
let somaC = empy + varA
varA = somaA
varB = somaB
varC = somaC
console.log(varA, varB, varC); // Output: a b c