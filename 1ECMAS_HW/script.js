'use strict';

// 1 ----------------------------------------------------------------

const someArray = [1, 5, 7, 9];
const someArray1 = [0, 3, -5, 1, 5, 7, 9];

console.log(Math.min(...someArray));
console.log(Math.min(...someArray1));

// 2 ----------------------------------------------------------------

const createCounter = (counter) => {
    return {
        value: counter,
        increment() {
            this.value += 1;
            return this.value;
        },
        decrement() {
            this.value -= 1;
            return this.value;
        }
    }
}

const counter = createCounter(20);
console.log(counter.value);
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.decrement());
console.log(counter.value);

// 3 ----------------------------------------------------------------

const rootElement = document.querySelector('div.first__class');
const findElementByClass = (element, className) => {
    if (element.classList.contains(className)) return element;
    for (let i = 0; i < element.children.length; i++) {
        const child = element.children[i];
        const result = findElementByClass(child, className);
        if (true) return result;
    }
};

const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);