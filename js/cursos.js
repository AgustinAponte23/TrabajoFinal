
document.addEventListener('DOMContentLoaded', () => {

    // Api
    const API_URL = "https://63136bacb466aa9b03992c51.mockapi.io/"
    // Conexión con API
    const xhr = new XMLHttpRequest();   

    // Función API
    function request() {
        if (this.readyState === 4 && this.status === 200) {
            const data = JSON.parse(this.response);
            const HtmlResponse = document.querySelector('#columna');

            const template = data.map((curso) => `<li>${data[0].nombre}</li> <li>${data[1].nombre}</li> <li>${data[2].nombre}</li>`)
            HtmlResponse.innerHTML = `<ul>${template}</ul>`;
        }
    }

    xhr.addEventListener('load', request);
    xhr.open('GET', `${API_URL}/cursos`);
    xhr.send();
 
    
    // Array Cursos
    const cursosDefault = [
        {
            id: 1,
            nombre: 'CursoMarketing Digital',
            precio: 2400,
        },
        {
            id: 2,
            nombre: 'Curso Diseño grafico',
            precio: 3200,
        },
        {
            id: 3,
            nombre: 'Curso Arte Digital',
            precio: 4000,
        },

    ];

    //Variables
    let carrito = [];  
    console.log(carrito);
    const divisa = '$';
    const DOMitems = document.querySelector('#items');
    const DOMcarrito = document.querySelector('#carrito');
    const DOMbotonVaciar = document.querySelector('#boton-vaciar');
    const miLocalStorage = window.localStorage;

    // Funciones
    function renderizarProductos() {
        cursosDefault.forEach((info) => {
            // Estructura
            const miNodo = document.createElement('div');
            miNodo.classList.add('card', 'col-12');
            // Body
            const miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body');
            // Titulo
            const miNodoTitle = document.createElement('h5');
            miNodoTitle.classList.add('card-title');
            miNodoTitle.textContent = info.nombre;
            // Imagen
            const miNodoImagen = document.createElement('img');
            miNodoImagen.classList.add('img-fluid');
            miNodoImagen.setAttribute('src', info.imagen);
            // Precio
            const miNodoPrecio = document.createElement('p');
            miNodoPrecio.classList.add('card-text');
            miNodoPrecio.textContent = `${info.precio}${divisa}`;
            // Boton 
            const miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn', 'btn-success');
            miNodoBoton.textContent = 'Agregar';
            miNodoBoton.setAttribute('marcador', info.id);
            miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
            // Insert
            miNodoCardBody.appendChild(miNodoImagen);
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCardBody);
            DOMitems.appendChild(miNodo);
        });
    }

    // Añadir curso a carrito
    function anyadirProductoAlCarrito(evento) {
        carrito.push(evento.target.getAttribute('marcador')) 
        renderizarCarrito();
        guardarCarritoEnLocalStorage();
    }

    // Cursos guardados en carrito
    function renderizarCarrito() {
        DOMcarrito.textContent = '';
        const carritoSinDuplicados = [...new Set(carrito)];
        carritoSinDuplicados.forEach((item) => {
            const miItem = cursosDefault.filter((itemCursos) => {
                return itemCursos.id === parseInt(item);
            });

            // Cantidad
            const numeroUnidadesItem = carrito.reduce((total, itemId) => {
                return itemId === item ? total += 1 : total; // Operador avanzado ?
            }, 0);
            
            // Item del carrito
            const miNodo = document.createElement('li');
            miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
            miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;

            // Acción borrar
            const miBoton = document.createElement('button');
            miBoton.classList.add('btn', 'btn-danger', 'mx-5');
            miBoton.textContent = 'X';
            miBoton.style.marginLeft = '1rem';
            miBoton.dataset.item = item;
            miBoton.addEventListener('click', borrarItemCarrito);
            miNodo.appendChild(miBoton);
            DOMcarrito.appendChild(miNodo);
        });
    }

    // Vaciar
    function borrarItemCarrito(evento) {
        const id = evento.target.dataset.item;
        carrito = carrito.filter((carritoId) => {
            return carritoId !== id;
        });
        renderizarCarrito();
        guardarCarritoEnLocalStorage();

    }

    // Actualizar
    function vaciarCarrito() {
        carrito = [];
        renderizarCarrito();
        localStorage.clear();
        Swal.fire(
            'Vaciaste correctamente!',
            'Tus pedidos se esfumaron',
            'success'
          )
    }

    function guardarCarritoEnLocalStorage () {
        miLocalStorage.setItem('carrito', JSON.stringify(carrito));
    }

    function cargarCarritoDeLocalStorage () {
        // ¿Existe un carrito previo guardado en LocalStorage?
        if (miLocalStorage.getItem('carrito') !== null) {
            // Carga la información
            carrito = JSON.parse(miLocalStorage.getItem('carrito'));
        }
    }


    // Eventos
    DOMbotonVaciar.addEventListener('click', vaciarCarrito);

    // Inicio
    cargarCarritoDeLocalStorage();
    renderizarProductos();
    renderizarCarrito();


});