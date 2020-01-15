const weathcerContainer = document.querySelector('.js-weather');

const API_KEY = "0699e646ecb6f61ffe7e1f62320e1a5d";
const COORDS = "coords";

function getWeather(lon, lat){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(function(response) {
        return response.json();
    }).then(function(json){
        const temperature = json.main.temp;
        const place = json.name;

        weathcerContainer.innerText = `${temperature} @ ${place}`;
    });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function geoError(){
    console.log('cant get geo');
}

function geoSuccess(position) {
    const longitude = position.coords.longitude;
    const latitude = position.coords.latitude;
    const coordsObj = {
        longitude,
        latitude
    }

    saveCoords(coordsObj);
    getWeather(longitude, latitude);
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
}

function loadCoords() {
    const coords = localStorage.getItem(COORDS);
    if (coords === null) {
        askForCoords();
    } else {
        const parseCoords = JSON.parse(coords);
        getWeather(parseCoords.longitude, parseCoords.latitude);
    }
}

function init() {
    loadCoords();
}

init();