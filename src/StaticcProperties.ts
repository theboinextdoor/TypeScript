//! In TypeScript, static method and properties belong to the class itself rather than to instance of the class. By making method and properties static , we can access them directly from the class without needing to create an instance of the class . This is useful for the utility function or property that dont't rely on instance-specific data.

class MathOperation{
    public static PI:number = Math.PI;
    private _area:number = 0;
    private _circumference:number = 0;
    private _radius:number = 0
    
    constructor(public radius : number){
        this._radius = radius;
    }

    // public set setAreaCircle(radius:number){
    //     this._area = (MathOperation.PI )*(this._radius * this._radius)
    // }

    public get getAreaCircle():string{
        this._area = Math.round((MathOperation.PI )*(this._radius * this._radius))
        return `Area of Circle is : ${this._area} sq cm.`
    }

    // public set setCircumference(radius:number){
    //     this._circumference = 2* MathOperation.PI *radius;
    // }

    public get getCircumference():string{
        this._circumference = Math.round(2* MathOperation.PI * this._radius);   
        return `Circumference of Circle is: ${this._circumference} cm`
    }
}

const circle = new MathOperation(5);
console.log(circle.getAreaCircle);
console.log(circle.getCircumference);




