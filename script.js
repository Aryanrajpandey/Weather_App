function getWeather() {
    let city = document.getElementById("cityInput").value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    let apiKey = "8fd82adcbc97cc2f8e5534edd9193171";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod == "404") {
                alert("City not found!");
                return;
            }

            document.getElementById("cityName").innerText = "City: " + data.name;
            document.getElementById("temperature").innerText = "Temperature: " + data.main.temp + " °C";
            document.getElementById("description").innerText = "Weather: " + data.weather[0].description;
        })
        .catch(error => {
            console.log(error);
            alert("Error fetching data!");
        });
}

