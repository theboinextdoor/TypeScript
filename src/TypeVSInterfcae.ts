// **************************
// * Interface VS Type
// **************************


//1. 
//? Use Type when you need unions, intersection or mapped types

type Stud = {
    name: string;
    age : number;
}

type Stud2={
    city : string;
    state : string;
}

const BioData: Stud & Stud2={
    name: "Faraz Ashraf",
    age: 23,
    city: "Delhi",
    state: "Delhi"
}

const BioData2 : Stud | Stud2={
    name: "Faraz Ashraf",
    age: 23,
}


//? Use Interface when defining object or classess that adhere to a contract 
interface Studd {
    name: string;
    age : number;
}

interface Studd2 {
    city : string;
    state : string;
}

interface Data extends Studd , Studd2 {
     
}

// 2.
//? Interface can extend other interface to inherit members.
//? Custom types can use unions and intersection for more complex type composition.

// 3.
