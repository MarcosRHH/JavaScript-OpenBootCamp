// lista de compras 
let listaCompras = ['azucar', 'leche', 'Pollo', 'Pasta', 'sal'];
console.log(listaCompras);
// aniadiendo elemento a la lista
listaCompras.push('aceite de girasol');
console.log(listaCompras);
// eliminando elemento de la lista
listaCompras.pop('aceite de girasol');
console.log(listaCompras);
// lista de peliculas favoritas
let peliculasFavoritas = [
    pelicula_1 = {
        titulo: 'El Padrino',
        director: 'Francis Ford Coppola',
        fecha: new Date(1972, 7, 28)
    },
    pelicula_2 = {
        titulo: 'The Matrix',
        director: 'Lana y Lilly Wachowsky',
        fecha: new Date(1999, 4, 12)
    },
    pelicula3 = {
        titulo: 'Inteligencia Artificial',
        director: 'Steven Spielberg',
        fecha: new Date(2012, 7, 28)
    }
]
console.log(peliculasFavoritas);
// filtro de peliculas con filtro por fecha
const filtroPeliculas = peliculasFavoritas.filter( pelicula => pelicula.fecha > new Date(2010, 1, 1));
console.log(filtroPeliculas);
// lista de directores
const directores = peliculasFavoritas.map(pelicula => {return pelicula.director} ); 
console.log(directores);
// lista de titulos
const titulos = peliculasFavoritas.map(pelicula => {return pelicula.titulo});
console.log(titulos);
// union de arrays con concat
const directores_titulos_1 = directores.concat(titulos);
console.log(directores_titulos_1);
// union de arrays con spread(factor de propagacion)
const directores_titulos_2 = [...directores, ...titulos];
console.log(directores_titulos_2);
