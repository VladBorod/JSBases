'use strict';
// 1 ----------------------------------------------------------------

// window.addEventListener('resize', function () {
//   let wWidth = window.innerWidth;
//   let wHeigh = window.innerHeight;
//   console.log(wWidth, wHeigh);
// });

// const updateWindowSize = () => {
//   const widthEl = window.innerWidth;
//   const heighEl = window.innerHeight;

//   const windowSizeEl = document.querySelectorAll('.window-size');

//   // windowSizeEl.forEach(element => {
//   //   element.textContent = width;
//   // });

//   windowSizeEl[0].textContent = widthEl;
//   windowSizeEl[1].textContent = heighEl;

//   // width.textContent = widthEl;
//   // heigh.textContent = heighEl;
// }

// window.addEventListener('load', updateWindowSize);
// window.addEventListener('resize', updateWindowSize);

// 2 ----------------------------------------------------------------

// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault();
//   e.returnValue = 'Are you sure?';
// });

// 3 ----------------------------------------------------------------

// const backButton = document.querySelector('.backButton');
// const forwardButton = document.querySelector('.forwardButton');

// backButton.addEventListener('click', function () {
//   window.history.back();
// });

// forwardButton.addEventListener('click', function () {
//   window.history.forward();
// });

// 4 ----------------------------------------------------------------

// const bodyTask = document.querySelector('.task_for');
// const elementsList = document.querySelector('.elementsList');

// bodyTask.addEventListener('click', event => {
//   if (event.target.classList.contains('add-element')) {
//     const lastElement = elementsList.querySelector('.square:last-of-type');
//     const addedElement = lastElement.cloneNode(true);
//     let addedElementNumber = addedElement.querySelector('.square_text').textContent;
//     addedElementNumber++;
//     addedElement.querySelector('.square_text').textContent = addedElementNumber;
//     elementsList.appendChild(addedElement);
//   }
//   if (event.target.classList.contains('clone-element')) {
//     const lastElement = elementsList.querySelector('.square:last-of-type');
//     const clonedElement = lastElement.cloneNode(true);
//     lastElement.after(clonedElement);
//   }
//   if (event.target.classList.contains('delete-element')) {
//     let elementsValue = elementsList.children.length;
//     if (elementsValue > 1) {
//       const lastElement = elementsList.querySelector('.square:last-of-type');
//       elementsList.removeChild(lastElement);
//     } else {
//       alert('You can not delete last!');
//     }
//   }
//   if (event.target.classList.contains('clear-element')) {
//     while (elementsList.children.length > 1) {
//       elementsList.removeChild(elementsList.querySelector('.square:last-of-type'));
//     }
//   }
// });

// 5 ----------------------------------------------------------------

// JSON data

const articlesData = [
  {
    title: 'First Article',
    content: 'First article content',
  },
  {
    title: 'Second Article',
    content: 'Second article content',
  }
];

articlesData.forEach(element => {
  const articleItem = createArticle(element.title, element.content);
  articleList.append(articleItem);
});

function createArticle(title, content) {
  const articleItem = document.createElement('li');
  articleItem.classList.add('list-group-item');

  const articleTitle = document.createElement('h2');
  articleTitle.classList.add('mb-3');
  articleTitle.textContent = title;

  const articleContent = document.createElement('p');
  articleContent.textContent = content;

  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.classList.add('btn', 'btn-warning');

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('btn', 'btn-danger', 'pl-5');

  articleItem.append(articleTitle);
  articleItem.append(articleContent);
  articleItem.append(editButton);
  articleItem.append(deleteButton);

  return articleItem;
}

addArticleButton.addEventListener('click', function (e) {
  const newArticle = {
    title: 'New article',
    content: 'New article content',
  }

  const articleItem = createArticle(newArticle.title, newArticle.content);
  articleList.append(articleItem);
});

articleList.addEventListener('click', function (e) {
  if (e.target.textContent == 'Delete'){
    const articleItem = e.target.closest('li');
    articleItem.remove();
  }

  if (e.target.textContent == 'Edit') {
    const articleItem = e.target.closest('li');
    const articleTitle = articleItem.querySelector('h2'); 
    const tempTitle = articleTitle.textContent;
    const articleContent = articleItem.querySelector('p');
    const tempContent = articleContent.textContent;

    const newTitle = prompt('Enter new title', articleTitle.textContent);
    const newContent = prompt('Enter new content', articleContent.textContent);

    // if (newTitle !== null && newContent !== null) {
    //   articleTitle.textContent = newTitle;
    //   articleContent.textContent = newContent;
    // } else {
    //   alert('You did not enter anything');
    // }

    if (newTitle === null || newTitle === '' || newContent === null || newContent === '') {
      alert('You did not enter anything');
      articleTitle.textContent = tempTitle;
      articleContent.textContent = tempContent;
    } else {
      articleTitle.textContent = newTitle;
      articleContent.textContent = newContent;
    }



  }
});
