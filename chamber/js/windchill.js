// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#condition');

const url = `https://api.openweathermap.org/data/2.5/weather?id=5781860&units=Imperial&appid=089a0425418df44f4f7f73e6e3f15ad9`;
  
apiFetch(url);

async function apiFetch(apiURL) {
    const response = await fetch(apiURL);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
    } else {
        throw Error(await response.text());
    }
};

function displayResults(weatherData) {
    currentTemp.innerHTML = weatherData.main.temp.toFixed(1);

    let iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;

    if (weatherData.weather[0].main == 'Clear') {
        iconsrc = "../chamber/images/clear.png";
    } else if (weatherData.weather[0].main == 'Thunderstorm') {
        iconsrc = "../chamber/images/thunderstorm.png";
    } else if (weatherData.weather[0].main == 'Drizzle') {
        iconsrc = "../chamber/images/drizzle.png";
    } else if (weatherData.weather[0].main == 'Rain') {
        iconsrc = "../chamber/images/rain.png";
    } else if (weatherData.weather[0].main == 'Snow') {
        iconsrc = "../chamber/images/snow.png";
    } else if (weatherData.weather[0].main == 'Clouds') {
        iconsrc = "../chamber/images/clouds.png";
    } else {
        iconsrc = "../chamber/images/weather.png";
    }

    const desc = weatherData.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc.toUpperCase();

    let temperature = weatherData.main.temp.toFixed(1);
    let speed = weatherData.wind.speed;
    let chill = "N/A";

    if (temperature <= 50 && speed > 3) {
        chill = 35.74 + (0.6215 * temperature) - (35.75 * (speed ** 0.16)) + (0.4275 * temperature * (speed ** 0.16));
        chill = chill.toFixed(2);
    };
    
    document.querySelector('#speed').innerHTML = speed;
    document.querySelector('#chill').innerHTML = chill;
}