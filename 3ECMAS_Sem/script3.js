'use strict';

class Animal {
    constructor(name) {
        this.name = name;
    }
    speak = (message) => {
        console.log(`${this.name} says: ${message}`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    fetch = () => {
        console.log(`${this.name} is fetching a ball`);
    }
    introduce = () => {
        console.log(`${this.name} is ${this.breed}`);
    }
}

const dogA = new Dog('sharik', 'hasky');
console.log(dogA.introduce());
console.log(dogA.speak());
console.log(dogA.fetch());