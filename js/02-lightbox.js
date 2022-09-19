import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');
const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

galleryList.innerHTML = galleryItemsMarkup;

function createGalleryItemsMarkup(items) {
    return items.map(({ preview, original, description }) => {
        return `<li class="gallery__item"><a href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a></li>`;
    }).join("");
}

    const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: "alt",
  captionDelay: 250,
  overlayOpacity: 0.8,
});
