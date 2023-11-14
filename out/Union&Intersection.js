"use strict";
//! Union : TypeScript allows us to use more than one data type for a variable or a function parameter. This is called union type.
Object.defineProperty(exports, "__esModule", { value: true });
const userInput = (value) => {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else if (typeof value === "number") {
        console.log(value * 2);
    }
    else if (typeof value === "boolean") {
        console.log(false);
    }
    else {
        console.log("Envalid Output");
    }
};
userInput(10);
userInput("faraaz Ashraf");
userInput(true);
const employee = {
    name: "Faraaz",
    age: 22,
    emp_id: 1523,
    department: "Senior Software Developer"
};
