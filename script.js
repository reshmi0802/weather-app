const apiKey = "44d7c2864baa55ece49210ce6295b96b";

async function getWeather() {
    const cityInput = document.getElementById("city").value.trim();
    const resultDiv = document.getElementById("weatherResult");

    if (!cityInput) {
        resultDiv.innerHTML = "⚠️ Please enter a city name.";
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput},IN&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data); // Debugging line

        if (!response.ok) {
            resultDiv.innerHTML = `❌ ${data.message}`;
            return;
        }

        resultDiv.innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>🌡️ Temperature: ${data.main.temp}°C</p>
            <p>🌤️ Weather: ${data.weather[0].description}</p>
            <p>💧 Humidity: ${data.main.humidity}%</p>
            <p>🌬️ Wind Speed: ${data.wind.speed} m/s</p>
        `;
    } catch (error) {
        resultDiv.innerHTML = "⚠️ Error fetching weather data.";
        console.error("Error:", error);
    }
}