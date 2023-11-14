//! in TypeScript , you can use Getters and setters method to control the access and modification of the class properties. Getter method allow you to retrieve the value of a property, while setter method allow you to set the value of a property with additional logic or validation. 

class Person{
    private _age : number| undefined;
    constructor(public name : string, protected hobbies: string[]){}


    //* Setter Method to set the value, this method is used when we try to get the value from inside the class 
    public set age(age: number){
        if(age > 100 || age < 0){
            throw new Error(`${this.age} is not a valid age`);
        }else{
            this._age = age;
        }
    }

    //* Getter Method to get the value, this method is used when we try to get the value from outside the class 
    // public get age(){
    //     if(this._age === undefined){
    //         throw new Error("Age is not defined ")
    //     }else{
    //         return this._age;
    //     }
    // }


introduceParent():string{
    return `Hi I'm ${this.name} and I'm ${this._age} years old I love ${this.hobbies.join(",")}`
    }

}

const persons = new Person("Faraaz Ashraf" , ["conding", "Reading", "Painting"])
persons.age= 512;   //this line will give the error
persons.age= -2;   //this line will give the error
persons.age= 12;   //this line won't give any error
console.log(persons.introduceParent());
