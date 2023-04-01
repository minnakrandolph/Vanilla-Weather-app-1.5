function displayTemperature(response) {
    console.log(response.data.main.temp);
}


let apiKey = "22ffdfb8d8d8b00d2858bb969032d4f11";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?
q=New York&appid=${apiKey}units=metric`;

console.log(apiUrl);
axios.get(url).then(displayTemperature);