/**
 * Функция, возвращающая случайное целое число из переданного диапазона включительно.
 * @param {number} min - минимальное значение диапазона
 * @param {number} max - максимальное значение диапазона
 * @return {number} случайное целое число из выбранного диапазона
 */
const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (min < 0) {
    return undefined;
  }

  if (min >= max) {
    const newMax = min;
    min = max;
    max = newMax;
  }

  const resultCords = Math.random() * (max - min + 1);

  return Math.floor(resultCords) + min;
};

/**
 * Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
 * @param {number} min - минимальное значение диапазона
 * @param {number} max - максимальное значение диапазона
 * @return {number} случайное число с плавающей точкой из выбранного диапазона
 */
const getRandomCoordinates = (min, max, numberOfDecimal) => {
  if (min < 0) {
    return undefined;
  }

  if (min >= max) {
    const newMax = min;
    min = max;
    max = newMax;
  }

  const resultCords = (Math.random() * (max - min + 1) + min).toFixed(numberOfDecimal);

  return parseFloat(resultCords);
};

const AVATAR_IMG_MIN = 1;
const AVATAR_IMG_MAX = 10;
const LAT_MIN = 35.65000;
const LAT_MAX = 35.70000;
const LNG_MIN = 139.70000;
const LNG_MAX = 139.80000;
const NUMBER_OF_DECIMAL = 5;
const PRICE_MIN = 1000;
const PRICE_MAX = 10000;
const ROOMS_MIN = 1;
const ROOMS_MAX = 4;
const GUESTS_MIN = 1;
const GUESTS_MAX = 8;

const TITELS = [
  'Дом №1',
  'Дом №2',
  'Дом №3',
  'Дом №4',
  'Дом №5',
  'Дом №6',
  'Дом №7',
  'Дом №8',
  'Дом №9',
  'Дом №10',
];

const DESCRIPTIONS = [
  'Дом у моря',
  'Дом у озера',
  'Дом с бассейном',
];

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const TIME = [
  '12:00',
  '13:00',
  '14:00',
];

const PHOTO =[
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

/**
 * Функция возвращает рандомный индекс массива
 * @param {element} ключ из объекта
 * @returns индекс
 */
const getRandomIndexElement = (element) => getRandomIntInclusive(0, element.length - 1);

/**
 * Функция возвращает элемент, соответствующий полученному рандомному индексу
 * @param {element} ключ из объекта
 * @returns элемент, соответствующий рандомному индексу
 */
const getRandomElement = (element) => element[getRandomIndexElement(element)];

const generateObject = () => {
  const lat = getRandomCoordinates(LAT_MIN, LAT_MAX, NUMBER_OF_DECIMAL);
  const lng = getRandomCoordinates(LNG_MIN, LNG_MAX, NUMBER_OF_DECIMAL);

  return {
    author: {
      avatar: `img/avatars/user0${getRandomIntInclusive(AVATAR_IMG_MIN, AVATAR_IMG_MAX)}.png`,
    },
    offer: {
      title: getRandomElement(TITELS),
      address: [lat, lng].join(', '),
      price: getRandomIntInclusive(PRICE_MIN, PRICE_MAX),
      type: getRandomElement(TYPES),
      rooms: getRandomIntInclusive(ROOMS_MIN, ROOMS_MAX),
      guests: getRandomIntInclusive(GUESTS_MIN, GUESTS_MAX),
      checkin: getRandomElement(TIME),
      checkout: getRandomElement(TIME),
      features: getRandomElement(FEATURES),
      description: getRandomElement(DESCRIPTIONS),
      photo: getRandomElement(PHOTO),
    },
    locations: {
      lat: lat,
      lng: lng,
    },
  };
};

const generateOffers = new Array(10).fill(null).map(() => generateObject());
// eslint-disable-next-line no-console
console.log(generateOffers);
