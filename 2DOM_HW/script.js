'use strict';

const img1Url = 'https://avatars.mds.yandex.net/i?id=7e0352d7172da987873e9584f8fb6bfce7c25f85-12475369-images-thumbs&n=13'
const img2Url = 'https://avatars.mds.yandex.net/i?id=c7e3fb24d123178ac400309bec3bbd7950491b55-12421159-images-thumbs&n=13'
const img3Url = 'https://avatars.mds.yandex.net/i?id=9d858e66d7611da89ac7b8144442781f6cb57ded-12749638-images-thumbs&n=13'
const img4Url = 'https://avatars.mds.yandex.net/i?id=da60c3fc5df986391200d6f942c777fd4ca37205-12484816-images-thumbs&n=13'
const img5Url = 'https://avatars.mds.yandex.net/i?id=408463eab13fae9a01740b08b1caf948fbe0e172-11044949-images-thumbs&n=13'

const imgArray = [img1Url, img2Url, img3Url, img4Url, img5Url];

const container = document.querySelector('.container');

const iterableBtnElBack = container.querySelector('.iterable__btn_back');
const iterableBtnElFront = container.querySelector('.iterable__btn_front');

const imgContEl = container.querySelector('.img__cont');

const imgEl = imgContEl.querySelector('.img');
imgEl.src = imgArray[0];
let imgIndex = 0;

const nav = document.querySelector('.nav');

iterableBtnElFront.addEventListener('click', function (e) { 
  if (imgArray.length - 1 === imgIndex) {
    imgIndex = 0;
    imgEl.src = imgArray[imgIndex];
  } else{
    imgIndex++;
    imgEl.src = imgArray[imgIndex];
  }
});

iterableBtnElBack.addEventListener('click', function (e) { 
  if (imgIndex === 0) {
    imgIndex = imgArray.length - 1;
    imgEl.src = imgArray[imgIndex];
  } else {
    imgIndex--;
    imgEl.src = imgArray[imgIndex];
  }
});

imgArray.forEach(element => {
  const imgBtnEl = document.createElement('button');
  const imgInBtnEl = document.createElement('img');
  imgBtnEl.classList.add('nav__btn');
  imgInBtnEl.classList.add('nav__btn_img');
  imgInBtnEl.src = element;
  imgBtnEl.appendChild(imgInBtnEl);
  nav.appendChild(imgBtnEl);
});

const imgBtnElements = document.querySelectorAll('.nav__btn');
console.log(imgBtnElements);
nav.addEventListener('click', function (e) {
  if (e.target.classList.contains('nav__btn_img')) {
    e.preventDefault();
    console.log(e.target);
    imgEl.src = e.target.src;
  }
});

