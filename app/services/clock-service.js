import store from "../store.js";
import Clock from "../models/clock.js";

const _clockApi = axios.create({
    baseURL: "http://worldclockapi.com/api/json/est/now",
    timeout: 3000
})

class ClockService{
    async getClock(){
        let res = await _clockApi.get();
        store.commit("clock", new Clock(res.data))
        console.log(store.State.clock)
    }
}

const clockService = new ClockService();
export default clockService