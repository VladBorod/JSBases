'use strict';

class Order{
    constructor(){
        this.orderNumber = unicNumberGenerator();
        this.products = [];
    }
    addProduct = (product) => this.products.push(product);
    
    getTotalPrice = () => {
        let totalPrice = 0;
        this.products.forEach(element => {
            totalPrice += element.getPrice();
        });
        return totalPrice;
    }

    showProducts = () => {
        console.log('-------------------');
        if (this.products.length < 1){
            throw new Error('You must provide at least one product!');
        }
        console.log(this.orderNumber);
        this.products.forEach(element => {
            console.log(`Product: ${element.getProductName()}`);
            console.log(`Price: ${element.getPrice()}`);
        });
        console.log(`Total price: ${this.getTotalPrice()}`);
    }
    getOrderNumber = () => this.orderNumber;
}

class Product{
    constructor(productName, price){
        this.productName = productName;
        this.price = price;
    }
    getProductName = () => this.productName;
    getPrice = () => this.price;
}

const unicNumberGenerator = () => {
    let uniqueNumber = Math.floor(Math.random() * 900000) + 100000;
    return uniqueNumber;
}

const product1 = new Product('iPhone', 100000);
const product2 = new Product('Samsung', 70000);
const product3 = new Product('Huawei', 50000);
const product4 = new Product('RedMe', 30000);

const order1 = new Order();
const order2 = new Order();
const order3 = new Order();

order1.addProduct(product1);
order1.addProduct(product2);
order1.showProducts();

order2.addProduct(product3);
order2.addProduct(product4);
order2.showProducts();

order3.showProducts();