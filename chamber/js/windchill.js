let temperature = 50;
let speed = 4;
let chill = "N/A";

if (temperature <= 50 && speed > 3) {
    chill = 35.74 + (0.6215 * temperature) - (35.75 * (speed ** 0.16)) + (0.4275 * temperature * (speed ** 0.16));
    chill = chill.toFixed(2);
};

document.querySelector('#temperature').innerHTML = temperature;
document.querySelector('#speed').innerHTML = speed;
document.querySelector('#chill').innerHTML = chill;