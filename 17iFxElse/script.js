// 0 - 11 - Bom dia!
// 12 - 17 - Boa tarde!
// 18 - 23 - Boa noite!
//If pode ser usado sozinho
//Sempre que utilizamos a palavra else, precisamos de um if antes
//Podemos ter vários else if na checagem
//Só podemos ter um else na checagem

const hora = 118;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia!');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa Tarde!');
} else if (hora >= 18 & hora <= 23) {
    console.log('Boa Noite!');
} else {
    console.log('Hora inválida!');
}

const tenhoGrana = false;
if (tenhoGrana) {
    console.log('Vou sair de casa!');
} else {
    console.log('Não vou sair de casa!');
}