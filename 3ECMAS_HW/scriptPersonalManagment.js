'use strict';

class Employee {
    constructor(name) {
        this.name = name;
    }
    displayInfo = () => {
        console.log(`Employee name: ${this.name}`);
    }
}

class Manager extends Employee {
    constructor(name, department) {
        super(name);
        this.department = department;
    }
    displayInfo = () => { 
        console.log(`Employee name: ${this.name}, \ndepartment: ${this.department}`);
    }
}

const employee1 = new Employee('Lola');
const manager1 = new Manager('Dima', 'Accounting');

console.log(employee1.displayInfo());
console.log(manager1.displayInfo());