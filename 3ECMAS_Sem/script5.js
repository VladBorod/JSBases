'use strict';

class Product{
    static #maxQuantity = 100;
    #name;
    #price;
    #quantity;

    constructor(name, price, quantity) {
        this.#name = name;
        this.#price = price;
        if (quantity > Product.#maxQuantity) {
            throw new Error(`Product quantity is to high, must be less than ${Product.#maxQuantity} or product quantity is zero`);
        } else if (quantity < 0) {
            throw new RangeError(`Product quantity is less 0`);
        }
        this.#quantity = quantity;
    }
    getName = () => this.#name;
    getPrice = () => this.#price;
    getQuantity = () => this.#quantity;

    setName = (name) => {
        this.#name = name;
    }
    setPrice = (price) => {
        this.#price = price;
    }
    setQuantity = (quantity) => {
        if (quantity > Product.#maxQuantity) {
            throw new RangeError(`Product quantity is to high, must be less than ${Product.#maxQuantity} or product quantity is zero`);
        } else if (quantity < 0) {
            throw new RangeError(`Product quantity is less 0`);
        }
        this.#quantity = quantity;
    }
}

const product1 = new Product('Laptop', 1000, 10);

console.log(product1.getName());
product1.setName('iPhone');
console.log(product1.getName());
product1.setQuantity(3);
console.log(product1.getQuantity());