const result = document.getElementById('result');
const cityRef = document.getElementById('city');
const searchBtn = document.getElementById('search-btn');

const getWeather = () => {
    let cityValue = cityRef.value;
    if(cityValue === '') {
        result.innerHTML = `<h3>Please enter a city name</h3>`;
    } else{
        let url = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric`;
        // fetch(url).then((resp) => resp.json()).then((data) => {.catch(() => {
        //     result
        // })
}}

window.addEventListener('load', getWeather);