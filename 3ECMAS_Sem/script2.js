'use strict';

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log(`My name: ${this.name}, age: ${this.age}`);
    }
}

const user1 = new Person('Lola', 25);
console.log(user1.introduce());