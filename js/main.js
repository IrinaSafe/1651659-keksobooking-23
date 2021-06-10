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

const AvatarImage = {
  MIN: 1,
  MAX: 10,
};

const Lat = {
  MIN: 35.65000,
  MAX: 35.70000,
};

const Lng = {
  MIN: 139.70000,
  MAX: 139.80000,
};

const NUMBER_OF_DECIMAL = 5;

const Price = {
  MIN: 1000,
  MAX: 10000,
};

const RoomsCount = {
  MIN: 1,
  MAX: 4,
};

const GuestsCount = {
  MIN: 1,
  MAX: 8,
};

const NUMBERS_OF_OFFERS = 10;
const TITLES_LENGTH = 10;

const TITLES = new Array(TITLES_LENGTH).fill(null).map((item, index) => `Дом №${index + 1}`);

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

const generateObject = (item, index) => {
  const lat = getRandomCoordinates(Lat.MIN, Lat.MAX, NUMBER_OF_DECIMAL);
  const lng = getRandomCoordinates(Lng.MIN, Lng.MAX, NUMBER_OF_DECIMAL);

  return {
    author: {
      avatar: `img/avatars/user0${getRandomIntInclusive(AvatarImage.MIN, AvatarImage.MAX)}.png`,
    },
    offer: {
      title: TITLES[index],
      address: `${lat}, ${lng}`,
      price: getRandomIntInclusive(Price.MIN, Price.MAX),
      type: getRandomElement(TYPES),
      rooms: getRandomIntInclusive(RoomsCount.MIN, RoomsCount.MAX),
      guests: getRandomIntInclusive(GuestsCount.MIN, GuestsCount.MAX),
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

const generateOffers = new Array(NUMBERS_OF_OFFERS).fill(null).map(generateObject);
generateOffers();
