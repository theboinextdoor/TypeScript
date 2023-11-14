"use strict";
//! In TypeScript, static method and properties belong to the class itself rather than to instance of the class. By making method and properties static , we can access them directly from the class without needing to create an instance of the class . This is useful for the utility function or property that dont't rely on instance-specific data.
class MathOperation {
    constructor(radius) {
        this.radius = radius;
        this._area = 0;
        this._circumference = 0;
        this._radius = 0;
        this._radius = radius;
    }
    // public set setAreaCircle(radius:number){
    //     this._area = (MathOperation.PI )*(this._radius * this._radius)
    // }
    get getAreaCircle() {
        this._area = Math.round((MathOperation.PI) * (this._radius * this._radius));
        return `Area of Circle is : ${this._area} sq cm.`;
    }
    // public set setCircumference(radius:number){
    //     this._circumference = 2* MathOperation.PI *radius;
    // }
    get getCircumference() {
        this._circumference = Math.round(2 * MathOperation.PI * this._radius);
        return `Circumference of Circle is: ${this._circumference} cm`;
    }
}
MathOperation.PI = Math.PI;
const circle = new MathOperation(5);
console.log(circle.getAreaCircle);
console.log(circle.getCircumference);
