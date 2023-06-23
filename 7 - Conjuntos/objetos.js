// mis datos personales
let datosPersonales = {
    nombre : 'Marcos',
    apellido : 'Huanca',
    edad : 28,
    altura : '173cm',
    eresDesarrollador : true
}
console.log(datosPersonales);
// Variable que obtiene la edad
let miEdad = datosPersonales.edad;
console.log(miEdad);
// Lista de objetos
let listaObjetos = [datosPersonales, { 
    nombre : 'Carmen',
    apellido : 'Poma',
    edad : 25,
    altura : '160cm',
    eresDesarrollador : false
}, {
    nombre : 'Miguel',
    apellido : 'Cocarico',
    edad : 28,
    altura : '163cm',
    eresDesarrollador : true
}];
console.log(listaObjetos);
//lista ordenada por edad
const listaOrdenada = listaObjetos.sort((a, b) => b.edad - a.edad);
console.log(listaOrdenada);
