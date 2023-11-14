"use strict";
//! TypeAliases
const person01 = {
    name: {
        f_name: "Damon",
        l_name: "Salvatore"
    },
    age: 22,
    email: "f@f.com",
    activeUser: true,
    address: {
        city: "Bangaluru",
        Country: "India",
        Pincode: 110025
    }
};
const person02 = {
    name: {
        f_name: "Stefan",
        l_name: "Salvatore"
    },
    age: 22,
    email: "f@f.com",
    activeUser: true,
    address: {
        city: "Mumbai",
        Country: "India",
        Pincode: 110025
    }
};
const person03 = {
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
const UserInformation = (user) => {
    return user.email;
};
console.log(UserInformation(person01));
const prod1 = {
    Model_name: "iPhone",
    price: 20000,
    quantity: 40
};
const calculateTotalPrice = (prodd) => {
    return `Product name : ${prodd.Model_name}\nTotal Price : ` + prodd.price * prodd.quantity;
    // return prodd.price * prodd.quantity
};
console.log("Total Price of the Product: ");
console.log(calculateTotalPrice(prod1));
