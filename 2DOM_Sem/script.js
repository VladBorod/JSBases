'use strict';

// const body = document.querySelector('body');
// const newEl = document.createElement('div');
// newEl.innerHTML = 'Hello';

// body.appendChild(newEl);

// ----------------------------------------------------------------

// const filterElByDataAttr = (attributeName, maxPrice) => {
//   const elements = Array.from(document.querySelectorAll(`[${attributeName}]`));
//   elements.forEach(element => {
//     const price = parseFloat(element.getAttribute(attributeName));
//     if (price > maxPrice) {
//       element.style.display = 'none';
//     }
//   })
// };

// filterElByDataAttr('data-price', 75);

// const  sortElByDataAttr = attributeName => {
//   const rating = document.querySelector('.rating');
//   const elements = Array.from(document.querySelectorAll(`[${attributeName}]`));
//   elements.sort((a, b) => {
//     const ratingA = parseInt(a.getAttribute(attributeName));
//     const ratingB = parseInt(b.getAttribute(attributeName));
//     return ratingB - ratingA;
//   });
//   elements.forEach(element => {
//     rating.appendChild(element);
//   });
// }

// sortElByDataAttr('data-rating');

// ----------------------------------------------------------------

// const checkBox = document.getElementById('toggleCheckbox');
// const content = document.querySelector('.content');

// checkBox.addEventListener('change', function (e) {
//   if (this.checked) {
//     content.classList.add('visible');
//   } else {
//     content.classList.remove('visible');
//   }
// });

// ---------------------------------------------------------------

// window.addEventListener('load', function (e) {
//   const contentEl = document.querySelector('.content');
//   contentEl.classList.remove('hidden');

//   const loaderEl = document.querySelector('.loader');
//   loaderEl.style.display = 'none';
// }); 

const containerEl = document.querySelector('.container');
const newBlockEl1 = document.createElement('div');
const newBlockEl2 = document.createElement('div');
newBlockEl1.classList.add('block');
newBlockEl2.classList.add('block');
newBlockEl1.innerHTML = 'This is block 1';
newBlockEl2.innerHTML = 'This is block 2';

containerEl.appendChild(newBlockEl1);
containerEl.appendChild(newBlockEl2);

const menuElements = document.querySelectorAll('.block');

// document.addEventListener('click', function (e) {
//   e.target.classList.add('block-active');
// });

// document.addEventListener('click', function (e) {
//   if (e.target.classList.contains('block-active')) {
//     e.target.classList.remove('block-active');
//   } else {
//     e.target.classList.add('block-active');
//   }
// });

menuElements.forEach(item => {
  // item.addEventListener('mouseover', function (e) {
  //   item.style.backgroundColor = '#f08080';
  // });
  // item.addEventListener('mouseout', function (e) {
  //   item.style.backgroundColor = '';
  // });
  item.addEventListener('click', function (e) {
    item.classList.toggle('block-active');
  });
});

document.addEventListener('click', function (e) {
  if(e.target.classList.contains('menu__link')){
    e.preventDefault();
    document.querySelectorAll('.menu__link').forEach(item => {
      item.classList.remove('active')
      e.target.classList.add('active');
    });
  }
});

const modwin = document.querySelector('.modwin');

const openButton = document.createElement('button');
openButton.innerHTML = 'OPEN';
openButton.classList.add('open-btn');

modwin.appendChild(openButton);

const winElement = document.createElement('div');
winElement.classList.add('invisible');
winElement.classList.add('modwin');

const titleEl = document.createElement('h1');
const paraphEl = document.createElement('p');
const closeButton = document.createElement('button');
const imgEl = document.createElement('div');

titleEl.innerHTML = 'Modal Window';
paraphEl.innerHTML = 'Press close button to escape';
closeButton.innerHTML = 'CLOSE';
imgEl.classList.add('modal-img');

winElement.appendChild(titleEl);
winElement.appendChild(paraphEl);
winElement.appendChild(closeButton);
winElement.appendChild(imgEl);

modwin.appendChild(winElement);

openButton.addEventListener('click', function (e) {
  winElement.classList.remove('invisible');
  winElement.classList.add('scaled');
});

closeButton.addEventListener('click', function (e) {
  winElement.classList.remove('scaled');
  winElement.classList.add('invisible');
});

openModalBtn.addEventListener('click', function (e) {
  modal.style.display = 'block';
});

closeModalBtn.addEventListener('click', function (e) {
  modal.style.display = 'none';
});

const seller = document.querySelector('.seller');

const buyBtn = document.createElement('button');
buyBtn.classList.add('buy-button');
buyBtn.innerHTML = 'BUY';

seller.appendChild(buyBtn);

// function returnInnerHtml (){
//   buyBtn.innerHTML = 'BUY';
//   return innerHtml(buyBtn);
// }


buyBtn.addEventListener('click', function (e) {
  if (e.isTrusted)  {
    console.log('Event is trusted!');
    const origText = buyBtn.textContent;
    e.target.innerHTML = 'You bought this product!';
    setTimeout(() => {
      buyBtn.textContent = origText; 
    }, 1000);
    // setTimeout(returnInnerHtml, 2000);
  } else {
    console.log('Event is NOT trusted!');
  }
});

function simulateClick(){
  const clickEvent = new Event('click', { bubbles: true });
  buyBtn.dispatchEvent(clickEvent);
}

setTimeout(simulateClick, 2000);

// ----------------------------------------------------------------

const submitButton = document.getElementById('submit');
const resultContainer = document.querySelector('.result');
const resultQ1 = document.getElementById('result-q1').querySelector('span');
const resultQ2 = document.getElementById('result-q2').querySelector('span');

submitButton.addEventListener('click', function (e) {
  const q1Answer = document.querySelector('input[name="q1"]:checked');
  const q2Answer = document.querySelector('input[name="q2"]:checked');

  if (q1Answer && q2Answer) {
    resultQ1.textContent = q1Answer.value;
    resultQ2.textContent = q2Answer.value;

    resultContainer.style.display = 'block';
  } else {
    alert('Please, answer all questions!');
  }
});
