function refreshWeather(response){
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let CityElement = document.querySelector("#city");

    CityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
    let apiKey ="4o05t4b450f7bf3040828beac3b1db1c";
    let apiUrl ="https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}&units=metric";
    axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    
    searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);