const cursos = [
    {
       nombre: 'Marketing Digital',
       descripcion: 'Con este curso podrás lograr un nivel avanzado. No se requieren conocimientos previos.',
       precio: 2300 
    },
    {
       nombre: 'Diseño grafico',
       descripcion: 'Aprende a manejar las mejores herramientas gratuitas para diseño grafico',
       precio: 3300 
    },
    {
       nombre: 'Arte Digital',
       descripcion: 'Conoce las mejores tecnicas del arte contemporaneo.',
       precio: 5000 
    }
]

   function filtro() {
    let busqueda = prompt('¿Qué curso quieres ver?');
    if (busqueda == "marketing digital") { 
        alert("Ya puedes ver la información del curso " + busqueda);
        document.write("Curso: " + cursos[0].nombre + " Descripción: " + cursos[0].descripcion + " Precio: $" + cursos[0].precio);
    } else if (busqueda == "diseño grafico"){
        alert("Ya puedes ver la información del curso " + busqueda);
        document.write("Curso: " + cursos[1].nombre + " Descripción: " + cursos[1].descripcion + " Precio: $" + cursos[1].precio);
    } 
    else if (busqueda == "arte digital"){
        alert("Ya puedes ver la información del curso " + busqueda);
        document.write("Curso: " + cursos[2].nombre + " Descripción: " + cursos[2].descripcion + " Precio: $" + cursos[2].precio);
    }
   }

filtro();





