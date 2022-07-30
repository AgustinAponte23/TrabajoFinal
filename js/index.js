// Objetos
alumno = {
    nombre: 'Agustin',
    apellido: 'Aponte',
    edad: 20,
}
// Array de objetos | Esta es una estructura de datos
const familia = [
    {
        nombre: 'Agustin',
        apellido: 'Aponte',
        edad: 20,
    },
    {
        nombre: 'Manuel',
        apellido: 'Aponte',
        edad: 20,
    }
]
for (let i = 0; i < familia.length; i++) {
    document.write(familia[i].nombre);
}

/* Iterador que recorre un array

const alumnos = ["Javier", "John", "Martin"];

for (let i = 0; i < alumnos.length; i++) {
    document.write(alumnos[i]);
    
}*/

// Metodo push para agregar un elemento al array
alumnos.push("Mariana");

// Metodo si un array incluye a "Sofia"
alumnos.includes("Mariano") // ==> Esto da false

/* Eliminar el elemento que queremos según el indice y la cantidad 
de elementos a la derecha que queres borrar*/
alumnos.splice(0, 1);
// Otro parametro es borrar segun indice y agregar el nombre "Sofia"
alumnos.splice(0,1, "Sofia");

