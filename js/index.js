const listaCursos = [];

// Curso template y metodos
class curso {
    constructor(nombre, descripcion, precio) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio; 
    }

    agregarCurso(){
        listaCursos.push(cursoMD);
    }

    eliminarCurso(){
        listaCursos.pop();
    }

    
}
// Creación del curso y push al array de ListaCursos
const cursoMD = new curso('Marketing digital', 'El mejor curso de redes sociales para principiantes', 1500);
cursoMD.agregarCurso();


// Funciones
function mostrarCurso() {
    document.write(listaCursos[0].nombre , listaCursos[0].descripcion , listaCursos[0].precio)
}

function filtro() {
    let busqueda = prompt('¿Qué curso quieres ver? (Número 1 para marketing digital)');
    if (busqueda == 1) { 
        mostrarCurso();
    }
}

filtro();


// Final de programa

let repetir = confirm("¿Quieres ver algun curso mas?");

if (repetir) {
    filtro();
} else {
    alert("Gracias por utilizar nuestra web");
}
// Se elimina el curso 
cursoMD.eliminarCurso();





