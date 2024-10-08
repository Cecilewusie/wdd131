const windSpeed = document.querySelector("#wind-speed");
const temperature = document.querySelector("#temperature");
const windChill = document.querySelector("#wind-chill");

const stripTemp = parseInt(temperature.textContent);
const stripSpeed = parseInt(windSpeed.textContent);

console.log(stripSpeed);
console.log(stripTemp)

function calculateWindChill(temp, speed) {
    let result = "";
    if (temp <= 50 && speed > 3 ) {
        result = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
        result = result.toFixed(2);
    } else {
        result = "N/A"
    }
    return result;
}

windChill.textContent = `${calculateWindChill(stripTemp,stripSpeed)}°F`;

// displaying different text on larger view
// const weatherHeader = document.querySelector(".weather-header");
// weatherHeader.textContent.toogle(show-weather-icon)
