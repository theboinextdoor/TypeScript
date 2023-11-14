"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//! String 
let greeting = "Hey there i am using TypeScript.";
console.log(greeting);
greeting = "Damon"; //?You can reInitialise the variable
// greeting = 6            this will give an error because you cannot assign any other value other than the string .
greeting.toUpperCase();
console.log(greeting);
//! number
let userId1 = 335577; //? this is a number
let userId2 = 4773.99; //? this is a also a number not a float data type because in typeScript there is no float data type.
userId1.toFixed();
//! Boolean 
let isloggedIn = false;
let isPresent = true;
//! any
let hero;
function gethero() {
    return "Thor";
}
hero = gethero();
