import ClockService from "../services/clock-service.js";
import store from "../store.js";

function drawClock(){
    let template = ''
    let clock = store.State.clock

    template += clock.Template
    document.getElementById("clock").innerHTML = template
    console.log("Today's time is" + store.State.clock)
}

export default class QuoteController {
    constructor(){
        store.subscribe("clock", drawClock)
        ClockService.getClock();
    }
}