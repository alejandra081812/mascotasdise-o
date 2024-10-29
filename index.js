const imagenes = [
    '/imagenes/imagen1.jpg',
    '/imagenes/imagen2.jpg',
    '/imagenes/imagen3.jpg',
    '/imagenes/imagen4.jpg'
];

let indiceActual = 0;

function cambiarImagen(direccion) {
    indiceActual = (indiceActual + direccion + imagenes.length) % imagenes.length;
    const imagenPrincipal = document.getElementById('imagen-principal');
    imagenPrincipal.src = imagenes[indiceActual];
}

const imagenescon = [
    '/imagenes/imagen5.jpg',
    '/imagenes/imagen6.jpg',
    '/imagenes/imagen7.jpg',
    '/imagenes/imagen8.jpg'
];

let indiceActual2 = 0;

function cambiarImagencon(direccion) {
    indiceActual2 = (indiceActual2 + direccion + imagenescon.length) % imagenescon.length;
    const imagenPrincipal2 = document.getElementById('imagen-principal2');
    imagenPrincipal2.src = imagenescon[indiceActual2];
}

