'use strict';

const productList = [];

const container = document.querySelector('.container');

const productContainer = document.createElement('div');
const instructionText = document.createElement('h1');
instructionText.innerHTML = 'Enter your product';
const inputProduct = document.createElement('input');
const addProductButton = document.createElement('button');
addProductButton.innerHTML = 'Add your product';

container.appendChild(productContainer);
productContainer.appendChild(instructionText);
productContainer.appendChild(inputProduct);
productContainer.appendChild(addProductButton);

const downloadAll = () => {
  let countMain = parseInt(localStorage.length);
  for (let i = 0; i < countMain; i++){
    let item = localStorage.getItem(i);
    if (item){
      const productMenu = document.createElement('div');
      const productText = document.createElement('h2');
      productText.classList.add('.product_text');
      productText.innerHTML = item;
      productList.push(item);
      productContainer.appendChild(productMenu);
      productMenu.appendChild(productText);
    }
  } 
  return null;
}

// const downloadAll = () => {
//   let countMain = parseInt(localStorage.length);
//   for (let i = 0; i < countMain; i++){
//     let item = localStorage.getItem(i);
//     if (item){
//       const productMenu = document.createElement('div');
//       const productText = document.createElement('h2');
//       productText.classList.add('.product_text');
//       productText.innerHTML = item;
//       productList.push(item);
//       productContainer.appendChild(productMenu);
//       productMenu.appendChild(productText);
//       for (let key in localStorage){
//         if (isNaN(key)){
//           const reviewText = document.createElement('p');
//           reviewText.innerHTML = localStorage.getItem(key);
//           const reviewRemoveButton = document.createElement('button');
//           reviewRemoveButton.classList.add('.remove_review');
//           reviewRemoveButton.innerHTML = 'Delete'
//           productText.appendChild(reviewText);
//           productText.appendChild(reviewRemoveButton);
//         }
//       }
//     }
//   } 
//   return null;
// }

downloadAll();

addProductButton.addEventListener('click', () => {
  if (productList.includes(inputProduct.value)){
    alert('This product is already in the list');
  } else if (localStorage.length > 0){
    const productMenu = document.createElement('div');
    const productText = document.createElement('h2');
    productText.classList.add('.product_text');
    productText.innerHTML = inputProduct.value;
    productList.push(inputProduct.value);
    productContainer.appendChild(productMenu);
    productMenu.appendChild(productText);
    
    let countUnderZero = localStorage.length;
    localStorage.setItem(countUnderZero, inputProduct.value);
    countUnderZero++;
  } else if (localStorage.length === 0){
    const productMenu = document.createElement('div');
    const productText = document.createElement('h2');
    productText.classList.add('.product_text');
    productText.innerHTML = inputProduct.value;
    productList.push(inputProduct.value);
    productContainer.appendChild(productMenu);
    productMenu.appendChild(productText);
    
    const countZero = 0;
    localStorage.setItem(countZero, inputProduct.value);
  }
  console.log(productList);
});

document.addEventListener('click', function (e) {
  if (e.target.classList.contains('.product_text')){
    const reviewContainer = document.createElement('div');
    const reviewInput = document.createElement('input');
    const reviewAddButton = document.createElement('button');
    reviewAddButton.classList.add('.add_review');
    reviewAddButton.innerHTML = 'Add your review'

    e.target.appendChild(reviewContainer);
    reviewContainer.appendChild(reviewInput);
    reviewContainer.appendChild(reviewAddButton);
  }
});

document.addEventListener('click', function (e) {
  if (e.target.classList.contains('.add_review')){
    e.preventDefault();
    const reviewText = document.createElement('p');
    reviewText.innerHTML = e.target.previousElementSibling.value;
    const reviewRemoveButton = document.createElement('button');
    reviewRemoveButton.classList.add('.remove_review');
    reviewRemoveButton.innerHTML = 'Delete'
    e.target.parentElement.appendChild(reviewText);
    e.target.parentElement.appendChild(reviewRemoveButton);

    let tempArr = e.target.parentElement.parentElement.textContent.split('Add your review');
    
    console.log(tempArr[0]);
    let temp = tempArr[0] + ':REV:' + reviewText.innerHTML 
    localStorage.setItem(temp, reviewText.innerHTML);
  }
});

document.addEventListener('click', function (e) {
  if (e.target.classList.contains('.remove_review')){
    e.preventDefault();
    const pattern = ':'
    let keyIndex = e.target.parentElement.parentElement.textContent.split('Add your review');
    let temp = e.target.previousElementSibling.textContent;
    console.log(keyIndex[0], temp);
    
    let newTemp = temp.split(pattern);

    e.target.parentElement.remove();
    console.log(localStorage.removeItem(keyIndex[0] + ':REV:' + newTemp));
  }
});

// localStorage.clear();













