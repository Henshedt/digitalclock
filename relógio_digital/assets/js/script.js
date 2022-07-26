const hour = document.getElementsById('hour');
const minutes = document.getElementsById('minutes');
const seconds = document.getElementsById('seconds');

const relogio = setInterval(function time() {

    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    hour.textContent = hr;
    minutes.textContent = min;
    seconds.textContent = s;
})
