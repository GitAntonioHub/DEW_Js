let eleccionUsuario = ''; 

function elegir(opcion) {
    eleccionUsuario = opcion; 
    document.querySelector('h1').style.display = 'none';
    document.querySelectorAll('.opcion').forEach(op => op.style.display = 'none'); 
    lanzarMoneda(); 
}

function lanzarMoneda() {
    const coin = document.getElementById('coin');
    const resultados = ['images/cara.jpg', 'images/cruz.jpg'];
    const resultadoTexto = document.getElementById('resultado');
    resultadoTexto.textContent = '';
    let count = 0;
    let velocidad = 100; 
    const duracionTotal = 14; 
    const interval = setInterval(() => {
        const randomSide = Math.floor(Math.random() * 2); 
        coin.src = resultados[randomSide]; 
        count++;
        velocidad += 50; 
        if (count === duracionTotal) { 
            clearInterval(interval);
            const finalResult = Math.floor(Math.random() * 2);
            coin.src = resultados[finalResult]; 
            const resultadoMoneda = finalResult === 0 ? 'cara' : 'cruz';
            if (eleccionUsuario === resultadoMoneda) {
                resultadoTexto.textContent = '¡Enhorabuena, has ganado!';
                resultadoTexto.classList.add('ganar');
            } else {
                resultadoTexto.textContent = '¡Lástima, inténtalo otra vez!';
                resultadoTexto.classList.add('perder');
            } 
            mostrarBotonReinicio();
        }
    }, velocidad); 
}

function mostrarBotonReinicio() {
    const botonReiniciar = document.createElement('button');
    botonReiniciar.textContent = 'Probar de nuevo';
    botonReiniciar.classList.add('btn-reiniciar');
    botonReiniciar.onclick = reiniciarSimulacion; 

    const container = document.querySelector('.container');
    container.appendChild(botonReiniciar);
}

function reiniciarSimulacion() {
    document.querySelector('h1').style.display = 'block';
    document.querySelectorAll('.opcion').forEach(op => op.style.display = 'inline-block'); 
    
    const resultadoTexto = document.getElementById('resultado');
    resultadoTexto.textContent = '';
    resultadoTexto.classList.remove('ganar', 'perder');
    
    const coin = document.getElementById('coin');
    coin.src = 'images/caracruz.jpg';

    const botonReiniciar = document.querySelector('.btn-reiniciar');
    if (botonReiniciar) {
        botonReiniciar.remove();
    }
}