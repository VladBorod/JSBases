'use strict';

const Animal = {
    name: this.name,
    eat: function() {
        console.log(`${this.name} is eating`);
    }
}

const Dog = {
    name: this.name,
    bark: function() {
        console.log(`${this.name} is barking`);
    }
}

Dog.name = 'Sharik';
Dog.eat = Animal.eat;
console.log(Dog.eat());