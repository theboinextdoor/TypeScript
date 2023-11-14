"use strict";
//! Inheritance is an aspect of OOPs languages, which provides the ability of a program to create a new class from an existing class. It is a mechanism which acquires the properties and behaviors of a class from another class. The class whose members are inherited is called the base class, and the class that inherits those members is called the derived/child/subclass. In child class, we can override or modify the behaviors of its parent class.
//? Simple Word : Inhritance allows a class to reuse the functionality of existing class without rewriting it.
//TODO Using Previous Exapmle :-
class Persons1 {
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    //TODO Creating Method inside the class 
    introduction() {
        return `Hi i am ${this.name}, i am ${this.age} years old and i love ${this.hobbies.join(", ")}`;
    }
}
class Student extends Persons1 {
    constructor(name, age, hobbies, grade) {
        //! In typecript the super keyword is used in the context of class inheritance. It allows a subclass to call method or access the property of its superclass. This is particularly useful when you want to extend the behavior of a parent class while stil leveraging its existing functionality.
        super(name, age, hobbies);
        this.grade = grade;
    }
    introduction() {
        // return `Hi i am ${this.name}, i am ${this.age} years old and i am in grade ${this.grade}, i love ${this.hobbies.join(", ")}`;
        //? we can also return the function as :- 
        return `${super.introduction()}. and i am in ${this.grade} std`;
    }
}
const p1 = new Persons1("Faraaz Ashraf", 23, ["Coding", "MMA", "Rapping"]);
// const p2:Persons1= new Persons1("Faraaz Armani ", 22, ["Coding", "MMA", "Rapping"])
const students1 = new Student("Aman", 20, ["Reading Books", "Playing Games"], "12th");
//* Inherit the Persons1 class with the help of std1 
console.log(p1.introduction());
// console.log(p2.introduce());
console.log(students1.introduction());
