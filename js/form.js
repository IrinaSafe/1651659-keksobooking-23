import {MaxPrice, typesPrice, LOADING_MODE, INTERACTIVE_MODE, DEFAULT_CAPACITY, DEFAULT_ROOM, TITLE_MIN_LENGTH, TITLE_MAX_LENGTH} from './components.js';

const map = document.querySelector('#map-canvas');
const adForm = document.querySelector('.ad-form');
const adFormElements = adForm.elements;
const mapFilters = document.querySelector('.map__filters');
const mapFiltersElements = mapFilters.elements;
const capacity = document.querySelector('#capacity');
const roomNumber = document.querySelector('#room_number');

const changeStatus = (boolean = true) => {
  [...adFormElements].forEach( (item) => {
    item.disabled = boolean;
  });

  [...mapFiltersElements].forEach( (item) => {
    item.disabled = boolean;
  });
};

if (document.readyState === LOADING_MODE || document.readyState === INTERACTIVE_MODE) {
  changeStatus();
  adForm.classList.toggle('ad-form--disabled', true);
  mapFilters.classList.toggle('map__filters--disabled', true);
}

window.onload = () => {
  changeStatus(false);
  adForm.classList.toggle('ad-form--disabled', false);
  mapFilters.classList.toggle('map__filters--disabled', false);
  capacity.value = DEFAULT_CAPACITY;
  roomNumber.value = DEFAULT_ROOM;
};

const title = document.querySelector('#title');
const type = document.querySelector('#type');
const price = document.querySelector('#price');
price.placeholder = typesPrice[type.value].minPrice;

type.addEventListener('change', (evt) => {
  price.placeholder = typesPrice[evt.target.value].minPrice;
});

const validationTitle = () => {
  const titleLength = title.value.length;

  if (titleLength < TITLE_MIN_LENGTH) {
    title.setCustomValidity(`Добавьте еще ${TITLE_MIN_LENGTH - titleLength} символов`);
  } else if (titleLength > TITLE_MAX_LENGTH) {
    title.setCustomValidity(`Удалите еще ${titleLength - TITLE_MAX_LENGTH} символов`);
  } else if (title.validity.valueMissing) {
    title.setCustomValidity('Введите заголовок');
  } else {
    title.setCustomValidity('');
  }

  title.reportValidity();
};

title.addEventListener('input', validationTitle);

const validationPrice = () => {
  const priceValue = price.value;

  if (priceValue < typesPrice[type.value].minPrice && priceValue !== '') {
    price.setCustomValidity(`Цена не может быть меньше ${typesPrice[type.value].minPrice}`);
  } else if (priceValue > MaxPrice) {
    price.setCustomValidity(`Цена не может быть больше ${MaxPrice}`);
  } else if (price.validity.valueMissing) {
    price.setCustomValidity('Введите цену');
  } else {
    price.setCustomValidity('');
  }

  price.reportValidity();
};

price.addEventListener('input', validationPrice);

const validationCapacity = (room, guest, container) => {
  if (room === '100' & guest !== '0') {
    container.setCustomValidity('Для 100 комнат подходит только вариант размещения "не для гостей"');
  } else if (guest === '0' & room !== '100') {
    container.setCustomValidity('Для варианта "не для гостей" подходит только 100 комнат');
  } else if (guest > room) {
    container.setCustomValidity('Гостей больше чем комнат');
  }  else {
    container.setCustomValidity('');
  }

  container.reportValidity();
};

roomNumber.addEventListener('change', (evt) => {
  validationCapacity(evt.target.value, capacity.value, roomNumber);
});

capacity.addEventListener('change', (evt) => {
  validationCapacity(roomNumber.value, evt.target.value, capacity);
});

export {map};
