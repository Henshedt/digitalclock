const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {

    let dateToday = new Date();
    let hr = dateToday.getUTCHours();
    let min = dateToday.getUTCMinutes();
    let s = dateToday.getUTCSeconds();

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
})
