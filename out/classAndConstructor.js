"use strict";
//! A class in terms of object is a blueprint for creating objects.
//! A class is like a blueprint for creatingb similar things.
//! clas name should be started with a capital letter
//* Defining the class.
class Persons {
    constructor(nameC, ageC, hobbiesC) {
        this.name = nameC;
        this.age = ageC;
        this.hobbies = hobbiesC;
    }
}
//* Creating the instance of class.
const persons1 = new Persons("Faraaz", 21, ["coding", "Painting", "Listning to Music"]);
const persons2 = new Persons("Aman", 23, ["Dancing", "Fighting", "Sucking Blood"]);
const persons3 = new Persons("Fahim", 24, ["Sports", "Cycling", "Playing Chess"]);
console.log(persons1);
console.log(persons2);
console.log(persons3);
