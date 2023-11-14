//! Union : TypeScript allows us to use more than one data type for a variable or a function parameter. This is called union type.

const userInput= (value: string| number | boolean ):void=>{
   if(typeof value === "string"){
        console.log(value.toUpperCase());
   }else if(typeof value === "number"){
        console.log(value *2);
   }else if(typeof value === "boolean"){
        console.log(false);
   }else{
    console.log("Envalid Output");
    
   }
}

userInput(10);
userInput("faraaz Ashraf");
userInput(true);



//! In Typescript, Although intersection and union types are similar, they are employed in completely different ways. An intersection type is a type that merges several kinds into one. This allows you to combine many types to create a single type with all of the properties that you require. An object of this type will have members from all of the types given. The ‘&’ operator is used to create the intersection type.

type Person ={
    name : string;
    age : number ;
}
type Employee ={
    emp_id: number;
    department : string;
}

type EmployeeDetails = Person  & Employee      //? Intersection 
type EmployeeDetails1 = Person  | Employee      //? Union 

const employee:EmployeeDetails ={
    name : "Faraaz",
    age : 22,
    emp_id: 1523,
    department:"Senior Software Developer"
}

















export{}