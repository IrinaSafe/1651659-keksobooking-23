const templatePopup = document.querySelector('#card').content.querySelector('.popup');
const popup = templatePopup.cloneNode(true);
const map = document.querySelector('#map-canvas');

const priceDescription = document.createElement('span');
priceDescription.textContent = '₽/ночь';

const TYPES = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель',
};

const popupFeatures = popup.querySelector('.popup__features');
popupFeatures.innerHTML = '';

const popupPhotos = popup.querySelector('.popup__photos');
popupPhotos.innerHTML = '';

const generateCard = (data) => {
  popup.querySelector('.popup__title').textContent = data.offer.title;
  popup.querySelector('.popup__text--address').textContent = data.offer.address;
  popup.querySelector('.popup__text--price').textContent = `${data.offer.price} ${priceDescription.textContent}`;
  popup.querySelector('.popup__type').textContent = TYPES[data.offer.type];
  popup.querySelector('.popup__text--capacity').textContent = `${data.offer.rooms} комнаты для ${data.offer.guests} гостей`;
  popup.querySelector('.popup__text--time').textContent = `Заезд после ${data.offer.checkin}, выезд до ${data.offer.checkout}`;
  popupFeatures.insertAdjacentHTML('beforeend', `<li class="popup__feature popup__feature--${data.offer.features}"></li>`);
  popup.querySelector('.popup__description').textContent = data.offer.description;
  popupPhotos.insertAdjacentHTML('beforeend', `<img src="${data.offer.photo}" class="popup__photo" width="45" height="40" alt="Фотография жилья">`);
  popup.querySelector('.popup__avatar').src = data.author.avatar;
  // eslint-disable-next-line no-constant-condition
  popup.querySelector('.popup__description').textContent = '' ? popup.querySelector('.popup__description').style.display = 'none' : popup.querySelector('.popup__description').textContent;
  map.appendChild(popup);
};

export {generateCard};

