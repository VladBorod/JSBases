'use strict';

class Person {
    static #maxAge = 120;

    #name;
    #age;
    #email;

    constructor(name, age, email) {
        this.#name = name;
        if (age > Person.#maxAge) {
            throw new Error('Age is too high!!!<<<');
        }
        this.#age = age;
        this.#email = email;
    }
    getName = () => this.#name;
    getAge = () => this.#age;
    getEmail = () => this.#email;

    setName = (name) => {
        this.#name = name;
    }
    setAge = (age) => {
        if (age > Person.#maxAge) {
            throw new RangeError('Age is too high');
        }
        this.#age = age;
    }
    setEmail = (email) => {
        this.#email = email;
    }
}

const user1 = new Person('Lola', 25, '<EMAIL>');
console.log(user1.getName());
user1.setName('Alina');
console.log(user1.getName());
console.log(user1.getAge());
user1.setAge(30);
console.log(user1.getAge());
console.log(user1.getEmail());
user1.setEmail('newMail');
console.log(user1.getEmail());

const user2 = new Person('Ira', 25, '<EMAIL>');