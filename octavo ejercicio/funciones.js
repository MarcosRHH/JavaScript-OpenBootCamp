// funcion que devuelve siempre true 
function siempreTrue(){
    return true;
}

console.log(siempreTrue());

// funcion asincrona con 5 segundos de retraso
async function funcionAsincrona(){
await new Promise (resolve => setTimeout(resolve,5000));
    console.log('hola soy una promesa');
}

console.log(funcionAsincrona());

// funcion generadora con indices pares automaticos
function* generadora(){
    let i = 0;
    while (true) {
        i+=2;
        if (i === 20) {
            return i
        }
        yield i;
    }
}

const gen = generadora();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);


