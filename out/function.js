"use strict";
// // 1.
// function addTwo(nuber){    //wrong way to declare the function becaaue it is 'any' , you should always write the return type .
//     return number+2;
// }
// addTwo(5);
//Todo 2
function addTwoNum(num) {
    return num + 2;
}
addTwoNum(5);
// TODO 3.
function namePrint(val) {
    return "hey " + val + " how are you";
}
namePrint("Tom");
//TODO  4..
function signUpUser(name, age, usuallyActive) {
    return `Name :${name} , Age:${age} , Active-User: ${usuallyActive}`;
}
signUpUser("Tom", 21, true);
// TODO 5.
let loginUser = (name, email, activeUser) => {
    return `Name :${name} , email:${email} , Active-User: ${activeUser}`;
};
loginUser("Tom", "tom@t.com", false);
// TODO 6. Arrow funtion with default value
let loginUser2 = (name, email, activeUser = false) => {
    return `Name :${name} , email:${email} , Active-User: ${activeUser}`;
};
loginUser2("Damon", "damon@d.com");
// TODO 7. Arrpw funtion which returns some value.
let getHello = (s) => {
    return "";
};
// export{};
