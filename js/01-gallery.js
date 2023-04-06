import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}">
        </a>
      </li>`)
    .join('');
}

const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('afterbegin', galleryMarkup);

const onGalleryItemClick = (event) => {
  event.preventDefault();

  const clickedElement = event.target;
  if (!clickedElement.classList.contains('gallery__image')) {
    return;
  }

  const originalImageUrl = clickedElement.dataset.source;
  const imageAlt = clickedElement.getAttribute('alt');

  const instance = basicLightbox.create(`
    <img src="${originalImageUrl}" alt="${imageAlt}" width="800" height="600">
  `);

  instance.show();
};

galleryContainer.addEventListener('click', onGalleryItemClick);

console.log(galleryItems);
