function mostrarRechazo() {
    const mensajeRechazoDiv = document.getElementById('mensajeRechazo');
    const noBtn = document.getElementById('noBtn');

    mensajeRechazoDiv.style.display = 'block';
    noBtn.style.display = 'none';
}

function mostrarAceptacion() {
    const mensajeRechazoDiv = document.getElementById('mensajeRechazo');
    const mensajeAceptacionDiv = document.getElementById('mensajeAceptacion');

    mensajeRechazoDiv.style.display = 'none';
    mensajeAceptacionDiv.style.display = 'block';
}
