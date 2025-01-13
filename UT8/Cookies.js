// Función para grabar una cookie
function grabarCookie(nombre, valor, dias) {
    let fecha = new Date();
    fecha.setTime(fecha.getTime() + dias * 24 * 60 * 60 * 1000);
    let expira = "expires=" + fecha.toUTCString();
    document.cookie = `${nombre}=${valor}; ${expira}; path=/`;
}

// Función para leer una cookie
function leerCookie(nombre) {
    let nombreEQ = nombre + "=";
    let cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        if (cookie.indexOf(nombreEQ) === 0) {
            return cookie.substring(nombreEQ.length, cookie.length);
        }
    }
    return null;
}

// Función para eliminar una cookie
function eliminarCookie(nombre) {
    document.cookie = `${nombre}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
}
