function displayTemperature(response) {
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let description = document.querySelector("#city");
    temperatureElement.innerHTML = Math.round
    (response.data.temperature.current);
    cityElement.innerHTML = response.data.name;
  }
  
  let apiKey = "2e3dto1e48d1a435aab54b3f664a20b0";
  let city = "New York";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;


axios.get(url).then(displayTemperature);

