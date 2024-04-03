'use strict';

const Person = {
    name: this.name,
    age: this.age,
    gender: this.gender,
    introduce: function() {
        console.log(`Hi, my name is ${this.name}, I'm ${this.age} years old, I indefy as ${this.gender}.`);
    },
    changeName: function(newName) {
        this.name = newName;
    }
}
Person.name = 'Lilly';
Person.age = 30;
Person.gender = 'female';
console.log(Person.name);
console.log(Person.age);
console.log(Person.gender);
console.log(Person.introduce());
Person.changeName('Lena');
console.log(Person.introduce());