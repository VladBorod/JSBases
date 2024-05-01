'use strict';

const taskInput = document.querySelector('.task-input');
const addButton = document.querySelector('.add-button');
const taskList = document.querySelector('.task-list');

if (localStorage.getItem('tasks')){
  taskList.innerHTML = localStorage.getItem('tasks');
}

addButton.addEventListener('click', () => {
  const taskDescription = taskInput.value;
  if (taskDescription !== '') {
    const listItem = document.createElement('li');
    listItem.classList.add('task-item');
    listItem.innerHTML = `
    <span class="task-description">${taskDescription}</span>
    <button class="delete-button">Delete</button>
    `;
    taskList.appendChild(listItem);
    taskInput.value = '';
    localStorage.setItem('tasks', taskList.innerHTML);
  }
});

taskList.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-button')) {
    // event.target.parentElement.remove();
    // localStorage.setItem('tasks', taskList.innerHTML);
    const listItem = event.target.closest('li');
    listItem.parentNode.removeChild(listItem);

    localStorage.setItem('tasks', taskList.innerHTML);
  }
});
    