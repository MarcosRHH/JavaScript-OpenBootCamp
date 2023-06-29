// instalar http server de node: npm install --global http-server
// iniciar node en el proyecto: npm init -y
// aniadir al script del package.json : "start": "http-server ."
// iniciar: npm start

const button = document.getElementById("button");

button.addEventListener('click', function() {
    alert('Click en el boton');
});

// seleccionar boton usando JQuery
const button2 = $('button');

button2.click( () => {
    console.log('Hola, estoy utilizando jQuery');
})