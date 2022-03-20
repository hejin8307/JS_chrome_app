const API_KEY = 'dadce89969739b6a24a322a46f0b9ada';

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  // const lat = 43.6705802376092;
  // const lon = 79.4014039954027;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // const weather = document.querySelector('#weatherCondition');
      const temperature = document.querySelector('#temperature');
      const city = document.querySelector('#city');
      // weather.innerText = `${data.weather[0].main}`; //그림
      weatherCondition = data.weather[0].main;
      getIcon(weatherCondition);
      temperature.innerText = `${Math.floor(data.main.temp)}°`; //온도
      city.innerText = data.name; //도시
    });
}

function getIcon(weatherCondition) {
  const weather = document.querySelector('#weatherCondition');
  if (weatherCondition.includes('Clouds')) {
    weather.setAttribute('class', 'fa-solid fa-cloud');
  } else if (weatherCondition.includes('Rain')) {
    weather.setAttribute('class', 'fa-solid fa-cloud-rain');
  } else if (weatherCondition.includes('Clear')) {
    weather.setAttribute('class', 'fa-solid fa-sun');
  } else if (weatherCondition.includes('Thunderstorm')) {
    weather.setAttribute('class', 'fa-solid fa-cloud-bolt');
  } else if (weatherCondition.includes('Snow')) {
    weather.setAttribute('class', 'fa-solid fa-cloud-snowflake');
  } else if (weatherCondition.includes('Drizzle')) {
    weather.setAttribute('class', 'fa-solid fa-cloud-shower-heavy');
  } else if (weatherCondition.includes('Atmosphere')) {
    weather.setAttribute('class', 'fa-solid fa-cloud-smog');
  }
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
