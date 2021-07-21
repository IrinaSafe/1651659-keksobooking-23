import {
  MaxPrice,
  typesPrice,
  TITLE_MIN_LENGTH,
  TITLE_MAX_LENGTH,
  DEFAULT_CAPACITY,
  DEFAULT_ROOM
} from './components.js';

const capacity = document.querySelector('#capacity');
capacity.value = DEFAULT_CAPACITY;
const roomNumber = document.querySelector('#room_number');
roomNumber.value = DEFAULT_ROOM;

const title = document.querySelector('#title');
const type = document.querySelector('#type');
const price = document.querySelector('#price');
price.placeholder = typesPrice[type.value].minPrice;

type.addEventListener('change', (evt) => {
  price.placeholder = typesPrice[evt.target.value].minPrice;
});

const checkValidationTitle = () => {
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

title.addEventListener('input', checkValidationTitle);

const checkValidationPrice = () => {
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

price.addEventListener('input', checkValidationPrice);
type.addEventListener('change', checkValidationPrice);

const checkValidationCapacity = (room, guest, container) => {
  if (room === '100' && guest !== '0') {
    container.setCustomValidity('Для 100 комнат подходит только вариант размещения "не для гостей"');
  } else if (guest === '0' && room !== '100') {
    container.setCustomValidity('Для варианта "не для гостей" подходит только 100 комнат');
  } else if (guest > room) {
    container.setCustomValidity('Гостей больше чем комнат');
  }  else {
    container.setCustomValidity('');
  }

  container.reportValidity();
};

roomNumber.addEventListener('change', (evt) => {
  checkValidationCapacity(evt.target.value, capacity.value, roomNumber);
});

capacity.addEventListener('change', (evt) => {
  checkValidationCapacity(roomNumber.value, evt.target.value, roomNumber);
});

const timein = document.querySelector('#timein');
const timeout = document.querySelector('#timeout');

timein.addEventListener('change', () => {
  timeout.value = timein.value;
});

timeout.addEventListener('change', () => {
  timein.value = timeout.value;
});

export {capacity, roomNumber, type, price};
