"use strict";
//! Access modifiers change the visibility of the properties and methods of a class. TypeScript provides three access modifiers:
//! private :- The private modifier limits the visibility to the same class only. When you add the private modifier to a property or method, you can access that property or method within the same class. Any attempt to access private properties or methods outside the class will result in an error at compile time.
class Employee3 {
    constructor(name, age, experience) {
        this.name = name;
        this.age = age;
        this.experience = experience;
    }
    introduction() {
        return `Hi i am ${this.name}, i am ${this.age} years old and i have got some experience on  ${this.experience.join(", ")}`;
    }
}
class Foreman3 extends Employee3 {
    constructor(name, age, experience, level) {
        super(name, age, experience);
        this.level = level;
    }
    introduction() {
        return `${super.introduction()}. and i am on level ${this.level}.`;
    }
}
//! protected :- The protected modifier allows properties and methods of a class to be accessible within the same class and within subclasses.When a class (child class) inherits from another class (parent class), it is a subclass of the parent class.The TypeScript compiler will issue an error if you attempt to access the protected properties or methods from anywhere else.
class Employee2 {
    constructor(name, age, experience) {
        this.name = name;
        this.age = age;
        this.experience = experience;
    }
    introduction() {
        return `Hi i am ${this.name}, i am ${this.age} years old and i have got some experience on  ${this.experience.join(", ")}`;
    }
}
class Foreman2 extends Employee2 {
    constructor(name, age, experience, level) {
        super(name, age, experience);
        this.level = level;
    }
    introduction() {
        return `${super.introduction()}. and i am on level ${this.level}.`;
    }
}
const employee2 = new Employee2("Faraaz Ashraf", 23, ["Java", "JavaScript", "React.js"]);
const forman2 = new Foreman2("Daniel", 24, ["C++", "React.js", "AWS"], 3);
//* console.log(employee2.age);  //you can not access the age beacuse the age is protected.
console.log(employee2.name); //* but you can acess the name beacus4e it is public while other are the protected one
//! protected :- The protected modifier allows class properties and methods to be accessible from all locations. If you don’t specify any access modifier for properties and methods, they will take the protected modifier by default.
class Employee {
    constructor(name, age, experience) {
        this.name = name;
        this.age = age;
        this.experience = experience;
    }
    introduction() {
        return `Hi i am ${this.name}, i am ${this.age} years old and i have got some experience on  ${this.experience.join(", ")}`;
    }
}
class Foreman extends Employee {
    constructor(name, age, experience, level) {
        super(name, age, experience);
        this.level = level;
    }
    introduction() {
        return `${super.introduction()}. and i am on level ${this.level}.`;
    }
}
//? Here you can access the class member because it is public.
const employee1 = new Employee("Faraaz Ashraf", 23, ["Java", "JavaScript", "React.js"]);
const forman1 = new Foreman("Daniel", 24, ["C++", "React.js", "AWS"], 3);
console.log(employee1.introduction());
console.log(forman1.introduction());
console.log("Hey There");
