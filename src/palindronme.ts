const isPalindrome = (palin: string):boolean  =>{
        let myPlain = palin.split("").reverse().join();
        return myPlain === palin 
}

console.log(isPalindrome("Faraaz Ashraf"));


export{};