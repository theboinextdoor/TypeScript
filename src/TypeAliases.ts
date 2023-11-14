//! TypeAliases

type UserInfo={
    name:{
        f_name:string;
        l_name:string;
    } ;
    age: number;
    class?: number;                 //!This is an Optional Property
    email: string;
    activeUser: boolean;
    address:{
        city: string 
        Country: string 
        Pincode: number 
    }
}


const person01:UserInfo={
    name: {
        f_name:"Damon",
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
}
const person02:UserInfo={
    name: {
        f_name:"Stefan",
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
}
const person03:UserInfo={
    name: {
        f_name:"Faraz",
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
}


const UserInformation=(user: UserInfo)=>{
    return user.email;
}

console.log(UserInformation(person01));




//!Example

type Product={
    Model_name: string ;
    price: number;
    quantity : number;
}

const prod1:Product={
    Model_name: "iPhone",
    price: 20000,
    quantity: 40
}

const calculateTotalPrice= (prodd:Product)=>{
    return `Product name : ${prodd.Model_name}\nTotal Price : `+prodd.price * prodd.quantity;
    // return prodd.price * prodd.quantity
}

console.log("Total Price of the Product: ");
console.log(calculateTotalPrice(prod1));



