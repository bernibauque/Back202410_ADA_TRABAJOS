const readlineSync = require('readline-sync');

const listaCompras = [];
let continuar = true;

while (continuar) {
    const item = readlineSync.question('Ingresa un artículo para la lista de compras (o escribe "fin" para terminar): ');
    if (item.toLowerCase() === 'fin') {
        continuar = false;
    } else {
        listaCompras.push(item);
    }
}

console.log('Tu lista de compras:');
listaCompras.forEach((item, index) => console.log(`${index + 1}. ${item}`));
