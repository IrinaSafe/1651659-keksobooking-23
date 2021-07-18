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

const MaxPrice = 1000000;

const RoomsCount = {
  MIN: 1,
  MAX: 4,
};

const GuestsCount = {
  MIN: 1,
  MAX: 8,
};

const TITLES_LENGTH = 10;

const DESCRIPTIONS = [
  'Дом у моря',
  'Дом у озера',
  'Дом с бассейном',
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

const typesPrice = {
  palace: {
    name: 'Дворец',
    minPrice: 10000,
  },
  flat: {
    name: 'Квартира',
    minPrice: 1000,
  },
  house: {
    name: 'Дом',
    minPrice: 5000,
  },
  bungalow: {
    name: 'Бунгало',
    minPrice: 0,
  },
  hotel: {
    name: 'Отель',
    minPrice: 3000,
  },
};

const NUMBERS_OF_OFFERS = 10;
const LOADING_MODE = 'loading';
const INTERACTIVE_MODE = 'interactive';
const DEFAULT_CAPACITY = '1';
const DEFAULT_ROOM = '1';
const TITLE_MIN_LENGTH = 30;
const TITLE_MAX_LENGTH = 100;
const IMAGE_WIDTH = '45';
const IMAGE_HEIGHT = '40';
const MAP_ZOOM = 13;

const DEFAULT_COORDS = {
  lat: 35.6895,
  lng: 139.692,
};

const filterPrices = {
  low: {
    MinPrice: 0,
    MaxPrice: 9999,
  },

  middle: {
    MinPrice: 10000,
    MaxPrice: 50000,
  },

  high: {
    MinPrice: 50000,
    MaxPrice: Infinity,
  },
};

const RERENDER_DELAY = 500;

export {AvatarImage, Lat, Lng, NUMBER_OF_DECIMAL, MaxPrice, RoomsCount, GuestsCount, TITLES_LENGTH, DESCRIPTIONS, FEATURES, TIME, PHOTO, typesPrice, NUMBERS_OF_OFFERS, LOADING_MODE, INTERACTIVE_MODE, DEFAULT_CAPACITY, DEFAULT_ROOM, TITLE_MIN_LENGTH, TITLE_MAX_LENGTH, MAP_ZOOM, DEFAULT_COORDS, IMAGE_WIDTH, IMAGE_HEIGHT, filterPrices, RERENDER_DELAY};
