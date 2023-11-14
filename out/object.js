"use strict";
//! Object:- 
//* it is used to represent data with key-value pairs.Each key in the object is a string that maps to a value
//* eg :- containig the information of a person
const person = {
    name: {
        f_name: "Faraz",
        l_name: "Ashraf"
    },
    age: 22,
    email: "f@f.com",
    activeUser: true,
    address: {
        city: "Delhi",
        Country: "India",
        Pincode: 110025
    }
};
//Todo Accessing the Object data
console.log(person.address.Country);
//TODO Update the data of Object 
person.address.Country = "Nepal";
console.log(person.address.Country);
