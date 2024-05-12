// 'use strict'; 

// const sortSelect = document.querySelector('#sort-select');
// const productList = document.querySelector('#product-listt');
// const productItems = Array.from(document.querySelectorAll('.product-item'));

// sortSelect.onchange = function () {
//   const selectedOption = sortSelect.value;

//   if (selectedOption === 'T-shirts'){
//     productItems.forEach(element => {
//       if (element.textContent.split(' - ')[0] === 'T-shirt'){
//         element.classList.add('product-selected');
//       } else {
//         element.classList.remove('product-selected');
//       }  
//     });
//   } else if (selectedOption === 'Trouses'){
//     productItems.forEach(element => {
//       if (element.textContent.split(' - ')[0] === 'Trouses'){
//         element.classList.add('product-selected');
//       } else {
//         element.classList.remove('product-selected');
//       }
//     });
//   } else if (selectedOption === 'Jackets'){
//     productItems.forEach(element => {
//       if (element.textContent.split(' - ')[0] === 'Jacket'){
//         element.classList.add('product-selected');
//       } else {
//         element.classList.remove('product-selected');
//       }
//     });
//   }
// };

// const productData = [
//   {
//     id: 1,
//     name: 'Note',
//     category: 'Electronics',
//   },
//   {
//     id: 2,
//     name: 'Smartphone',
//     category: 'Electronics',
//   },
//   {
//     id: 3,
//     name: 'Refrigirator',
//     category: 'Technique',
//   },
//   {
//     id: 4,
//     name: 'T-shirt',
//     category: 'Clothes',
//   },
//   {
//     id: 5,
//     name: 'War and peace',
//     category: 'Books',
//   },
//   {
//     id: 6,
//     name: 'Desk',
//     category: 'Furniture',
//   }
// ]

// function displayProducts(category) {
//   productsList.innerHTML = '';

//   productData.forEach(product => {
//     if (category === '' || product.category === category) {
//       const listItem = document.createElement('li');
//       listItem.textContent = product.name;
//       productsList.append(listItem); 
//     }
//   })
// };

// categorySelect.addEventListener('change', function (e) {
//   const selectedCategory = categorySelect.value;
//   displayProducts(selectedCategory);
// });

// displayProducts('');


let page = 1;

async function fetchPhotos() {
  try {
    const response = await fetch(`https://api.unsplash.com/photos/?page=${page}&per_page=9&client_id=b2LuDxiLgT_jWn3xxLR5yfOR7OrhEGmggyC33rw5b3o`);
    const photos = await response.json();
    return photos;
  } catch (error) {
    console.error('Error while loading:', error);
    return [];
  }
}

async function loadMorePhotos() {
  const photos = await fetchPhotos();
  if (photos.length > 0){
    photos.forEach(photo => {
      const photoElement = document.createElement('div');
      photoElement.classList.add('photo');
      const img = document.createElement('img');
      img.src = photo.urls.small;
      img.alt = photo.alt_description;
      photoElement.append(img);
      photoContainer.append(photoElement);
    });
    page++;
  }
}

window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    loadMorePhotos();
  }
});

loadMorePhotos();
