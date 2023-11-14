"use strict";
//! Tuples are data Structure that allows you to store a fixed value collection of elements of different types. 
Object.defineProperty(exports, "__esModule", { value: true });
//* Functionn to display person information
const displayPersonInfo = (person) => {
    const [name, age, licence] = person;
    console.log(`Name ${name}, Age ${age}, Driver's Licence ${licence ? "Yes" : "No"}`);
};
//*Example Usage
const person1 = ["Faraz", 22, true];
const person2 = ["Aman", 21, false];
displayPersonInfo(person1);
displayPersonInfo(person2);
const displayProductInfo = (product) => {
    const [productName, ProductPrice, QuantityInStock] = product; //? de-structring
    console.log(`Product Name :${productName} ProductPrice : ${ProductPrice} Quantity in Stock: ${QuantityInStock ? "Yes" : "No"} `);
};
const prod1 = ["Iphone 13 Pro Max", 150000, true];
const prod2 = ["Iphone 12 Pro ", 80000, false];
const prod3 = ["Iphone 11 ", 34000, true];
const prod4 = ["Iphone XR", 29000, true];
displayProductInfo(prod1);
displayProductInfo(prod2);
displayProductInfo(prod3);
displayProductInfo(prod4);
const displaySubjectGrade = (stud) => {
    const [subjectName, Grade] = stud;
    let TotalGrade = "";
    if (Grade <= 33) {
        TotalGrade = "P";
    }
    else if (Grade > 33 && Grade <= 45) {
        TotalGrade = "D";
    }
    else if (Grade > 45 && Grade <= 55) {
        TotalGrade = "C";
    }
    else if (Grade > 55 && Grade <= 75) {
        TotalGrade = "B";
    }
    else if (Grade > 75) {
        TotalGrade = "A";
    }
    console.log(`Subject Name : ${subjectName} , Pass ${Grade}: ${TotalGrade}`);
};
const student = ["Faraaz Ashraf", 90];
const student2 = ["Aman Ashraf", 34];
const student3 = ["Aman Ashraf", 55];
displaySubjectGrade(student);
displaySubjectGrade(student2);
displaySubjectGrade(student3);
