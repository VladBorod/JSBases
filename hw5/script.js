'use strict'

// Дан объект numbers. Необходимо в консоль вывести все значения больше или равные 3.

const numbers = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7,
}

const valueFilter = function(obj) {
    const filteredArray = [];
    for (let [key, value] of Object.entries(obj)) {
        if (value >= 3) {
            filteredArray.push('=>', key, value, '<=');
        }
    }
    return filteredArray;
}
console.log(valueFilter(numbers));

// Необходимо из объекта, который лежит в константе post вывести значения, к которым приписан комментарий, в консоль.

const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [{
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2, // вывести это число
            },
        },
        {
            userId: 5, // вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", // вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1,
            },
        },
    ],
};
let author = post.author
let dislikes = post.comments[0].rating.dislikes;
let userId = post.comments[0].userId;
let text = post.comments[1].text;

console.log(`Author: ${author}, dislikes: ${dislikes}, userId: ${userId}, text: ${text}`);


// Дан массив products, необходимо цену каждого продукта уменьшить на 15% используя метод forEach.

const products = [{
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

const priceReducerShort = function(obj) {
        obj.forEach(function(product) {
            product.price = product.price * 0.85;
        });
        return obj;
    }
    // console.log('15% discount to all products: ');
    // console.log(priceReducerShort(products));

const priceReducerLong = function(obj) {
        for (let i = 0; i < obj.length; i++) {
            obj[i].price = obj[i].price * 0.85;
        }
        return obj;
    }
    // console.log('15% discount to all products: ');
    // console.log(priceReducerLong(products));

const priceReducerAnother = function(obj) {
    for (const key in obj) {
        obj[key].price = obj[key].price * 0.85;
    }
    return obj;
}
console.log('15% discount to all products: ');
console.log(priceReducerAnother(products));


// 1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна фотография используя метод filter. Исходные данные - массив products.
// 2. Необходимо отсортировать массив products используя метод sort по цене, начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести отсортированный массив в консоль.

const yourProducts = [{
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ],
    },
    {
        id: 5,
        price: 499,
        photos: [],
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg",
        ],
    },
    {
        id: 8,
        price: 78,
    },
];

let yourProductsWithPhotos = yourProducts.filter(function(product) {
    return product.photos !== undefined && product.photos.length > 0;
});
console.log('Products you can inspect: ');
console.log(yourProductsWithPhotos);

let yourProductsSorted = yourProducts.sort(function(a, b) {
    return a.price - b.price;
});
console.log('Products sorted from the cheapest to the most expensive:');
console.log(yourProductsSorted);

// let yourProductsSortedReverse = yourProducts.sort(function(a, b) {
//     return b.price - a.price;
// });
// console.log('Products sorted from the most expensive to the cheapest: ');
// console.log(yourProductsSortedReverse);


// Вам необходимо объединить 2 этих массива, чтобы значения первого массива были ключами, а значения второго массива — значениями.

const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

let daysOfTheWeekMap = function(e, r) {
    let resultMap = new Map();
    for (let i = 0; i < en.length; i++) {
        resultMap.set(en[i], ru[i]);
    }
    return resultMap;
}
console.log('Merged days of the week with Map: ');
console.log(daysOfTheWeekMap(en, ru));

let daysOfTheWeekObject = function(e, r) {
    let resutObject = {};
    for (let i = 0; i < en.length; i++) {
        resutObject[en[i]] = ru[i];
    }
    return resutObject;
}
console.log('Merged days of the week with Obj: ');
console.log(daysOfTheWeekObject(en, ru));