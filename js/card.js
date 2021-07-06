import {generateOffers} from './data.js';
import {NUMBERS_OF_OFFERS} from './components.js';

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

const createListItem = (content) => {
  const listItem = document.createElement('li');
  listItem.classList.add('popup__feature');
  listItem.classList.add(`popup__feature--${content}`);

  return listItem;
};

const createImage = (content) => {
  const image = document.createElement('img');
  image.src = content;
  image.classList.add('popup__photo');
  image.width = '45';
  image.height = '40';
  image.alt = 'Фотография жилья';

  return image;
};

const renderTemplate = (popupElement) => {
  const popup = templatePopup.cloneNode(true);

  popup.querySelector('.popup__avatar').src = popupElement.author.avatar;
  popup.querySelector('.popup__title').textContent = popupElement.offer.title;
  popup.querySelector('.popup__text--address').textContent = popupElement.offer.address;
  popup.querySelector('.popup__type').textContent = popupElement.offer.type;
  popup.querySelector('.popup__text--price').textContent = `${popupElement.offer.price} ${priceDescription.textContent}`;
  popup.querySelector('.popup__text--capacity').textContent = `${popupElement.offer.rooms} комнаты для ${popupElement.offer.guests} гостей`;
  popup.querySelector('.popup__text--time').textContent = `Заезд после ${popupElement.offer.checkin}, выезд до ${popupElement.offer.checkout}`;

  const popupFeatures = popup.querySelector('.popup__features');
  clearContent(popupFeatures);
  popupFeatures.append(createListItem(popupElement.offer.features));

  const description = popup.querySelector('.popup__description');
  setTextContent(popupElement.offer.description, description);

  const popupPhotos = popup.querySelector('.popup__photos');
  clearContent(popupPhotos);
  popupPhotos.append(createImage(popupElement.offer.photo));

  return popup;
};


const offers = generateOffers(NUMBERS_OF_OFFERS);

const bindPopup = offers.slice(0, 10);

export {renderTemplate, bindPopup};

