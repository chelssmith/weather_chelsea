// search city input
var searchCityEl = document.getElementById("search-city");

// weather results
var nameEL = document.getElementById("city-name");
var tempEl = document.getElementById("temp");
var windEl = document.getElementById("wind");
var humidityEl = document.getElementById("humidity");

// getting api
function apiWeather () {
    var userSearch= searchCityEl.value;

  $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + userSearch + "&&appid=79bbb2f14cf2af2f19c36c06b3e82596")
    .then(function(response){
        console.log(response);
        
        var cityName = document.createElement("h1");
        cityName.textContent=respone.name
        nameEL.append(cityName)

        var cityTemp = document.createElement("p");
        cityTemp.textContent=respone.main.temp
        tempEl.append(cityTemp)

        var cityWind = document.createElement("p");
        cityWind.textContent=respone.wind.speed
        windEL.append(cityWind)

        var cityHumidity = document.createElement("p");
        cityHumidity.textContent=respone.main.humidity
        humidityEl.append(cityHumidity)

    });
}