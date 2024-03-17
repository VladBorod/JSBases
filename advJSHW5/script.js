'use strict';

const personData = JSON.parse(person);
personData.forEach(element => {
    console.log(element);
});

const container = document.querySelector('div.container');

personData.forEach(element => {
    const personElement = document.createElement('div');
    const img = document.createElement('img');
    const id = document.createElement('h1');
    const name = document.createElement('h2');
    const type = document.createElement('p');
    const gender = document.createElement('p');
    const status = document.createElement('p');

    personElement.classList.add('person__element');

    img.url = element.image;
    img.classList.add('person__image');

    id.textContent = element.id;
    id.classList.add('person__id');

    name.textContent = element.name;
    name.classList.add('person__name');

    type.textContent = element.type;
    type.classList.add('person__type');

    gender.textContent = element.gender;
    gender.classList.add('person__gender');

    status.textContent = element.status;
    status.classList.add('person__status');

    personElement.appendChild(img);
    personElement.appendChild(id);
    personElement.appendChild(name);
    personElement.appendChild(type);
    personElement.appendChild(gender);
    personElement.appendChild(status);

    container.appendChild(personElement);
});


// data.forEach(element => {
//     const divEl = document.createElement('div');
//     const img = document.createElement('img');
//     const heading = document.createElement('h2');
//     const paraph = document.createElement('p');
//     img.url = element.url;
//     img.style.width = element.width + 'px';
//     img.style.height = element.height + 'px';
//     heading.textContent = element.heading;
//     paraph.textContent = element.paraph;
//     divEl.appendChild(img);
//     divEl.appendChild(heading);
//     divEl.appendChild(paraph);
//     container.appendChild(divEl);
//     divEl.classList.add(element.class);
// });