function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "ee34a32fdbde30ee2fc607a6d430da00"; // Replace this with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById("weather-info");
            if (data.cod === 200) {
                const temperature = data.main.temp;
                const description = data.weather[0].description;
                weatherInfo.innerHTML = `<p>Temperature: ${temperature}°C</p><p>Description: ${description}</p>`;
            } else {
                weatherInfo.innerHTML = `<p>City not found. Please try again.</p>`;
            }
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
        });
}
