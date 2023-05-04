const input = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelecter('.weather-img');
const temperature = document.querySelecter('.temperature');
const description =  document.querySelecter('.description');
const humidity = document.getElementryId('humidity');
const wind_speed = document.getElementById('wind-speed');

async function checkWeather(city){
    const api_key ="50835e7b8239d1ea300eceb2376d95fb";
    const url=`https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response =>response.json());
    temperature.innerHTML =`${math.round(weather_data.main.temp-273.15)}°C`; 
    description.innerHTML = ${weather_data.weather[0].description}`;
    humidity.innerHTML = `4
}

searchBtn.addEventListener('click',()=>{
      checkweather()
});





