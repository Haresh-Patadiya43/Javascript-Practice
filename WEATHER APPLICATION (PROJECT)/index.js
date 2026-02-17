const apiKey = "f2ba44093cf3ec0e5c0b7bee71f7a49e";

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");

searchBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if (city === "") {
        alert("Please enter a city name");
        return;
    }
    getWeather(city);
});

async function getWeather(city) {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=f2ba44093cf3ec0e5c0b7bee71f7a49e`;
        
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod !== 200) {
            alert("City not found!");
            return;
        }

        cityName.textContent = `${data.name}, ${data.sys.country}`;
        temperature.textContent = `Temperature: ${data.main.temp}°C`;
        description.textContent = `Condition: ${data.weather[0].description}`;
        humidity.textContent = `Humidity: ${data.main.humidity}%`;
        windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;

    } catch (error) {
        console.error("Error fetching weather:", error);
        alert("Something went wrong!");
    }
}
