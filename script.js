// 1. REEMPLAZO AUTOMÁTICO DE TEXTOS
// Lee la variable 'configCliente' de tu HTML al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    if (typeof configCliente !== 'undefined') {
        document.getElementById('titulo-principal').innerText = `¡Felices ${configCliente.edad} años, ${configCliente.nombre}!`;
        document.getElementById('subtitulo').innerText = configCliente.fraseIntro;
        document.getElementById('mensaje-texto').innerText = configCliente.mensajePrincipal;
        document.querySelector('.firma').innerText = `Con cariño, ${configCliente.quienRegala}`;
        
        // Iniciar el reloj de cuenta regresiva
        iniciarCuentaRegresiva(configCliente.fechaEvento);
    }
});

// 2. REPRODUCTOR DE MÚSICA
const btnMusica = document.getElementById('btn-play-musica');
const audioFondo = document.getElementById('musica-fondo');

btnMusica.addEventListener('click', () => {
    if (audioFondo.paused) {
        audioFondo.play();
        btnMusica.innerText = "Pausar Música ⏸️";
    } else {
        audioFondo.pause();
        btnMusica.innerText = "Reproducir Sorpresa 🎵";
    }
});

// 3. LÓGICA DE LA CUENTA REGRESIVA
function iniciarCuentaRegresiva(fechaObjetivo) {
    // Convierte la fecha del cliente a formato de tiempo
    const fechaFin = new Date(fechaObjetivo).getTime();

    // Actualiza el reloj cada segundo (1000 milisegundos)
    const intervalo = setInterval(() => {
        const ahora = new Date().getTime();
        const distancia = fechaFin - ahora;

        // Cálculos matemáticos para días, horas, minutos y segundos
        const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

        // Si la fecha aún no llega, muestra los números
        if (distancia > 0) {
            document.getElementById('temporizador').innerHTML = 
                `<span>${dias}d</span> : <span>${horas}h</span> : <span>${minutos}m</span> : <span>${segundos}s</span>`;
        } else {
            // Si la fecha ya pasó o es hoy, detiene el reloj y muestra un mensaje
            clearInterval(intervalo);
            document.getElementById('temporizador').innerHTML = "¡Llegó el gran día! 🎉";
        }
    }, 1000);
}