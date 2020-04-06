export default class Clock {
    constructor(data) {
        
        this.currentDateTime = data.currentDateTime
        this.dayOfTheWeek = data.dayOfTheWeek
    }

    get Template(){
        return /*html*/ `
        
        <p> ${this.dayOfTheWeek} </p>
        `
    }
        /** <p> ${this.currentDateTime} </p> */
    // 
}