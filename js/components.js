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

const TIME_OPTIONS = [
  '12:00',
  '13:00',
  '14:00',
];

const PHOTOS =[
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const PRICE_MEASUREMENT =  '₽/ночь';

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
const IMAGE_WIDTH = 45;
const IMAGE_HEIGHT = 40;
const MAP_ZOOM = 13;

const DEFAULT_COORDS = {
  lat: 35.6895,
  lng: 139.692,
};

const filterPrices = {
  low: {
    minPrice: 0,
    maxPrice: 9999,
  },

  middle: {
    minPrice: 10000,
    maxPrice: 50000,
  },

  high: {
    minPrice: 50000,
    maxPrice: Infinity,
  },
};

const RERENDER_DELAY = 500;

const PointsSliceIndex = {
  BEGIN: 0,
  END: 10,
};

const RankValue = {
  HIGH: 4,
  MIDDLE: 3,
  LOW: 1,
};

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const PreviewImageSizes = {
  WIDTH: 70,
  HEIGHT: 70,
};

const DEFAULT_IMAGE = 'img/muffin-grey.svg';

const SERVER_DATA = 'https://23.javascript.pages.academy/keksobooking/data';
const SERVER_POST = 'https://23.javascript.pages.academy/keksobooking';
const SERVER_POST_METOD = 'POST';

export {AvatarImage, Lat, Lng, NUMBER_OF_DECIMAL, MaxPrice, PRICE_MEASUREMENT, RoomsCount, GuestsCount, TITLES_LENGTH, DESCRIPTIONS, FEATURES, TIME_OPTIONS, PHOTOS, typesPrice, NUMBERS_OF_OFFERS, LOADING_MODE, INTERACTIVE_MODE, DEFAULT_CAPACITY, DEFAULT_ROOM, TITLE_MIN_LENGTH, TITLE_MAX_LENGTH, MAP_ZOOM, DEFAULT_COORDS, IMAGE_WIDTH, IMAGE_HEIGHT, filterPrices, RERENDER_DELAY, PointsSliceIndex, RankValue, FILE_TYPES, PreviewImageSizes,  DEFAULT_IMAGE, SERVER_DATA, SERVER_POST, SERVER_POST_METOD};
