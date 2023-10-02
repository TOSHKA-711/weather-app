const cityInput = document.getElementById("cityInput");
const searchButton = document.getElementById("searchButton");
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");

searchButton.onclick = async function checkWeather() {
  let citySearch = cityInput.value;
  const apiKey = "e07cd36f8d76af5f9901dbab0ff8f004";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${citySearch}`;
  const response = await fetch(apiUrl + `&appid=${apiKey}`);
  let data = await response.json();
  console.log(data.name);
  let city =  data.name;
  cityName.innerText=city;
  let temp = data.main.temp;
  temperature.innerText = `${temp} °C`;
  let wDescription = data.weather[0].description;
  description.innerText = wDescription;
  cityInput.value="";
};








