class Estudiante {
    constructor(nombre, asignaturas){
        this.nombre = nombre,
        this.asignaturas = asignaturas
    }

    obtenDatos(){
        let objetoEstudiante = new Estudiante(this.nombre, this.asignaturas);
        return objetoEstudiante;
    }
    
}

const Estudiante_1 = new Estudiante('Marco Huanca', ['Javascript', 'HTML', 'CSS']);

console.log(Estudiante_1.obtenDatos());
