function volver() {
    const menus = document.querySelectorAll('.funcion-menu');
    menus.forEach(m => m.style.display = 'none');
    document.getElementById("titulo").style.display = 'block';
    document.getElementById("menu").style.display = 'block';
    document.getElementById("resultado").innerHTML = ""; 
}