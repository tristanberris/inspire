export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    //NOTE Have you ever wanted to know the temperature measured in kelvin? 
    //      That is what this data returns! data.main.temp is the temperature in Kelvin


    //TODO You should probably convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try

    this.city = data.name
    this.kelvin = data.main.temp
    this.fahrenheit = (((data.main.temp - (273.15)) * 1.8) + 32).toFixed(0)
  }
get Template(){
  return /*html*/  `
    <h1 class="weather temp text-center"> ${this.fahrenheit}° </h1>
    <h3 class="weather town text-center pr-2 mb-3"> ${this.city} </h3>
  
  
  
  `
}
}