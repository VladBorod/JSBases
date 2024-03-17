'use strict';

const data = JSON.parse(dataInfo);
console.log(data);
// data.forEach(element => {
//     console.log(element);
// });

const container = document.querySelector('div.container');

data.forEach(element => {
    const divEl = document.createElement('div');
    const img = document.createElement('img');
    const heading = document.createElement('h2');
    const paraph = document.createElement('p');
    img.url = element.url;
    img.style.width = element.width + 'px';
    img.style.height = element.height + 'px';
    heading.textContent = element.heading;
    paraph.textContent = element.paraph;
    divEl.appendChild(img);
    divEl.appendChild(heading);
    divEl.appendChild(paraph);
    container.appendChild(divEl);
    divEl.classList.add(element.class);
});