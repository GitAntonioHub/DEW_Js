function mostrarMenu(menu) {
    const menus = document.querySelectorAll('.funcion-menu');
    menus.forEach(m => m.style.display = 'none'); 

    document.getElementById("titulo").style.display = 'none';
    document.getElementById("menu").style.display = 'none';

    document.getElementById(menu + '-menu').style.display = 'block'; 
    document.getElementById("resultado").innerHTML = ""; 
}

function calcularFactorial() {
    const numero = document.getElementById("numeroFactorial").value;
    const resultadoDiv = document.getElementById("resultado");

    if (!numero) {
        resultadoDiv.innerHTML = "Por favor, introduce un número.";
        return;
    }

    const num = parseInt(numero);
    if (isNaN(num) || num < 0) {
        resultadoDiv.innerHTML = "Por favor, introduce un número entero no negativo.";
        return;
    }

    const factorial = Factorial(num);
    resultadoDiv.innerHTML = `El factorial de ${num} es: ${factorial}`;
}

function Factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * Factorial(n - 1);
}


function calcularSuma() {
    const numeros = document.getElementById("numerosSuma").value;
    const numArray = numeros.split(',').map(num => parseFloat(num.trim()));
    const suma = numArray.reduce((acc, num) => acc + num, 0);
    document.getElementById("resultado").innerHTML = `La suma es ${suma}`;
}

function Suma(...args) {
    return args.reduce((acc, num) => acc + num, 0);
}

function informacion() {
    const resultadoDiv = document.getElementById("resultado");
    const nombre = document.getElementById("nombre").value;
    const localidad = document.getElementById("localidad").value || "LAS PALMAS DE G.C.";
    const valor = document.getElementById("valor").value || 100;

    resultadoDiv.innerHTML = `Nombre: ${nombre}, Localidad: ${localidad}, Valor: ${valor}`;
}

function calcularFactorialRecursivo() {
    const numero = document.getElementById("numeroFactorialRecursivo").value;
    const resultadoDiv = document.getElementById("resultado");

    if (!numero) {
        resultadoDiv.innerHTML = "Por favor, introduce un número.";
        return;
    }

    const num = parseInt(numero);
    if (isNaN(num) || num < 0) {
        resultadoDiv.innerHTML = "Por favor, introduce un número entero no negativo.";
        return;
    }

    const factorial = FactorialRecursivo(num);
    resultadoDiv.innerHTML = `El factorial recursivo de ${num} es: ${factorial}`;
}

function FactorialRecursivo(n) {
    if (n === 0 || n === 1) return 1;
    return n * FactorialRecursivo(n - 1);
}


function volver() {
    const menus = document.querySelectorAll('.funcion-menu');
    menus.forEach(m => m.style.display = 'none');

    document.getElementById("titulo").style.display = 'block';
    document.getElementById("menu").style.display = 'block';
    document.getElementById("resultado").innerHTML = ""; 
}
