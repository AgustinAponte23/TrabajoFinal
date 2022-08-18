let form = document.getElementById('formulario');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    let data = new FormData(form);
    let user = data.get('usuario')
    let password = data.get('contra');
    if (user === 'Admin' && password === 'admin123') {
        alert('Bienvenido')
    } else {
        error();
    }
})

function error() {
    document.getElementById('alerta').style.display = 'block';
}