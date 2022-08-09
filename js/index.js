const listaCursos = [];

// Curso template
class Curso {
    constructor(nombre, descripcion, precio) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio; 
    }
}

// Creación del curso y push al array de ListaCursos
const cursoMd = new Curso('Marketing digital', 'El mejor curso de redes sociales para principiantes', 1500);
const cursoAd = new Curso('Arte digital', 'Conoce las mejores herramientas para el arte digital' ,3500);
const cursoDg = new Curso('Diseño grafico', 'Aprende a diseñar las mejores graficas' ,5500);
// Push
listaCursos.push(cursoMd);
listaCursos.push(cursoAd);
listaCursos.push(cursoDg);


// Funciones
function mostrar() {
    document.getElementById('buscador').style.display = 'block';
}
function eliminarCurso() {
    listaCursos.pop();
    for (const curso of listaCursos) {
        console.log('Queda el curso: ' + curso.nombre);
    }
}
// Eventos
const eliminar = document.getElementById('eliminar');
eliminar.onclick = eliminarCurso;


// Control del buscador
let form = document.getElementById('formulario');

form.addEventListener('submit', function (e){
    e.preventDefault(); 
    let datos = new FormData(form);
    let cursoBuscado = datos.get('nombre');

    // Validación
    if (cursoBuscado === "marketing digital") {
        alert('Nombre: ' + listaCursos[0].nombre + ' Descripción:' + listaCursos[0].descripcion + ' Precio de: ' + ' $ ' + listaCursos[0].precio)
    } else if(cursoBuscado === "arte digital") {
        alert('Nombre: ' + listaCursos[1].nombre + ' Descripción:' + listaCursos[1].descripcion + ' Precio de: ' + ' $ ' + listaCursos[1].precio)
    }else if(cursoBuscado === "diseño grafico"){
        alert('Nombre: ' + listaCursos[2].nombre + ' Descripción:' + listaCursos[2].descripcion + ' Precio de: ' + ' $ ' + listaCursos[2].precio)
    }
})








