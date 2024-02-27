'use strict'

// // Дан объект numbers. Необходимо в консоль вывести все значения больше или равные 3.

// const numbers = {
//     keyin1: 1,
//     keyin2: 2,
//     keyin3: 3,
//     keyin4: 4,
//     keyin5: 5,
//     keyin6: 6,
//     keyin7: 7,
// }

// const valueFilter = function(obj) {
//     const filteredArray = [];
//     for (let [key, value] of Object.entries(obj)) {
//         if (value >= 3) {
//             filteredArray.push('=>', key, value, '<=');
//         }
//     }
//     return filteredArray;
// }
// console.log(valueFilter(numbers));

// // Необходимо из объекта, который лежит в константе post вывести значения, к которым приписан комментарий, в консоль.

// const post = {
//     author: "John", // вывести этот текст
//     postId: 23,
//     comments: [{
//             userId: 10,
//             userName: "Alex",
//             text: "lorem ipsum",
//             rating: {
//                 likes: 10,
//                 dislikes: 2, // вывести это число
//             },
//         },
//         {
//             userId: 5, // вывести это число
//             userName: "Jane",
//             text: "lorem ipsum 2", // вывести этот текст
//             rating: {
//                 likes: 3,
//                 dislikes: 1,
//             },
//         },
//     ],
// };
// let author = post.author
// let dislikes = post.comments[0].rating.dislikes;
// let userId = post.comments[0].userId;
// let text = post.comments[1].text;

// console.log(`Author: ${author}, dislikes: ${dislikes}, userId: ${userId}, text: ${text}`);


// // Дан массив products, необходимо цену каждого продукта уменьшить на 15% используя метод forEach.

// const products = [{
//         id: 3,
//         price: 200,
//     },
//     {
//         id: 4,
//         price: 900,
//     },
//     {
//         id: 1,
//         price: 1000,
//     },
// ];

// const priceReducerShort = function(obj) {
//         obj.forEach(function(product) {
//             product.price = product.price * 0.85;
//         });
//         return obj;
//     }
//     // console.log('15% discount to all products: ');
//     // console.log(priceReducerShort(products));

// const priceReducerLong = function(obj) {
//         for (let i = 0; i < obj.length; i++) {
//             obj[i].price = obj[i].price * 0.85;
//         }
//         return obj;
//     }
//     // console.log('15% discount to all products: ');
//     // console.log(priceReducerLong(products));

// const priceReducerAnother = function(obj) {
//     for (const key in obj) {
//         obj[key].price = obj[key].price * 0.85;
//     }
//     return obj;
// }
// console.log('15% discount to all products: ');
// console.log(priceReducerAnother(products));


// // 1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна фотография используя метод filter. Исходные данные - массив products.
// // 2. Необходимо отсортировать массив products используя метод sort по цене, начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести отсортированный массив в консоль.

// const yourProducts = [{
//         id: 3,
//         price: 127,
//         photos: [
//             "1.jpg",
//             "2.jpg",
//         ],
//     },
//     {
//         id: 5,
//         price: 499,
//         photos: [],
//     },
//     {
//         id: 10,
//         price: 26,
//         photos: [
//             "3.jpg",
//         ],
//     },
//     {
//         id: 8,
//         price: 78,
//     },
// ];

// let yourProductsWithPhotos = yourProducts.filter(function(product) {
//     return product.photos !== undefined && product.photos.length > 0;
// });
// console.log('Products you can inspect: ');
// console.log(yourProductsWithPhotos);

// let yourProductsSorted = yourProducts.sort(function(a, b) {
//     return a.price - b.price;
// });
// console.log('Products sorted from the cheapest to the most expensive:');
// console.log(yourProductsSorted);

// // let yourProductsSortedReverse = yourProducts.sort(function(a, b) {
// //     return b.price - a.price;
// // });
// // console.log('Products sorted from the most expensive to the cheapest: ');
// // console.log(yourProductsSortedReverse);


// // Вам необходимо объединить 2 этих массива, чтобы значения первого массива были ключами, а значения второго массива — значениями.

// const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

// let daysOfTheWeekMap = function(e, r) {
//     let resultMap = new Map();
//     for (let i = 0; i < en.length; i++) {
//         resultMap.set(en[i], ru[i]);
//     }
//     return resultMap;
// }
// console.log('Merged days of the week with Map: ');
// console.log(daysOfTheWeekMap(en, ru));

// let daysOfTheWeekObject = function(e, r) {
//     let resutObject = {};
//     for (let i = 0; i < en.length; i++) {
//         resutObject[en[i]] = ru[i];
//     }
//     return resutObject;
// }
// console.log('Merged days of the week with Obj: ');
// console.log(daysOfTheWeekObject(en, ru));


// let room = {
//         heigh: 3,
//         tv: 'sumsung',
//         big: true,
//     }
// console.log(room.heigh, room.tv, room.big);
// alert(typeof(room.big));
// console.log(room.tv.length - 1);
// console.log([room.tv.length - 1]);
// console.log(room.tv.toUpperCase());
// room.tv = 'LG';
// console.log(room);
// room.furniture = ["table", "chair", "sofa"];
// console.log(room.furniture[1]);
// delete room.big;
// console.log(room);

// let room = {
//         tv: 'sumsung',
//     }
// alert("tv" in room);
// alert("table" in room);

// alert(room.tv === undefined);
// alert(room.table === undefined);
// let paint = 'color';
// let room = {
//     [paint]: 'blue',
// }
// console.log(room.color);


//  ----------------------------------------------------------------------------------------------------------------------------------------------------------------

const data = {
    a: 1,
}
const isPlainObject = function(obj) {
        let temp = false;
        for (const key in obj) {
            (obj[key] !== undefined && obj[key] !== null && obj[key] !== '' && obj[key] !== true && obj[key] !== false && !Array.isArray(obj[key])) ? temp = true: temp = false;
        }
        return temp;
    }
    // console.log(isPlainObject(data));

// ----------

const anotherData = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
}
const makePairs = function(obj) {
        let mainArray = [];

        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                mainArray.push([key, obj[key]]);
            }
        }

        return mainArray;
    }
    // console.log(makePairs(anotherData));

const makePairsMostShort = (object) => Object.entries(object);
// console.log(makePairsMostShort(anotherData));

const makePairsShort = (object) => Object.keys(object).map((key) => [key, object[key]]);
// console.log(makePairsShort(anotherData));


//  ---------

const dataToDelete = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
}

const without = (object, ...args) => {
    const newObject = {...object };
    args.forEach((arg) => delete newObject[arg]);
    return newObject;
};
// console.log(without(dataToDelete, 'b', 'c', 'h', 'e'));


// ------

const dataEmpty = {
    a: null,
    b: undefined,
}
const dataNotEmpty = {
    a: 1,
    b: 19,
    any: undefined,
    someKey: 'value',
    new: null,
}
const isEmpty = (object) => {
    let temp = true;
    for (const key in object) {
        if (object[key] !== undefined && object[key] !== null && object[key] !== '') {
            temp = false;
            break;
        }
    }
    return temp;
};

// console.log(isEmpty(dataEmpty));
// console.log(isEmpty(dataNotEmpty));

const dataToCompareFirst = {
    a: 1,
    b: 2,
    c: 3,
}
const dataToCompareSecond = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
}
const dataToCompareThird = {
    a: 1,
    b: 2,
    c: 4,
}
const dataToCompareFourth = {
    a: 1,
    b: 2,
    c: 3,
}

const isEqual = (objF, objS) => {
    let temp = true;
    if (Object.keys(objF).length !== Object.keys(objS).length) {
        temp = false;
        return temp;
    }
    for (const key in objF) {
        if (objF[key] !== objS[key]) {
            temp = false;
        }
    }
    return temp;
};
// console.log(isEqual(dataToCompareFirst, dataToCompareSecond));
// console.log(isEqual(dataToCompareFirst, dataToCompareThird));
// console.log(isEqual(dataToCompareFirst, dataToCompareFourth));

const isEqualMaxShort = (firstObj, secondObj) => {
    if (Object.keys(firstObj).length !== Object.keys(secondObj).length) {
        return false;
    }
    return !Object.keys(firstObj).filter((key) => firstObj[key] !== secondObj[key]).length;
};
// console.log(isEqualMaxShort(dataToCompareFirst, dataToCompareSecond));
// console.log(isEqualMaxShort(dataToCompareFirst, dataToCompareThird));
// console.log(isEqualMaxShort(dataToCompareFirst, dataToCompareFourth));

const isEqualShort = (firstObj, secondObj) => {
    if (Object.keys(firstObj).length !== Object.keys(secondObj).length) {
        return false;
    }

    for (const prop in firstObj) {
        if (firstObj.hasOwnProperty(prop) && (firstObj[prop] !== secondObj[prop])) {
            return false;
        }
    }

    return true;
};
// console.log(isEqualShort(dataToCompareFirst, dataToCompareSecond));
// console.log(isEqualShort(dataToCompareFirst, dataToCompareThird));
// console.log(isEqualShort(dataToCompareFirst, dataToCompareFourth));

let dataEmptyDeepOne = { // 
    a: 1,
    b: {
        c: 2,
        d: 3,
    }
}
let dataEmptyDeepTwo = {
    a: 1,
    b: {
        c: 2,
        d: null,
        e: 4,
    }
}
let dataEmptyDeepThree = {
    a: {
        b: undefined,
        c: 3,
    },
    d: 4,
}
let dataEmptyDeepFour = {
    a: {
        b: undefined,
        c: 3,
    },
    d: null,
}
let dataEmptyDeepFive = {
    a: 1,
    b: 1,
}
const isEmptyDeep = function(obj) {
    let temp = true;
    let tempObj = {};
    for (const key in obj) {
        if (obj[key] !== undefined && obj[key] !== null) {
            temp = false;
        } else if (typeof obj[key] === 'object' && obj[key] !== null) {
            tempObj = obj[key];
            console.log(tempObj);
            for (const key in tempObj) {
                if (tempObj[key] !== undefined && tempObj[key] !== null) {
                    temp = false;
                } else {
                    temp = true;
                }
            }
        } else {
            temp = true;
        }
    }
    return temp;
}
console.log(isEmptyDeep(dataEmptyDeepOne));
console.log(isEmptyDeep(dataEmptyDeepTwo));
console.log(isEmptyDeep(dataEmptyDeepThree));
console.log(isEmptyDeep(dataEmptyDeepFour));
console.log(isEmptyDeep(dataEmptyDeepFive));


// let temp = false;
//         for (const key in obj) {
//             (obj[key] !== undefined && obj[key] !== null && obj[key] !== '' && obj[key] !== true && obj[key] !== false && !Array.isArray(obj[key])) ? temp = true: temp = false;
//         }
//         return temp;