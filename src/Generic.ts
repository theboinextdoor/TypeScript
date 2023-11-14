//! Generic :- in TypeScript allow you to create reusable component or function that can work with multiple data types.

function logAndReturn(value : number | string | boolean){
    // console.log(value);
    return value;
}

const numberResult = logAndReturn(10);
const stringResult = logAndReturn("Hellow Guys");
const booleanResult = logAndReturn(true);

console.log(numberResult);
console.log(stringResult);
console.log(booleanResult);

//! WARNING :- after 2-3 data types union will not work properly that's why we use Generics
//* Generic function to return the value :=
function logAndReturn2<T>(value: T){
    // console.log(value)
    return value;
}

let num1= logAndReturn2(1000);
let str1= logAndReturn2("Aiman Ashraf");
let bool1= logAndReturn2(true);

console.log("Generic method: ");
console.log(num1);
console.log(str1);
console.log(bool1);


//! Function Overloading with TypeScript Generic 

function add<T, V>(a: T, b:V){
    console.log(typeof a);
    console.log(typeof b);
}

// function add<N, S, B>(a:N, b:S, c:B){
//     console.log(typeof a);
//     console.log(typeof b);
//     console.log(typeof c);
    
// }

const add1= add<number , number >(5,110)
const add2= add<number , string  >(5,"Hellow")
const add3= add("Hellow",10)
const add4= add(true,false)
