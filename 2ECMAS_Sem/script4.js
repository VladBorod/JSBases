'use strict';

class BankAccount {
    static bankName = 'Bank Moshennik';
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
        this.newBalance('Deposited', amount);
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            this.newBalance('Withdrawn', amount);
        } else {
            console.log(`Insufficient funds usicg account number: ${this.accountNumber}. Bank: ${BankAccount.bankName}!`);
        }
    }
    newBalance(operation, amount) {
        console.log(`${operation} ${amount} using account number: ${this.accountNumber}. Balance: ${this.balance}. Bank: ${BankAccount.bankName}!`);
    }
}

const account1 = new BankAccount('123456789', 1000);
console.log(account1.deposit(500));
console.log(account1.withdraw(500));
console.log(account1.withdraw(2000));