//* Map method in TypeScript

const numbers:number[]= [1,2,3,4,5,6,]

//! Map Method
//* The map method creates a new array by appliying a provided function to each elem of the original array
//* It transform each elem and return a new array which is transformed values

// TODO  1). Doubling each number

const doubleData:number[] = numbers.map((curVal:number):number=>{
    return curVal*2
}) 

console.log(doubleData);

// TODO  2). Converting Number to String
const numtoString:string[] = numbers.map((currElem:number):string =>{
    return currElem.toString();
})
console.log(numtoString);




//! Filter Method

//TODO Filter even Numbers

const evenNumbers:number[] = numbers.filter((currELem:number) => currELem % 2 === 0)
console.log(evenNumbers);



//TODO UpperCase version of each name
const names:string[] = ["Tom", "Jerry", "Baby", "Damon", "Stefan"]
const ucn:string[] = names.map((elem:string):string =>{
   return  elem.toUpperCase();
})
console.log(ucn);


// Todo String length greater than 5.
const name1:string[]  = ["AliceMarshall", "BobMarley", "AnnaDesuza", "DamonSalvatore", "KlausMikelson", "MattDonavan"];
const ans:string[] = name1.filter((elem:string):boolean =>{
    return elem.length > 9
})
console.log(ans);










