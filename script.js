
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.hidden');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.2
    });
    animatedElements.forEach(el => observer.observe(el));

    agregarHechizo("Pacto Infernal");
});

// =============================  Usurpador del saber  =============================
let contadorHechizos = 0;
const listaHechizos = document.getElementById('lista-hechizos');
const contadorElement = document.getElementById('contador');

function actualizarContador() {
    contadorElement.textContent = contadorHechizos;
}

document.getElementById('btn-agregar').addEventListener('click', function() {
    const input = document.getElementById('nuevo-hechizo');
    const textoHechizo = input.value.trim();
    if (textoHechizo !== '') {
        agregarHechizo(textoHechizo);
        input.value = '';
        input.focus();
    }
});

document.getElementById('nuevo-hechizo').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('btn-agregar').click();
    }
});

function agregarHechizo(texto) {
    const li = document.createElement('li');
    li.className = 'hechizo';
    li.innerHTML = `<span>${texto}</span><div class="acciones"><button class="btn-accion aprender">Aprender</button><button class="btn-accion eliminar">Eliminar</button></div>`;
    
    const aprenderBtn = li.querySelector('.aprender');
    const eliminarBtn = li.querySelector('.eliminar');

    if (texto === "Pacto Infernal") {
        aprenderBtn.addEventListener('click', function() {
            const seccionPacto = document.getElementById('seccion-pacto');
            if (seccionPacto) {
                
                seccionPacto.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    } else {
        aprenderBtn.addEventListener('click', function() {
            li.classList.toggle('aprendido');
            this.textContent = li.classList.contains('aprendido') ? 'Desaprender' : 'Aprender';
        });
    }
    
    eliminarBtn.addEventListener('click', function() {
        li.remove();
        contadorHechizos--;
        actualizarContador();
    });
    
    listaHechizos.appendChild(li);
    contadorHechizos++;
    actualizarContador();
}

// =============================  Sacrificio de alma sangrante  =============================
const tablaInfernal = document.getElementById('lista-infernal').getElementsByTagName('tbody')[0];
const formulario = document.getElementById('infernal-form');
const listaUsos = ["Minar Cryptos", "Crear Arte Furro", "Crear Vapes de Hello Kitty", "Alimentar Seres de Luz"];

function agregarAlma(nombre, apellido, tarjeta) {
    const nuevaAlma = tablaInfernal.insertRow();
    nuevaAlma.className = 'alma';
    let numeroAleatorio = Math.floor(Math.random() * listaUsos.length);
    nuevaAlma.innerHTML = `<td>${nombre}</td><td>${apellido}</td><td>${tarjeta}</td><td>${listaUsos[numeroAleatorio]}</td>`;
}

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
            agregarAlma(nombre, apellido, tarjeta);
            formulario.reset();
            alert('Pacto firmado. Su alma ahora nos pertenece. 🌚');

            const seccionTabla = document.getElementById('seccion-tabla');
            if (seccionTabla) {
                seccionTabla.scrollIntoView({ behavior: 'smooth' });
            }

        } else {
            alert('Por favor, complete todos los campos requeridos para el pacto.');
        }
    } else {
        alert('Debe aceptar que su alma sea consumida para fines maquiavélicos.');
    }
});