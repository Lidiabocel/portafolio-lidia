const formulario = document.getElementById('formulario-contacto');

if (formulario) {
    const boton = document.getElementById('validar-contacto');
    const respuesta = document.getElementById('respuesta-formulario');

    formulario.addEventListener('submit', function (evento) {
        evento.preventDefault();

        const nombre = document.getElementById('nombre').value.trim();
        const correo = document.getElementById('correo').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();

        if (nombre === '' || correo === '' || mensaje === '') {
            respuesta.textContent = 'Completa todos los campos.';
            return;
        }

        const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formatoCorreo.test(correo)) {
            respuesta.textContent = 'Ingresa un correo electrónico válido.';
            return;
        }

        respuesta.textContent =
            '¡Datos válidos! Esta es una demostración: el mensaje no se ha enviado.';
    });

    boton.disabled = false;
}
const botonMenu = document.querySelector('.boton-menu');
const menu = document.getElementById('menu-principal');

if (botonMenu && menu) {
    botonMenu.addEventListener('click', function () {
        const abierto = menu.classList.toggle('abierto');

        botonMenu.setAttribute('aria-expanded', abierto);
    });
}

const botonesFiltro = document.querySelectorAll('[data-filtro]');
const tarjetasProyecto = document.querySelectorAll('.tarjeta-proyecto');

botonesFiltro.forEach(function (boton) {
    boton.addEventListener('click', function () {
        const filtro = boton.dataset.filtro;

        tarjetasProyecto.forEach(function (tarjeta) {
            const tecnologias = tarjeta.dataset.tecnologias.split(' ');

            if (filtro === 'todos' || tecnologias.includes(filtro)) {
                tarjeta.hidden = false;
            } else {
                tarjeta.hidden = true;
            }
        });
    });
});