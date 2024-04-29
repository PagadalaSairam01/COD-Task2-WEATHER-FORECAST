const apiKey = "1459c7be10a7f99cbef7cd8060129789";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchcity = document.querySelector(".searchcity input");
const button = document.querySelector(".searchcity button");
async function checkweather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        var details = await response.json();
        document.querySelector(".city").innerHTML = details.name;
        document.querySelector(".date").innerHTML = dateBuilder(now);
        document.querySelector(".temp").innerHTML = Math.round(details.main.temp) + "°C";
        document.querySelector(".other .humidity").innerHTML = "Humidity : " + details.main.humidity + "%";
        document.querySelector(".other .windspeed").innerHTML = "Wind Speed : " + details.wind.speed + " km/h";
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}
let now = new Date();

button.addEventListener("click", function () {
    checkweather(searchcity.value);

})

function dateBuilder(d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
}
