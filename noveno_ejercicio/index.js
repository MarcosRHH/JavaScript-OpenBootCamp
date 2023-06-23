// Funcion con error personalizado
const miFuncion = val => {
    throw new Error("Este es un mensaje personalizado");
}

// capturando el error personalizado
try {
    miFuncion();
} catch (e) {
    console.log(`capturamos el error: ${e}`);
}
