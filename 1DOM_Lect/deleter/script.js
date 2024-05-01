'use strict';

const taskList = document.getElementById('taskList');
const clearEl = document.querySelector('.clear');

taskList.addEventListener('click', event => {
  if (event.target.classList.contains('delete-button')) {
    const taskItem = event.target.closest('li');
    taskItem.remove();

    // localStorage.setItem('taskList', JSON.stringify(task
    localStorage.setItem('taskList', taskList.innerHTML);
  }

  if (event.target.classList.contains('clone-button')){
    const taskItem = event.target.closest('li');
    const clonedTaskItem = taskItem.cloneNode(true);
    taskItem.after(clonedTaskItem);
    
    localStorage.setItem('taskList', taskList.innerHTML);
  }
});

if (localStorage.getItem('taskList')){
  taskList.innerHTML = localStorage.getItem('taskList');
}

clearEl.addEventListener('click', function (e) {
  localStorage.clear(e);
});

localStorage.clear();