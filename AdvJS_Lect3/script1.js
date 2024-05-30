'use strict';

// ----------------------------------------------------------------


let generateRandomNumber = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 10) + 1;
      if (randomNumber) {
        resolve(randomNumber);
      } else {
        reject('Error');
      }
    }, 1000); 
  });
};

generateRandomNumber()
  .then((number) => {
    console.log('Random number generated: ', number);
  })
  .catch((err) => {
    console.log('Error: ', err);
  });

// ----------------------------------------------------------------

let fetchData = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((err) => reject('Error!'));
  });
};

// https://api.thecatapi.com/v1/images/search     https://randombig.cat/roar.json
const container = document.querySelector('.container');
const img = document.createElement('img');
fetchData('https://api.thecatapi.com/v1/images/search')
  .then((data) => console.log('Data get: ', data))
  .catch((err) => console.log('Error: ', err));

fetchData('https://api.thecatapi.com/v1/images/search')
 .then((data) => {
    img.src = data[0].url;
    container.appendChild(img);
  })

// ----------------------------------------------------------------

let checkIfFileExists = (file) => {
};

let checkFileExists = (file) => {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      const fileExists = checkIfFileExists(file);
      if (fileExists) {
        resolve('File already exists')
      } else {
        reject('File does not exists');
      }
    }, 2000);
  });
};

checkFileExists('file321123.txt')
  .then((message) => {
    console.log(message);
  })
  .catch((err) => {
    console.log('Error: ', err);
  });

// ----------------------------------------------------------------

let divideNumbers = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (b === 0) {
        reject('Dividing by zero impossible!');
      } else {
        resolve(a / b);
      }
    });
  });
};

divideNumbers(10, 0)
 .then((result) => {
    console.log('Result: ', result);
  })
  .catch((err) => {
    console.log('Error: ', err);
  });

new Promise(function (resolve){
  setTimeout(() => resolve(10), 1000); 
}).then(function (result) {
  console.log(result);
  return new Promise((resolve) => {
    setTimeout(() => resolve(result * 2), 1000);
  });
}).then(function (result) {
    console.log(result);
    return new Promise((resolve) => {
      setTimeout(() => resolve(result * 2), 1000);
    });
}).then(function (result) {
  console.log(result);
});

// ----------------------------------------------------------------

let setCookie = (name, value, days) => {
  let expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + days);

  let cookieValue = encodeURIComponent(value) + '; expires=' + expirationDate.
  toUTCString();
  document.cookie = name + '=' +cookieValue;
};

setCookie('username', 'Mikail', 7);
setCookie('Patrik', 'Demon666', 7);
setCookie('lila', 'boobs', 14);

let getCookie = (name) => {
  let cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    let [cookieName, cookieValue] = cookie.trim().split('=');
    if (cookieName === name) {
      return decodeURIComponent(cookieValue);
    }
  }
  return null;
}

let username = getCookie('lila');
console.log('username: ', username);

let deleteCookie = (name) => {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
};

deleteCookie('lila');

// ----------------------------------------------------------------

// localStorage.setItem('username', 'John');

// let localUserName = localStorage.getItem('username');
// console.log('localUserName: ', localUserName);

// localStorage.removeItem('username');

// let localUserName2 = localStorage.getItem('username');
// console.log('localUserName: ', localUserName2);

// localStorage.clear();

// if (localStorage.getItem('counter')){
//   let counter = parseInt(localStorage.getItem('counter')) + 1;
//   localStorage.setItem('counter', counter.toString());
// } else {
//   localStorage.setItem('counter', '1');
// }

// console.log('///////Counter: ', localStorage.getItem('counter'));

// localStorage.clear();

// let counter = localStorage.getItem('counter') ? parseInt(localStorage.getItem('counter')) : 0;

// const updateCounter = () => {
//   counter++;
//   localStorage.setItem('counter', counter.toString());
// }

// document.querySelector('.counter').textContent = counter;

// document.querySelector('.increment').addEventListener('click', () => {
//   updateCounter();
//   document.querySelector('.counter').textContent = counter;
// }); 
localStorage.clear();


// ----------------------------------------------------------------

function* numberGenerator(){
  let num = 1

  while (true) {
    yield num;
    num++;
  }
}

const generator = numberGenerator();

console.log('GENERATOR: ', generator.next().value);
console.log('GENERATOR: ', generator.next().value);
console.log('GENERATOR: ', generator.next().value);
console.log('GENERATOR: ', generator.next().value);
console.log('GENERATOR: ', generator.next().value);




