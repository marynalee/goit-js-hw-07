import { galleryItems } from './gallery-items.js';


const galleryList = document.querySelector('.gallery');
const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

galleryList.innerHTML = galleryItemsMarkup;

function createGalleryItemsMarkup(items) {
    return items.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    }).join("");
}

galleryList.addEventListener('click', onImageGalleryClick);

function onImageGalleryClick(event) {
    blockDefaultLinkAction(event);
    
    if (event.target.nodeName !== 'IMG') {
        return;
    }

const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">`)

    instance.show();

    galleryList.addEventListener('keydown', (event) => {
        if (event.code === "Escape") {
            instance.close();
        }
    });
}

function blockDefaultLinkAction (event) {
    event.preventDefault();
}