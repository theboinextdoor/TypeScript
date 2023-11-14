//! Type Inference
//? in TypeScript Type Inference refers to the ability of the TypeScript comopliler to automatically determine and assign type to variable , expression , and function return values based on their usage and context in the code.

let myName = 'Tom'              //? even if we don't write the data type the compiler of thew typeScript  will automatically detectr it 
// myName= 5;                      //? you can not initialize any other value rather than the string




//! *****************************Optional parameter*******************************************

//? TypeScript allow you to define optional ans default parameter in function .
//? Optioanl parameter are denoted by appending a "?" symbol after the parameter name 

const grreet= (name:string , id?:number):string =>{
    if(id){
        return`Welcome ${name} your id is ${id}`
    }else {
        return `Welcome ${name}`
    }
}
grreet("Tom");


//! *******************************Default parameter*******************************************
//? default parameter are specuified by providing a default value in parametrr declaration

const grreet2= (name:string , id:number = 100):string =>{
    return`Welcome ${name} your id is ${id}`
}
grreet2("Tom", 23);

export{}
