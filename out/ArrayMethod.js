"use strict";
//* Array in TypeScript come with built-in method that allow you tp perform common operation
Object.defineProperty(exports, "__esModule", { value: true });
const fruits = ["apple", "banana", "oranges", "mangos"];
//TODO a). Adding elem to array using push 
console.log("Push Function: ");
const newUpdatedFruits = fruits.push("Kiwi"); //? push function give the length of the array after pushing the last elem 
console.log(newUpdatedFruits);
console.log(fruits);
console.log("Unshift Function: ");
const addfirstFruits = fruits.unshift("Kiwi"); //? Add elem on starting but returns the length of the array
console.log(addfirstFruits);
console.log(fruits);
//TODO b). Removing elem of array using pop
console.log("Pop Function: ");
const lastData = fruits.pop(); //? Removes the last element 
console.log(lastData);
console.log(fruits);
console.log("Shift Function: "); //? removes first elem 
const lastfruits = fruits.shift();
console.log(lastfruits);
console.log(fruits);
//! Iteration over a loop
//TODO 1). Using for loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
//TODO 2). Using for....of loop
for (const fruit of fruits) {
    console.log(fruit);
}
//TODO 3). Using for....Each loop
fruits.forEach((curVal) => console.log(curVal));
//TODO Another way using parenthesis {}
fruits.forEach((curVal) => { console.log(curVal); });
