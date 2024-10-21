document.getElementById('jugar').addEventListener('click', function() {
    const opciones = ['Piedra', 'Papel', 'Tijera'];
    const seleccionUsuario = document.querySelector('input[name="opcion"]:checked');
    
    if (!seleccionUsuario) {
        alert("Por favor, elige una opción.");
        return;
    }

    const usuario = parseInt(seleccionUsuario.value);
    const imagenUsuario = document.getElementById('mi-eleccion');
    imagenUsuario.src = `images/${opciones[usuario].toLowerCase()}.jpg`; 

 
    document.querySelector('.opciones-container').style.display = 'none';
    document.getElementById('jugar').style.display = 'none';

 
    document.getElementById('texto-eleccion').style.display = 'none'; 
    document.getElementById('resultados').style.display = 'block'; 

    let cambios = 0;
    let maquina = Math.floor(Math.random() * 3);
    const imagenMaquina = document.getElementById('maquina');

    const intervalo = setInterval(() => {
        maquina = Math.floor(Math.random() * 3);
        imagenMaquina.src = `images/${opciones[maquina].toLowerCase()}.jpg`;
        cambios++;

        if (cambios >= 20) {
            clearInterval(intervalo);

            mostrarResultado(usuario, maquina);
        }
    }, 100); 
});

function mostrarResultado(usuario, maquina) {
    const resultado = document.getElementById('resultado');

    if (usuario === maquina) {
        resultado.textContent = "¡Empate!";
    } else if ((usuario === 0 && maquina === 2) || 
               (usuario === 1 && maquina === 0) || 
               (usuario === 2 && maquina === 1)) {
        resultado.textContent = "¡Has ganado!";
    } else {
        resultado.textContent = "¡La máquina gana!";
    }

    resultado.style.display = 'block'; 

    document.getElementById('reiniciar').addEventListener('click', reiniciarJuego);
}

function reiniciarJuego() {
    document.getElementById('resultados').style.display = 'none'; 
    document.querySelector('.opciones-container').style.display = 'flex'; 
    document.getElementById('jugar').style.display = 'inline-block'; 
    document.getElementById('mi-eleccion').src = ''; 
    document.getElementById('maquina').src = ''; 
    document.getElementById('resultado').textContent = ''; 
    document.getElementById('texto-eleccion').style.display = 'block'; 
}

