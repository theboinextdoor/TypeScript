//* Bank Account Balance
class BankAccount{
    private _balance : number = 0;
    constructor(){
    }

    public get getbalance():string{
        if(this._balance < 0){
            throw new Error("Balance can never be 0.");
        }else{
            return `Your Account Balance is:- ${this._balance}`;
        }
    }

    public set setbalance(balance : number){
        if(balance < 0){
            throw new Error("Balance can never be negative")
        }else{
            this._balance = balance;
        }
    }

    // balanceEnquiry():string{
    //     return `Your Account Balance is ${this._balance};`
    // }
}

const accountHolder = new BankAccount();
accountHolder.setbalance= 1000;
console.log(accountHolder.getbalance);

const accountHolder2= new BankAccount();
accountHolder2.setbalance = -1000;
console.log(accountHolder2.getbalance);


// console.log(accountHolder.balanceEnquiry());

