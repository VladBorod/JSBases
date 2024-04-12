'use strict';

const mainDataContainer = document.querySelector('div.container');
const listBody = document.querySelector('ul.list');
const getData = async () => {
  try {
    const result = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await result.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

const fetchData = await getData();

fetchData.forEach((item) => { 
  const liEl = document.createElement('li');
  liEl.classList.add('person__item');

  const id = document.createElement('p');
  const name = document.createElement('p');
  const userName = document.createElement('p');
  const email = document.createElement('p');

  id.textContent = item.id;
  id.classList.add('person__id');
  name.textContent = item.name;
  name.classList.add('person__name');
  userName.textContent = item.username;
  userName.classList.add('person__username');
  email.textContent = item.email;
  email.classList.add('person__email');
  liEl.appendChild(id);
  liEl.appendChild(name);
  liEl.appendChild(userName);
  liEl.appendChild(email);

  listBody.appendChild(liEl);
});

const localStorageData = localStorage.setItem('personalData', JSON.stringify(fetchData));

const personIDToDelete = Number(prompt('Enter user ID to delete'));

const personDeleter = (userID, data) => {
  data.forEach(element => {
    if (element.id === userID){
      data.splice(data.indexOf(element), 1);
      localStorage.setItem('personalData', JSON.stringify(data));
      console.log(data);
      return data;
    } 
  });
};

const personHTMLDeleter = (userID) => {
  const ulArr = document.querySelectorAll('ul.list li');
  ulArr.forEach(element => {
    const testedElement = element.querySelector('p.person__id')
    if (parseInt(testedElement.innerHTML) === userID){
      element.classList.add('person__invisible');
    };
  });
};

personDeleter(personIDToDelete, fetchData);
personHTMLDeleter(personIDToDelete);

