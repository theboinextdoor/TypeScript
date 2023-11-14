"use strict";
//* Map method in TypeScript
const numbers = [1, 2, 3, 4, 5, 6,];
//! Map Method
//* The map method creates a new array by appliying a provided function to each elem of the original array
//* It transform each elem and return a new array which is transformed values
// TODO  1). Doubling each number
const doubleData = numbers.map((curVal) => {
    return curVal * 2;
});
console.log(doubleData);
// TODO  2). Converting Number to String
const numtoString = numbers.map((currElem) => {
    return currElem.toString();
});
console.log(numtoString);
//! Filter Method
//TODO Filter even Numbers
const evenNumbers = numbers.filter((currELem) => currELem % 2 === 0);
console.log(evenNumbers);
//TODO UpperCase version of each name
const names = ["Tom", "Jerry", "Baby", "Damon", "Stefan"];
const ucn = names.map((elem) => {
    return elem.toUpperCase();
});
console.log(ucn);
// Todo String length greater than 5.
const name1 = ["AliceMarshall", "BobMarley", "AnnaDesuza", "DamonSalvatore", "KlausMikelson", "MattDonavan"];
const ans = name1.filter((elem) => {
    return elem.length > 9;
});
console.log(ans);
