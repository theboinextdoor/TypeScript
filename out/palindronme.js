"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isPalindrome = (palin) => {
    let myPlain = palin.split("").reverse().join();
    return myPlain === palin;
};
console.log(isPalindrome("Faraaz Ashraf"));
