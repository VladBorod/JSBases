'use strict';

const dogUrl = 'https://dog.ceo/api/breeds/image/random';

const container = document.querySelector('div.container');

const dogData = async () => {
  try {
    const result = await fetch(dogUrl);
    const data = await result.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

const renderDogImage = async () => {
    const myDogsData = await dogData();
    const imgEl = document.createElement('img');
    imgEl.src = myDogsData.message;
    imgEl.classList.add('dog-image');
    container.appendChild(imgEl);

    setTimeout(renderDogImage, 3000);
};

renderDogImage();



