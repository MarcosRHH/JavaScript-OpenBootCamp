// fecha de hoy
let date = new Date();
console.log(date);
// fecha de nacimiento
const dateNac = new Date(1994, 8, 28);
console.log(dateNac);
// comparacion de fechas
const masTarde = date > dateNac;
console.log(masTarde);
// mi dia de nacimiento
const dayNac = dateNac.getDay();
console.log(dayNac);
// mi mes de nacimiento
const monthNac = dateNac.getMonth()+1;
console.log(monthNac);
// mi anio de nacimiento
const yearNac = dateNac.getFullYear();
console.log(yearNac);

