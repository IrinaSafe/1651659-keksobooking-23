import {AvatarImage, Lat, Lng, NUMBER_OF_DECIMAL, MaxPrice, RoomsCount, GuestsCount, TITLES_LENGTH, DESCRIPTIONS, FEATURES, TIME, PHOTO, typesPrice} from './components.js';
import {getRandomIntInclusive, getRandomCoordinates, getRandomElement} from './util.js';

const TITLES = new Array(TITLES_LENGTH).fill(null).map((item, index) => `Дом №${index + 1}`);

const typesKey = Object.keys(typesPrice);
const currentType = getRandomElement(typesKey);
const minPrice = typesPrice[currentType].minPrice;

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
      type: typesPrice[currentType].name,
      price: getRandomIntInclusive(minPrice, MaxPrice),
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

export {generateOffers, MaxPrice};
