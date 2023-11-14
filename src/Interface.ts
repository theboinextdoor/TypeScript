//! In TypeScript, interfaces fill the role of naming these types, and are a powerful way of defining contracts within your code as well as contracts with code outside of your project.
//! Interface is an another way to define object.

interface Greet{
    name: string;
    age : number ;
}

const greeting:Greet= {
    name:"Faraaz",
    age: 21,
}


//TODO Example 1: 
interface Products{
    name: string ;
    price : number;
    StockPresent: boolean;
}

const proo:Products={
    name : "Samsung",
    price : 25000,
    StockPresent: true,
}

const proo2:Products={
    name : "Ihone",
    price : 85000,
    StockPresent: false,
}

const proo3:Products={
    name : "Nokia",
    price :35000,
    StockPresent: true,
}

const ProductDetails=(pro:Products)=>{
    return `Name : ${pro.name} , Price: ${pro.price}, isStockPreset: ${pro.StockPresent}`
}


console.log(ProductDetails(proo));
console.log(ProductDetails(proo2));
console.log(ProductDetails(proo3));


//TODO Example 2:
interface ProductDescription{
    name: string;
    price : number ;
    quantity: number;
} 

const MobilePhone:ProductDescription={
    name: "Iphone",
    price : 85000,
    quantity: 15
}

const calculateTotalProduct=(pro:ProductDescription)=>{
    return `Total Price of all the ${pro.name}'s inside the cart is : ${pro.price * pro.quantity} `
}

console.log("second function");

console.log(calculateTotalProduct(MobilePhone));


