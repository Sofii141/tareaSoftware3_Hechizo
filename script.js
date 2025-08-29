// SCRIPT PARA ANIMACIONES, PARTÍCULAS Y EVENTOS

document.addEventListener('DOMContentLoaded', () => {
    // --- Lógica para animaciones de entrada ---
    const animatedElements = document.querySelectorAll('.hidden');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) { entry.target.classList.add('show'); }
        });
    }, { threshold: 0.2 });
    animatedElements.forEach(el => observer.observe(el));

    // --- Añadir hechizo por defecto ---
    agregarHechizo("Pacto Infernal");

    // --- Lógica para el boton de enviar ---
    const botonPacto = document.getElementById('enviar-alma');
    if (botonPacto) {
        botonPacto.addEventListener('mouseover', () => { botonPacto.textContent = 'ENTREGAR ALMA'; });
        botonPacto.addEventListener('mouseout', () => { botonPacto.textContent = 'FIRMAR PACTO'; });
    }

    // ---Inicialización de las Partículas ---
    particlesJS("particles-js", {
        "particles": { "number": { "value": 80, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#9333ea" }, "shape": { "type": "circle" }, "opacity": { "value": 0.5, "random": true }, "size": { "value": 3, "random": true }, "line_linked": { "enable": false }, "move": { "enable": true, "speed": 0.5, "direction": "none", "random": true, "straight": false, "out_mode": "out", "bounce": false } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "bubble" }, "onclick": { "enable": false }, "resize": true }, "modes": { "bubble": { "distance": 150, "size": 5, "duration": 2, "opacity": 1 } } }, "retina_detect": true
    });
});

// CÓDIGO DEL GRIMORIO Y FORMULARIO
let contadorHechizos = 0;
const listaHechizos = document.getElementById('lista-hechizos');
const contadorElement = document.getElementById('contador');
function actualizarContador() { contadorElement.textContent = contadorHechizos; }
document.getElementById('btn-agregar').addEventListener('click', function() { const input = document.getElementById('nuevo-hechizo'); const textoHechizo = input.value.trim(); if (textoHechizo !== '') { agregarHechizo(textoHechizo); input.value = ''; input.focus(); } });
document.getElementById('nuevo-hechizo').addEventListener('keypress', function(e) { if (e.key === 'Enter') { document.getElementById('btn-agregar').click(); } });

function agregarHechizo(texto) {
    const li = document.createElement('li');
    li.className = 'hechizo';
    li.innerHTML = `<span>${texto}</span><div class="acciones"><button class="btn-accion aprender">Aprender</button><button class="btn-accion eliminar">Eliminar</button></div>`;
    const aprenderBtn = li.querySelector('.aprender');
    if (texto === "Pacto Infernal") {
        aprenderBtn.addEventListener('click', () => { document.getElementById('seccion-pacto')?.scrollIntoView({ behavior: 'smooth', block: 'center' }); });
    } else {
        aprenderBtn.addEventListener('click', function() { li.classList.toggle('aprendido'); this.textContent = li.classList.contains('aprendido') ? 'Desaprender' : 'Aprender'; });
    }
    li.querySelector('.eliminar').addEventListener('click', () => { li.remove(); contadorHechizos--; actualizarContador(); });
    listaHechizos.appendChild(li);
    contadorHechizos++;
    actualizarContador();
}

const tablaInfernal = document.getElementById('lista-infernal').getElementsByTagName('tbody')[0];
const formulario = document.getElementById('infernal-form');
const listaUsos = ["Minar Cryptos", "Crear Arte Furro", "Crear Vapes de Hello Kitty", "Alimentar Seres de Luz"];

function agregarAlma(nombre, apellido, tarjeta) {
    const nuevaAlma = tablaInfernal.insertRow();
    nuevaAlma.className = 'alma';
    let numeroAleatorio = Math.floor(Math.random() * listaUsos.length);
    nuevaAlma.innerHTML = `<td>${nombre}</td><td>${apellido}</td><td>${tarjeta}</td><td>${listaUsos[numeroAleatorio]}</td>`;
}

// --- LÓGICA DEL RITUAL DE SELLADO ---
document.getElementById('enviar-alma').addEventListener('click', function(event) {
    event.preventDefault();
    const elemento_check = document.getElementById('checkalma');
    if (elemento_check.checked) {
        const nombre = document.getElementById('nombre').value.trim();
        const apellido = document.getElementById('apellido').value.trim();
        const tarjeta = document.getElementById('tarjeta').value.trim();
        const vencimiento = document.getElementById('vencimiento').value.trim();
        const cvv = document.getElementById('cvv').value.trim();
        
        if (nombre && apellido && tarjeta && vencimiento && cvv) {
            const formWrapper = document.getElementById('form-wrapper');
            const ritualContainer = document.getElementById('ritual-container');
            const successMessage = document.getElementById('success-message');

            // 1. Ocultar el formulario con una transición suave
            formWrapper.style.opacity = '0';
            setTimeout(() => {
                formWrapper.style.display = 'none';

                // 2. Mostrar y animar el ritual (una vez que el form está oculto)
                ritualContainer.classList.remove('ritual-hidden');
                ritualContainer.style.display = 'flex';
                setTimeout(() => {
                    ritualContainer.style.opacity = '1';
                    ritualContainer.classList.add('animate-draw');
                }, 10); // Pequeño delay para que la transición de opacidad se active

            }, 800); // Espera 0.8s (la duración de la transición de opacidad)

            // 3. Después de la animación, ocultar ritual y mostrar mensaje de éxito
            setTimeout(() => {
                ritualContainer.style.opacity = '0';
                setTimeout(() => {
                    ritualContainer.style.display = 'none';
                    ritualContainer.classList.remove('animate-draw'); // Resetear animación

                    // Mostrar mensaje de éxito
                    successMessage.classList.remove('ritual-hidden');
                    successMessage.style.display = 'flex';
                    setTimeout(() => {
                        successMessage.style.opacity = '1';
                    }, 10);
                    
                    // Realizar las acciones de fondo
                    agregarAlma(nombre, apellido, tarjeta);
                    formulario.reset();
                }, 800);
            }, 3000); // 0.8s (fade out form) + 2.2s (animación)

            // 4. Después de mostrar el mensaje, hacer scroll a la tabla
            setTimeout(() => {
                document.getElementById('seccion-tabla')?.scrollIntoView({ behavior: 'smooth' });
                
                // 5. Resetear todo para un nuevo pacto
                setTimeout(() => {
                    successMessage.style.opacity = '0';
                    setTimeout(() => {
                        successMessage.style.display = 'none';
                        
                        // Volver a mostrar el formulario
                        formWrapper.style.display = 'block';
                        setTimeout(() => {
                            formWrapper.style.opacity = '1';
                        }, 10);
                    }, 800);
                }, 2000); // El mensaje de éxito se ve por 2s

            }, 5000); // 3s (ritual) + 2s (mensaje)

        } else {
            alert('Por favor, complete todos los campos requeridos para el pacto.');
        }
    } else {
        alert('Debe aceptar que su alma sea consumida para fines maquiavélicos.');
    }
});
