import store from "../store.js";
import Quote from "../models/quote.js";

// @ts-ignore
const _quoteApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/quotes",
  timeout: 3000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class QuoteService {
  async getWeather(){
    // console.log("calling the quoteman!")
    let res = await _quoteApi.get();
    // _quoteApi.get()
    // .then(res =>{
      // let quote = res.data.map(rawQuoteData => new Quote(rawQuoteData))
      // console.log(res)
      store.commit("quote", new Quote(res.data.quote))
      console.log(store.State.quote)
    }
  }


const quoteService = new QuoteService();
export default quoteService;
