let nombre = 'Marcos';
let apellido = 'Huanca';
let estudiante = `${nombre} ` + " " + `${apellido}`
console.log(estudiante);
let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);
let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);
let lengthEstudiante = estudiante.length;
console.log(lengthEstudiante);
let inicial = nombre.charAt(0);
console.log(inicial);
let final = apellido.charAt(apellido.length-1);
console.log(final);
let sinEspacios = estudiante.replaceAll(" ", "");
console.log(sinEspacios);
let booleano = estudiante.includes('Marcos');
console.log(booleano);