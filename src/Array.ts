//! Array in TypeScript
// You can initialize Array in two ways

// 1. using square bracket
const num:number[] = [1,2,3,4,5,6,7]

// 2. using the Array constructor 
const num2:number[] = new Array(1,2,3,4,5,6);

// 3. using the Array of method 
const names:string[] = Array.of("Tom", "Jerry","Oggy" )


//! Operation : Accessing elements using index
//? You can access individual elements of any array using square bracket notation with the index of the element.
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);

console.log(names.length);






export{};
