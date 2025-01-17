const apiKey = "8314ea1b2b31b9870031c3c259770e23";
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

switch(data.weather[0].main){
    case "Clouds":
        weatherIcon.src = "images/clouds.png";
        break;
    case "Clear":
        weatherIcon.src = "images/clear.png";
        break;
    case "Rain":
        weatherIcon.src = "images/rain.png";
        break;
    case "Drizzle":
        weatherIcon.src = "images/drizzle.png";
        break;
    case "Mist":
        weatherIcon.src = "images/mist.png";
        break;
}




}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
});
searchBox.addEventListener("keydown",(e)=>{
    if (e.code === "Enter") {  
        
        checkWeather(searchBox.value);
    }
});


