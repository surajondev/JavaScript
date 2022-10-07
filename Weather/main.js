let country = document.querySelector("#country");
let city = document.querySelector("#city");
let check = document.querySelector("#check");

let tempIcon = document.querySelector("#tempIcon");
let weatherCountry = document.querySelector("#weatherCountry");
let temperature = document.querySelector("#temperature");
let weatherDescription = document.querySelector("#weatherDescription");

let feelsLike = document.querySelector("#feelsLike");
let humidity = document.querySelector("#humidity");
let longitude = document.querySelector("#longitude");
let latitude = document.querySelector("#latitude");

check.addEventListener("click", () => {
    //    console.log(country.value);
    //    console.log(city.value);

    let key = `15db9853b0d0dcc47b3a14626e3d15c4`;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city.value},${country.value}&lang=en&units=metric&appid=${key}`;

    fetch(url).then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
        weatherCountry.innerText = `${data.name} / ${data.sys.country}`;
        temperature.innerHTML = `${data.main.temp}°<b>C</b>`;

        data.weather.forEach(items => {
            weatherDescription.innerText = items.description;
            if (items.id < 250) {
                tempIcon.src = `assets/storm.png`;
            } else if (items.id < 350) {
                tempIcon.src = `assets/cloudy.png`;
            } else if (items.id < 550) {
                tempIcon.src = `assets/snow.png`;
            } else if (items.id < 650) {
                tempIcon.src = `assets/rainy.png`;
            } else if (items.id < 800) {
                tempIcon.src = `assets/foggy.png`;
            } else if (items.id === 800) {
                tempIcon.src = `assets/sun.png`;
            } else if (items.id > 800) {
                tempIcon.src = `assets/clouds.png`;
            }
        })

        feelsLike.innerText = `Feels Like ${data.main.feels_like}°C`;
        
        humidity.innerText = `Humidity ${data.main.humidity}`;
        latitude.innerText = `Latitude ${data.coord.lat}`;
        longitude.innerText = `Latitude ${data.coord.lon}`;
    })
    country.value = "";
    city.value = "";
})