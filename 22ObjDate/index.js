/*
const tresHras = 60 * 60 * 3 * 1000; // 3 horas em milesegundos
const umDIa = 60 * 60 * 24 * 1000;
const data = new Date(0 + tresHras + umDIa); // 01/01/1970 Timetamp unix
console.log(data .toString());
const data = new Date(2019, 11, 24, 23); a,m,d,h,m,s,ms
*/
const data = new Date('2013-02-20 20:21:45.500');
console.log('Todos', data.toString());
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1);
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia semana', data.getDay()); // 0 - Domingo ... 6 - Sábado

console.log(Date.now()); // timestamp