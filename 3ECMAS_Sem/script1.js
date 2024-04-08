'use strict';

const ObjectA = {
    a: 1
};

const ObjectB = {
    a: 2,
    __proto__: ObjectA,
};

const getPrototypeChain = (obj) => {
    let array = [];
    while (obj !== null) {
        array.push(obj);
        obj = Object.getPrototypeOf(obj);
    }
    return array;
};

console.log(getPrototypeChain(ObjectB));