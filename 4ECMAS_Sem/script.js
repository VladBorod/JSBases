'use strict';

// const myPromis = new Promise((resolve, reject) => {

// });
// console.log(myPromis);

// myPromis.then(res => res.json()).then(data => console.log(data)).catch(err => console.log(err));

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => {
//         console.log(response)
//         return response.json()
//       })
//       .then(json => console.log(json))
//       .catch(err => console.log('Error!'))


// const getData = async () => {
//   try {
//     const result = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     const data = await result.json();
//     return data;
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// const fetchData = await getData();
// console.log(fetchData);


// lwAzagEvbubVPHBrj93KnGLociuRkIdp430hIumC    --- token

const token = 'lwAzagEvbubVPHBrj93KnGLociuRkIdp430hIumC';
const url = 'https://api.nasa.gov/planetary/apod?api_key=' + token + '&count=10';

const getData = async () => {
  try {
    const result = await fetch(url);
    const data = await result.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

const res = await getData(url);
console.log(res);

const body = document.querySelector('body');
res.forEach(element => {
  body.insertAdjacentHTML('beforeend', `<figure>
<img src="${element.url}" alt="space" />
<figcaption>${element.explanation}</figcaption>
</figure>`);
});
