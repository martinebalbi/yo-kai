async function fetchWeather(city) {
    const url = "https://api.openweathermap.org/data/2.5/weather";
    const apiKey = "9f7b18dd26f1232697933dceb84e9615";
    const units = "metric";
    const lang = "es";
    const response = await fetch(`${url}?q=${city}&appid=${apiKey}&units=${units}&lang=${lang}`);
    const data = await response.json();
    return data;
}

async function updateWeatherCard(city) {
    const weatherData = await fetchWeather(city);
    console.log(weatherData);

    document.getElementById("city").textContent = weatherData.name;
    document.getElementById("temperature").textContent = weatherData.main.temp + " °C";
    document.getElementById("feels_like").textContent = weatherData.main.feels_like + " °C";
    
    document.getElementById("weather").textContent = weatherData.weather[0].description;
    const iconCode = weatherData.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;
    document.getElementById("weatherIcon").src = iconUrl;
    document.getElementById("weatherIcon").alt = weatherData.weather[0].description;
   
    document.getElementById("humidity").textContent = weatherData.main.humidity + " %" ;
    document.getElementById("pressure").textContent = weatherData.main.pressure + " hPa";
    document.getElementById("windSpeed").textContent = weatherData.wind.speed + " km/h";
    document.getElementById("visibility").textContent = (weatherData.visibility/1000) + " km";
   
}

updateWeatherCard("Japan");

