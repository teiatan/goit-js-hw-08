// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector(`.gallery`);

const makeGalleryCard = ({original, preview, description}) => `
    <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
`;
const galleryItemsEl = galleryItems.map(makeGalleryCard);
galleryContainer.insertAdjacentHTML(`afterbegin`, galleryItemsEl.join(""));
new SimpleLightbox('.gallery__item', {
    captions: true,
    captionSelector: 'img',
    captionPosition: 'bottom',
    captionType: 'attr',
    captionsData: 'alt',
    captionDelay: 250,
    });
