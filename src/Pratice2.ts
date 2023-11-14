class Temperature{
    private _celcius: number = 0;
    
    constructor(){}

    public get getCelcius():string{
        return `Temperature is : ${this._celcius}C`;
    }
    public set setCelcius(celcius:number){
        this._celcius = celcius;
    }
    public get getfahrenheit():string{
        const finalTemp = Math.round((this._celcius+ 9/5)+32);
        return `Tempetaure is ${finalTemp} F`
    }
    public set setfahrenheit(fahrenheit:number){
        const finalTemp= Math.round((fahrenheit - 32) + 5/9);
        this._celcius = finalTemp;
    }
}

const temp1 = new Temperature();
temp1.setCelcius= 25;
console.log(temp1.getfahrenheit);

const temp2 = new Temperature();
temp2.setfahrenheit = 98.6;
console.log(temp2.getCelcius);