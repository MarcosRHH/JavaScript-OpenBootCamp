const miNombre = 'Marcos';
const miApellido = 'Huanca';
const persona = {
    nombre: miNombre,
    apellido: miApellido
};
// aniadiendo al sessionStorage : se elimina al cerrar el navegador
sessionStorage.setItem("session-1", JSON.stringify(persona));
// aniadiendo al localStorage : se mantiene aunque cerremos el navegador
localStorage.setItem("persona", JSON.stringify(persona));

// cookie que caduca en 2 minutos : se mantiene el cookie aunque este haya caducado
let now = new Date();
let time = now.getTime();
time += 120 * 1000; // 2 minutos en milisegundos
let expires = new Date(time);

document.cookie = "myCookie=value;expires=" + expires.toUTCString();