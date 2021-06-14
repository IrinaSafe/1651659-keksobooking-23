import {getRandomIntInclusive, getRandomCoordinates, getRandomElement} from './util.js';

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

const generateOffers = (quantityOffers) => new Array(quantityOffers).fill(null).map(generateObject);

export {generateOffers};
