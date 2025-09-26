/*
Operador Ternário (? :)
É uma forma reduzida de fazer um if e else.
É composto por três partes:
1ª parte: condição (if)
2ª parte: valor se verdadeiro (then)
3ª parte: valor se falso (else)
*/
const pontuacaoUsario = 199;

if (pontuacaoUsario <= 2000){
    console.log('Usuário VIP');
} else {
    console.log('Usuário normal');
}

const nivelUsuario = pontuacaoUsario >= 1000 ? 'Usario VIP' : 'Usuário Normal'; // Condição ? valor se verdadeiro : valor se falso
console.log(nivelUsuario);
