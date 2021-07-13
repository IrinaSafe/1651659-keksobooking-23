import {generateOffers} from './data.js';
import {NUMBERS_OF_OFFERS, typesPrice, IMAGE_WIDTH, IMAGE_HEIGHT} from './components.js';

const templatePopup = document.querySelector('#card').content.querySelector('.popup');

const priceDescription = document.createElement('span');
priceDescription.textContent = '₽/ночь';

const clearContent = (element) => element.innerHTML = '';

const setTextContent = (content, element) => {
  if (content) {
    element.textContent = content;
    return;
  }

  element.style.display = 'none';
  element.textContent = '';
};

const addItem = (content, element) => {
  if (content) {
    content.map((item, index) => {
      const listItem = document.createElement('li');
      listItem.classList.add('popup__feature');
      listItem.classList.add(`popup__feature--${content[index]}`);
      element.append(listItem);
    });
    return;
  }

  element.style.display = 'none';
};

const addImage = (images, element) => {
  if (images) {
    images.forEach((item, index) => {
      const image = document.createElement('img');

      image.src = images[index];
      image.classList.add('popup__photo');
      image.width = IMAGE_WIDTH;
      image.height =  IMAGE_HEIGHT;
      image.alt = 'Фотография жилья';

      element.append(image);
    });

    return images.map;
  }

  element.style.display = 'none';
};

const renderTemplate = (popupElement) => {
  const popup = templatePopup.cloneNode(true);

  popup.querySelector('.popup__avatar').src = popupElement.author.avatar;
  popup.querySelector('.popup__title').textContent = popupElement.offer.title;
  popup.querySelector('.popup__text--address').textContent = popupElement.offer.address;
  popup.querySelector('.popup__type').textContent = typesPrice[popupElement.offer.type].name;
  popup.querySelector('.popup__text--price').textContent = `${popupElement.offer.price} ${priceDescription.textContent}`;
  popup.querySelector('.popup__text--capacity').textContent = `${popupElement.offer.rooms} комнаты для ${popupElement.offer.guests} гостей`;
  popup.querySelector('.popup__text--time').textContent = `Заезд после ${popupElement.offer.checkin}, выезд до ${popupElement.offer.checkout}`;

  const popupFeatures = popup.querySelector('.popup__features');
  clearContent(popupFeatures);
  addItem(popupElement.offer.features, popupFeatures);

  const description = popup.querySelector('.popup__description');
  setTextContent(popupElement.offer.description, description);

  const popupPhotos = popup.querySelector('.popup__photos');
  clearContent(popupPhotos);
  addImage(popupElement.offer.photos, popupPhotos);

  return popup;
};


const offers = generateOffers(NUMBERS_OF_OFFERS);

const bindPopup = offers.slice(0, NUMBERS_OF_OFFERS);

export {renderTemplate, bindPopup};

