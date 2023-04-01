function displayTemperature(response) {
    console.log(response.data.main.temp);
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = response.data.main.temp;
}


let apiKey = "2e3dto1e48d1a435aab54b3f664a20b0";
let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=NewYork&key=2e3dto1e48d1a435aab54b3f664a20b0&units=metric`;

console.log(apiUrl);
axios.get(url).then(displayTemperature);

debugger