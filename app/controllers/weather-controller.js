import WeatherService from "../services/weather-service.js";
import store from "../store.js";

//NOTE The weather service and controller are mostly done,
//		you may wish to check out the model and include some additional data.

//TODO Complete rendering data to the screen
function drawWeather() {
  console.log("THE WEATHER MAN SAYS:", store.State.weather);
  let template = ''
  let weather = store.State.weather
  console.log(weather)
  
  // weather.forEach(weather => template += weather.Template)
  template += weather.Template
  document.getElementById("weather").innerHTML = template
}
export default class WeatherController {
  constructor() {
    store.subscribe("weather", drawWeather);
    WeatherService.getWeather();
  }
}
