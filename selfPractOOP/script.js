'use strict'

// const car = {
//     make: "Audi",
//     year: 2023,
//     power: 249,
// }

// console.log(car.power);
// car.power = 300;
// console.log(car.power);

// const product = {
//     name: 'table',
//     productPrice: 2000,
//     count: 2,
//     buy: function() {
//         if (product.count > 0) {
//             console.log('You bought this product.');
//             this.count--;
//         } else {
//             console.log('This product is not available!');
//         }
//     }
// }
// console.log(product);
// product.someReference = 'reference';
// console.log(product);
// delete product.someReference;
// console.log(product);
// product.count;
// product.buy();
// console.log(product.count);
// product.buy();
// console.log(product.count);
// product.buy();
// console.log(product.count);

// const car = {
//     name: this.name,
//     year: this.year,
//     power: this.power,
// }

// // let car1 = car;
// car.car1 = ('Audi', 2003, 200);
// console.log(car1);

// const productNew = {
//     name: 'table',
//     productPrice: 2000,
//     count: 2,
//     userRegister: false,
//     registration: function() {
//         this.userRegister = true;
//     },
//     buy: function() {
//         if (this.count > 0) {
//             console.log('You bought this product.');
//             this.count--;
//         } else {
//             console.log('This product is not available!');
//         }
//     },
//     buyProduct: function() {
//         if (this.userRegister === true) {
//             console.log('Product in backet');
//         } else {
//             console.log('You need registration');
//         }
//     }
// }
// productNew.buyProduct();
// productNew.registration();
// productNew.buyProduct();

// const productTest = {
//     text: 'hello',
//     price: 1000,
// }

// for (const key in productTest) {
//     // if (Object.hasOwnProperty.call(object, key)) {
//     //     const element = object[key];

//     // }
//     console.log(key + ": " + productTest[key]);
//     console.log(productTest['price']);
// }


// const array = [1, 2, 3, 10, 15];
// const arrayUp = array.map(item => 2 * item);
// console.log(arrayUp);
// const arrayFilt = array.filter(item => item >= 10);
// console.log(arrayFilt);
// const arraySome = array.filter(item => item >= 15);
// console.log(arraySome);
// const arrayRed = array.reduce((a, b) => a + b) / array.length;
// console.log(arrayRed);
//  ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// const person = new Object({
//     name: 'SomeName',
//     age: 20,
//     greet: function() {
//         console.log('greet');
//     }
// });
// person.greet();
// Object.prototype.sayHello = function() {
//     console.log('Hello');
// }
// person.sayHello();

// const lena = Object.create(person);
// lena.name = 'Lena';
// lena.sayHello();
// console.log(lena.name);

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function hello() {
    console.log('hello', this)
}

const person = {
    name: 'SomeName',
    age: 20,
    sayHello: hello,
    sayHelloWindow: hello.bind(window),
    logInfo: function(phone, placeBirth) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`);
        console.log(`Age is ${this.age}`);
        console.log(`Profession is ${this.prosession}`);
        console.log(`Phone number is ${phone}`);
        console.log(`Place of Birth is ${placeBirth}`);
        console.groupEnd();
    }
}

const lena = {
    name: 'Lena',
    age: 23,
}

const semen = {
    name: 'Semen',
    age: 31,
    prosession: 'nuclear physic professor',
}

// person.logInfo.bind(lena)();
// person.logInfo.bind(semen)();

// const functionLenaInfoLog = person.logInfo.bind(lena, '3462345623456', 'Ass');
// functionLenaInfoLog();
// person.logInfo.call(lena, '3462345623456', 'Ass');
// person.logInfo.apply(lena, ['3462345623456', 'Ass']);


const array = [1, 2, 3, 4, 5];

// function multBy(arr, n) {
//     return arr.map(function(i) {
//         return i * n;
//     })
// }
// console.log(multBy(array, 4));
// Array.prototype.multBy = function(n) {
//     return this.map(function(i) {
//         return i * n;
//     })
// }
// console.log(array.multBy(2));
// // array.multBy(2);

// const someArray = [3, 15, 7, 81, 3, 2, 1, 12];

// Array.prototype.some = function(n) {
//     return this.map(function(i) {
//         return i % n === 0;
//     })
// }
// console.log(someArray.some(3));

// function createCalcFunction(n) {
//     return function() {
//         console.log(1000 * n);
//     }
// }
// const calc = createCalcFunction(42);
// calc();

// function createIncrementor(n) {
//     return function(num) {
//         return num + n;
//     }
// }

// const addOne = createIncrementor(1);
// const addTen = createIncrementor(10);
// const addTwelve = createIncrementor(12);

// console.log(addOne(10));
// console.log(addTen(10));
// console.log(addTwelve(10));

// function urlGenerator(domain) {
//     return function(url) {
//         return `http://${url}.${domain}`
//     }
// }

// const comUrl = urlGenerator('com');
// const ruUrl = urlGenerator('ru');

// console.log(comUrl('google'));
// console.log(comUrl('youtube'));

// console.log(ruUrl('yandex'));
// console.log(ruUrl('vk'));

// console.log(urlGenerator('google.com')('google'));

// function logPerson() {
//     console.log(`Person ${this.name}, ${this.age}, ${this.profession}`)
// }

// const person1 = { name: 'Mike', age: 20, profession: 'professor' }
// const person2 = { name: 'Lena', age: 23, profession: 'visagiste' }

// function bind(context, fn) {
//     return function(...args) {
//         fn.apply(context, args);
//     }
// }

// bind(person1, logPerson)();
// bind(person2, logPerson)();


// console.log('Start');
// console.log('Start2');

// function timeWrap2Sec() {
//     console.log('2 sec wrapper');
// }

// window.setTimeout(function() {
//     console.log('Inside timeout after 7 seconds');
// }, 7000);

// console.log('End');

// setTimeout(timeWrap2Sec, 2000);


console.log('Request data .....');
// setTimeout(() => {
//     console.log('Preparing data .....')

//     const backendData = {
//         server: 'avs',
//         port: 5050,
//         status: 'working',
//     }

//     setTimeout(() => {
//         backendData.modified = true;
//         console.log('Data received!', backendData);
//     }, 2000)
// }, 3000)

// const p = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         console.log('Preparing data .....')
//         const backendData = {
//             server: 'avs',
//             port: 5050,
//             status: 'working',
//         }
//         resolve(backendData)
//     }, 3000)
// })

// p.then((data) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.modified = true;
//             resolve(data)
//         }, 2000)
//     })
// })

// .then(clientData => {
//         console.log('Data received!', clientData);
//         clientData.fromromice = true;
//         return clientData;
//     })
//     .then(data => {
//         console.log('Modified', data);
//     })
//     .catch(err => console.error('Error', err))
//     .finally(() => console.log('Finally executed'));

const sleep = (ms) => {
    return new Promise((resolve => {
        setTimeout(() => resolve(), ms)
    }))
}

// sleep(2000).then(() => console.log('2 sec passed'));
// sleep(5000).then(() => console.log('5 sec passed'));

Promise.all([sleep(2000), sleep(4000), sleep(3000)])
    .then(() => {
        console.log('All promises resolved');
    })

Promise.race([sleep(2000), sleep(4000), sleep(3000)])
    .then(() => {
        console.log('All promises raced');
    })