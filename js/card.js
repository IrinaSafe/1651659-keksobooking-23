const templatePopup = document.querySelector('#card').content.querySelector('.popup');
const popup = templatePopup.cloneNode(true);

const priceDescription = document.createElement('span');
priceDescription.textContent = '₽/ночь';

const types = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель',
};

const clearContent = (element) => element.innerHTML = '';

const popupFeatures = popup.querySelector('.popup__features');
const popupPhotos = popup.querySelector('.popup__photos');
const description = popup.querySelector('.popup__description');

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

const renderTemplate = (image, content) => {
  popup.querySelector('.popup__avatar').src = image.avatar;
  popup.querySelector('.popup__title').textContent = content.title;
  popup.querySelector('.popup__text--address').textContent = content.address;
  popup.querySelector('.popup__type').textContent = types[content.type];
  popup.querySelector('.popup__text--price').textContent = `${content.price} ${priceDescription.textContent}`;
  popup.querySelector('.popup__text--capacity').textContent = `${content.rooms} комнаты для ${content.guests} гостей`;
  popup.querySelector('.popup__text--time').textContent = `Заезд после ${content.checkin}, выезд до ${content.checkout}`;

  clearContent(popupFeatures);
  popupFeatures.append(createListItem(content.features));

  setTextContent(content.description, description);

  clearContent(popupPhotos);
  popupPhotos.append(createImage(content.photo));
};

const addElement = (element, image, content) => {
  element.appendChild(popup);
  renderTemplate(image, content);
};

export {addElement};

