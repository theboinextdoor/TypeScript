//! String 
let greeting: string = "Hey there i am using TypeScript."
console.log(greeting);
greeting = "Damon"       //?You can reInitialise the variable
// greeting = 6            this will give an error because you cannot assign any other value other than the string .

greeting.toUpperCase();
console.log(greeting);



//! number
let userId1:number = 335577      //? this is a number
let userId2: number = 4773.99    //? this is a also a number not a float data type because in typeScript there is no float data type.
userId1.toFixed();


//! Boolean 
let isloggedIn: boolean = false
let isPresent: boolean = true


//! any
let hero;
function gethero(){
    return "Thor"
}
hero = gethero();







// ===========================================================================================================================
//? this method will cancel the red underline which we get when me compile the Typescript code into the java script 
//? but this is a temporary method .
//? we can do it in a configuration file .
export { }    
