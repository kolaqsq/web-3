function updateClock() {
    let time = new Date();
    document.getElementById('clock').innerHTML = time.toLocaleTimeString() + '<br>';
    setInterval(updateClock, 1000);
}

setInterval(updateClock, 1000);
