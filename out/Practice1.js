"use strict";
//* Bank Account Balance
class BankAccount {
    constructor() {
        this._balance = 0;
    }
    get getbalance() {
        if (this._balance < 0) {
            throw new Error("Balance can never be 0.");
        }
        else {
            return `Your Account Balance is:- ${this._balance}`;
        }
    }
    set setbalance(balance) {
        if (balance < 0) {
            throw new Error("Balance can never be negative");
        }
        else {
            this._balance = balance;
        }
    }
}
const accountHolder = new BankAccount();
accountHolder.setbalance = 1000;
console.log(accountHolder.getbalance);
const accountHolder2 = new BankAccount();
accountHolder2.setbalance = -1000;
console.log(accountHolder2.getbalance);
// console.log(accountHolder.balanceEnquiry());
