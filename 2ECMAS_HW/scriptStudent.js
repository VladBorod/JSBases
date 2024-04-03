'use strict';

class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    displayInfo() {
        console.log(`Student's name: ${this.name}, age: ${this.age}, grade: ${this.grade}.`);
    }
}

const student1 = new Student('Mike', 22, '34b');
console.log(student1.displayInfo());