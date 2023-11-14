"use strict";
//! In TypeScript, interfaces fill the role of naming these types, and are a powerful way of defining contracts within your code as well as contracts with code outside of your project.
//! Interface is an another way to define object.
const greeting = {
    name: "Faraaz",
    age: 21,
};
const proo = {
    name: "Samsung",
    price: 25000,
    StockPresent: true,
};
const proo2 = {
    name: "Ihone",
    price: 85000,
    StockPresent: false,
};
const proo3 = {
    name: "Nokia",
    price: 35000,
    StockPresent: true,
};
const ProductDetails = (pro) => {
    return `Name : ${pro.name} , Price: ${pro.price}, isStockPreset: ${pro.StockPresent}`;
};
console.log(ProductDetails(proo));
console.log(ProductDetails(proo2));
console.log(ProductDetails(proo3));
const MobilePhone = {
    name: "Iphone",
    price: 85000,
    quantity: 15
};
const calculateTotalProduct = (pro) => {
    return `Total Price of all the ${pro.name}'s inside the cart is : ${pro.price * pro.quantity} `;
};
console.log("second function");
console.log(calculateTotalProduct(MobilePhone));
