'use strict';

const form = document.querySelector('form');
const list = document.querySelector('ul');
list.addEventListener('click', (e) => {
    console.log('В первом UL в фазе захвата');
    const propagationControlMethodName =
        form.elements['propagation-control'].value;
    if (propagationControlMethodName) {
        e[propagationControlMethodName]();
    }
}, true);
list.addEventListener('click', () => {
    console.log('Во втором UL в фазе захвата');
}, true);
list.addEventListener('click', () => {
    console.log('В первом UL в фазе всплытия');
});
Array.from(list.children).forEach((child) => {
    child.addEventListener('click', () => {
        console.log('В каждом LI в фазе всплытия');
    });
});

// ----------------------------------------------------------------

const checkbox = document.querySelector('input[type=checkbox]');
checkbox.addEventListener('click', (event) => {
    console.log(event.target.checked); // true
    event.preventDefault();
});

const inputElem = document.querySelector('.check');
const formElem = document.querySelector('.form');
const errorElem = formElem.querySelector('.error');
inputElem.addEventListener('click', function(e) {
    const target = e.target;
    console.log(target.checked);
});

formElem.addEventListener('submit', function(e) {
    if (inputElem.checked) {
        console.log('OK');
        // if (formElem.contains(errorElem)) {
        //     errorElem.remove();
        // }
    } else {
        errorElem.textContent = 'Choose check box';
        e.preventDefault();
    }
});

// ----------------------------------------------------------------

const eventOptions = { bubbles: true, cancelable: true }
const event = new Event('click', eventOptions)
event.view = window
const mouseEvent = new MouseEvent('click', {
    ...eventOptions,
    view: window,
})
document.addEventListener('click', (event) => {
    console.log(event.isTrusted)
})
const button = document.querySelector('button')
button.dispatchEvent(event)
button.dispatchEvent(mouseEvent)
button.click()

// ----------------------------------------------------------------