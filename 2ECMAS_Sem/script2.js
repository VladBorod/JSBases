'use strict';

const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        return a / b;
    },
    square: function(a) {
        return a * a;
    },
    cube: function(a) {
        return a * a * a;
    },
    squareRoot: function(a) {
        return Math.sqrt(a);
    }
}

console.log(calculator.add.call(null, 5, 3));
console.log(calculator.subtract.apply(null, [5, 3]));

const User = {
    name: 'Bob',
    hello: function() {
        console.log(`Hello ${this.name}`);
    }
}

const User2 = {
    name: 'Alice',
}

console.log(User.hello());
console.log(User.hello.call(User2));