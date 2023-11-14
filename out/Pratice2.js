"use strict";
class Temperature {
    constructor() {
        this._celcius = 0;
    }
    get getCelcius() {
        return `Temperature is : ${this._celcius}C`;
    }
    set setCelcius(celcius) {
        this._celcius = celcius;
    }
    get getfahrenheit() {
        const finalTemp = Math.round((this._celcius + 9 / 5) + 32);
        return `Tempetaure is ${finalTemp} F`;
    }
    set setfahrenheit(fahrenheit) {
        const finalTemp = Math.round((fahrenheit - 32) + 5 / 9);
        this._celcius = finalTemp;
    }
}
const temp1 = new Temperature();
temp1.setCelcius = 25;
console.log(temp1.getfahrenheit);
const temp2 = new Temperature();
temp2.setfahrenheit = 98.6;
console.log(temp2.getCelcius);
