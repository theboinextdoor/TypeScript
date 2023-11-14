//! A class in terms of object is a blueprint for creating objects.
//! A class is like a blueprint for creatingb similar things.
//! clas name should be started with a capital letter


//* Defining the class.
class Persons{
    name : string ;          //"this" keywoord talks about this name 
    age :number ;           //"this" keywoord talks about this age 
    hobbies: string[] ;     //"this" keywoord talks about this hobbie  

    constructor(nameC:string, ageC:number, hobbiesC: string[] ){
        this.name= nameC;
        this.age= ageC;
        this.hobbies = hobbiesC;
    }
}

//* Creating the instance of class.
const persons1:Persons = new Persons("Faraaz" , 21, ["coding", "Painting", "Listning to Music"]);
const persons2:Persons = new Persons("Aman", 23, ["Dancing", "Fighting", "Sucking Blood"])
const persons3:Persons = new Persons("Fahim", 24, ["Sports", "Cycling", "Playing Chess"])

console.log(persons1);
console.log(persons2);
console.log(persons3);



