// 'use strict'; 

let page = 1;

async function fetchPhotos() {
  try {
    const response = await fetch(`https://api.unsplash.com/photos/random/?page=${page}&per_page=9&client_id=b2LuDxiLgT_jWn3xxLR5yfOR7OrhEGmggyC33rw5b3o`);
    const photos = await response.json();
    return photos;
  } catch (error) {
    console.error('Error while loading:', error);
    return [];
  }
}

async function loadMorePhotos() {
  const photos = await fetchPhotos();
  const photoElement = document.createElement('div');
  photoElement.classList.add('photo');
  const img = document.createElement('img');
  const description = document.createElement('div');
  img.src = photos.urls.regular;
  img.alt = photos.alt_description;
  description.classList.add('description');
  description.innerHTML = 'Autor name: ' + photos.user.name;
  const likeButton = document.createElement('button');
  likeButton.classList.add('like_button');
  likeButton.innerHTML = '0';
  photoElement.append(img);
  photoElement.append(likeButton);
  photoElement.append(description);
  photoContainer.append(photoElement);
  page++;
}

document.addEventListener('click', function (e) {
  if (e.target.classList.contains('like_button')) {
    e.preventDefault();
    let count = parseInt(e.target.innerHTML);
    count++;
    e.target.innerHTML = count;
  }
});

loadMorePhotos();
