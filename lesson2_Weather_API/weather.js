var humidity = document.getElementById('humidity');
var pressure = document.getElementById('pressure');
var temperature = document.getElementById('temperature');
var windSpeed = document.getElementById('wind-speed');
var weatherSummary = document.getElementById('weather-summary');
var weatherSummaryCity = document.getElementById('weather-summary-city');
var getWeatherButton = document.getElementById('get-weather');
var humidityCity = document.getElementById('humidity-city');
var pressureCity = document.getElementById('pressure-city');
var temperatureCity = document.getElementById('temperature-city');
var windSpeedCity = document.getElementById('wind-speed-city');
var getWeatherButtonCity = document.getElementById('get-weather-city');
var currentWeather = document.getElementById('current-weather');
var currentWeatherCity = document.getElementById('current-weather-city');
var cityWeatherName = document.getElementById("city-weather-name");

function getLocationCoords() {

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            getWeatherData(position.coords.latitude, position.coords.longitude);
        });
    } else {
        alert('Your browser does not support Navigator API');
    }

}

function getLocationCoordsCity() {

    if(navigator.geolocation) {
            getWeatherDataCity();
    } else {
        alert('Your browser does not support Navigator API');
    }

}

function getWeatherData(latitude, longitude) {

    fetch('http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=08d1316ba8742c08076e7425c28c2614')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            displayData(data);
    });

}
function getWeatherDataCity() {
    var cityWeatherNameValue = cityWeatherName.innerText;
    
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+ cityWeatherNameValue + '&appid=08d1316ba8742c08076e7425c28c2614')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            displayDataCity(data);
    });

}

function displayData(data) {
    humidity.innerText = 'Humidity: ' + data.main.humidity + ' %';
    pressure.innerText = 'Pressure: ' + data.main.pressure + ' mm Hg';
    temperature.innerText = 'Temperature: ' + kToC(data.main.temp) + ' °C';
    windSpeed.innerText = 'Wind Speed: ' + data.wind.speed + ' m/s';
    weatherSummary.innerText = data.name;
    currentWeather.innerText = data.weather[0].main;
    console.log(data);
}

function displayDataCity(data) {

    if (data.cod !== 200) {
        alert('Invalid city name. Please try again')
    }

    humidityCity.innerText = 'Humidity: ' + data.main.humidity + ' %';
    pressureCity.innerText = 'Pressure: ' + data.main.pressure + ' mm Hg';
    temperatureCity.innerText = 'Temperature: ' + kToC(data.main.temp) + ' °C';
    windSpeedCity.innerText = 'Wind Speed: ' + data.wind.speed + ' m/s';
    weatherSummaryCity.innerText = data.name;
    currentWeatherCity.innerText = data.weather[0].main;
    console.log(data);
}

function kToC(k) {

    return Math.round(k - 273,15);
}

getWeatherButton.addEventListener('click', getLocationCoords);
getWeatherButtonCity.addEventListener('click', getLocationCoordsCity);

// SpeechRecognition

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();
recognition.lang = 'ru-RU';

recognition.addEventListener('result', function (event) {

    var innerResult = Array
      .from(event.results)
      .map(function (result) {
          return result[0];
      })
      .map(function (result) {
          return result.transcript;
      });

    innerResult[0].toLowerCase();

    if(innerResult[0]=== "погода") {
        getLocationCoordsCity();
    } else {
        cityWeatherName.innerText = innerResult;
    }

})

recognition.start();
recognition.addEventListener('end', recognition.start);