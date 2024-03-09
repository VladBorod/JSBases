'use strict';

// const form = document.querySelector('form');
// const list = document.querySelector('ul');
// list.addEventListener('click', (e) => {
//     console.log('В первом UL в фазе захвата');
//     const propagationControlMethodName =
//         form.elements['propagation-control'].value;
//     if (propagationControlMethodName) {
//         e[propagationControlMethodName]();
//     }
// }, true);
// list.addEventListener('click', () => {
//     console.log('Во втором UL в фазе захвата');
// }, true);
// list.addEventListener('click', () => {
//     console.log('В первом UL в фазе всплытия');
// });
// Array.from(list.children).forEach((child) => {
//     child.addEventListener('click', () => {
//         console.log('В каждом LI в фазе всплытия');
//     });
// });

// // ----------------------------------------------------------------

// const checkbox = document.querySelector('input[type=checkbox]');
// checkbox.addEventListener('click', (event) => {
//     console.log(event.target.checked); // true
//     event.preventDefault();
// });

// const inputElem = document.querySelector('.check');
// const formElem = document.querySelector('.form');
// const errorElem = formElem.querySelector('.error');
// inputElem.addEventListener('click', function(e) {
//     const target = e.target;
//     console.log(target.checked);
// });

// formElem.addEventListener('submit', function(e) {
//     if (inputElem.checked) {
//         console.log('OK');
//         // if (formElem.contains(errorElem)) {
//         //     errorElem.remove();
//         // }
//     } else {
//         errorElem.textContent = 'Choose check box';
//         e.preventDefault();
//     }
// });

// // ----------------------------------------------------------------

// const eventOptions = { bubbles: true, cancelable: true }
// const event = new Event('click', eventOptions)
// event.view = window
// const mouseEvent = new MouseEvent('click', {
//     ...eventOptions,
//     view: window,
// })
// document.addEventListener('click', (event) => {
//     console.log(event.isTrusted)
// })
// const button = document.querySelector('button')
// button.dispatchEvent(event)
// button.dispatchEvent(mouseEvent)
// button.click()

// ----------------------------------------------------------------
// ----------------------------------------------------------------

// const inputEl = document.querySelector('input[type="checkbox"]');
// const formEl = document.querySelector('form.form');
// const errorEl = document.querySelector('div.error');

// inputEl.addEventListener('click', function(e) {
//     const target = e.target;
//     console.log(target.checked);
// });

// formEl.addEventListener('submit', function(e) {
//     if (inputEl.checked) {
//         console.log('OK!');
//     } else {
//         console.log('You has to agree with conditions!');
//     }
// });


// const contEl = document.querySelector('div.container');
// const myCheckEl = document.createElement('input');
// myCheckEl.type = 'checkbox';
// myCheckEl.id = 'agreement';
// const myLabelEl = document.createElement('label');
// myLabelEl.innerHTML = 'AGREE TO';
// myLabelEl.for = 'agreement';
// contEl.appendChild(myCheckEl);
// contEl.appendChild(myLabelEl)
// const btnEl = document.createElement('button');
// btnEl.innerHTML = 'SEND THIS';
// contEl.appendChild(btnEl);

// btnEl.addEventListener('click', function(e) {
//     if (!myCheckEl.checked) {
//         const textEl = document.createElement('p');
//         textEl.innerHTML = 'You have to agree with conditions!';
//         contEl.appendChild(textEl);
//     }
// });

// ----------------------------------------------------------------

// const containerEl = document.querySelector('div.container');
// const btnEl = document.createElement('button');

// const radioTea = document.createElement('input');
// radioTea.name = 'drink';
// radioTea.type = 'radio';
// radioTea.id = 'radioTea';

// const radioCoffee = document.createElement('input');
// radioCoffee.name = 'drink';
// radioCoffee.type = 'radio';
// radioCoffee.id = 'radioCoffee';

// const labelTea = document.createElement('label');
// labelTea.innerHTML = 'Tea';
// labelTea.id = 'tea';
// const labelCoffe = document.createElement('label');
// labelCoffe.innerHTML = 'Coffe';
// labelCoffe.id = 'coffe';

// const buttonDrinkEl = document.createElement('button');
// buttonDrinkEl.innerHTML = 'Drink';

// containerEl.appendChild(radioTea);
// containerEl.appendChild(labelTea);
// containerEl.appendChild(radioCoffee);
// containerEl.appendChild(labelCoffe);
// containerEl.appendChild(buttonDrinkEl);

// buttonDrinkEl.addEventListener('click', function(e) {
//     const textDrink = document.createElement('p');
//     if (radioTea.checked) {
//         textDrink.innerHTML = 'No more tea available';
//         containerEl.appendChild(textDrink);
//     } else {
//         textDrink.innerHTML = 'No more coffee available';
//         containerEl.appendChild(textDrink);
//     }
// });


// ----------------------------------------------------------------

// const someContainerEl = document.querySelector('div.container');
// const passEl = document.createElement('input');
// passEl.type = 'text';

// const initBtn = document.createElement('button');
// initBtn.innerHTML = 'Init pass';

// someContainerEl.appendChild(passEl);
// someContainerEl.appendChild(initBtn);

// initBtn.addEventListener('click', function(e) {
//     if (passEl.value.toLocaleLowerCase() === 'password') {
//         passEl.classList.remove('red');
//         passEl.classList.add('green');
//     } else {
//         passEl.classList.remove('green');
//         passEl.classList.add('red');
//     }
// });


//  ----------------------------------------------------------------

// const contForChange = document.querySelector('.container');

// const titleEl = document.createElement('h1');
// titleEl.innerHTML = 'Some text';

// const inputZoneEl = document.createElement('input');
// inputZoneEl.type = 'text';

// const btnNewEl = document.createElement('button');
// btnNewEl.innerHTML = 'Change h1';

// contForChange.appendChild(titleEl);
// contForChange.appendChild(inputZoneEl);
// contForChange.appendChild(btnNewEl);

// btnNewEl.addEventListener('click', function(e) {
//     let innerText = inputZoneEl.value;
//     titleEl.innerHTML = innerText;
// });

//  ----------------------------------------------------------------

const lastContEl = document.querySelector('.container');

const lastInputEl = document.createElement('input');
lastInputEl.type = 'text';
lastContEl.appendChild(lastInputEl);
const lastText = document.createElement('h1');
lastText.innerHTML = 'Change h1';
lastContEl.appendChild(lastText);

lastInputEl.addEventListener('change', function(e) {
    lastText.innerHTML = e.target.value;
});

// lastInputEl.addEventListener('input', function(e) {
//     lastText.innerHTML = e.target.value;
// });

// lastInputEl.addEventListener('keyup', function(e) {
//     lastText.innerHTML = e.target.value;
// });

// lastInputEl.addEventListener('keydown', function(e) {
//     lastText.innerHTML = e.target.value;
// });