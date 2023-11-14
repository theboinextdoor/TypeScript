"use strict";
//! *****Any type****** 
//? let num= 5;   //once you declare the any type you can store any data type to the same variable after one another.
let num = 5;
num = "five";
num = true;
//! ********Unknown type**********
//? Unknown type is safer-alternative to any because it stil enforce type chechking and type safety 
let num2;
num2 = 5;
num2 = "Tom";
num2 = true;
if (typeof num2 === "number") {
    console.log(num2 + 5);
}
else if (typeof num2 === "boolean") {
    console.log(false);
}
else if (typeof num2 === "string") {
    console.log(num2 + "Jerry");
}
