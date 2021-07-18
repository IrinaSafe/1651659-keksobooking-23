import {mapFilters, addMarkers, markerGroup} from './map.js';
import {filterPrices, RERENDER_DELAY} from './components.js';
import {debounce} from './utils/debounce.js';

const housingType = mapFilters.querySelector('#housing-type');
const housingPrice = mapFilters.querySelector('#housing-price');
const housingRooms = mapFilters.querySelector('#housing-rooms');
const housingGuests = mapFilters.querySelector('#housing-guests');
const housingFeatures = mapFilters.querySelector('#housing-features');
const featuresInput = [...housingFeatures.querySelectorAll('input')];

const sortFeautures = (item) => {
  const wifi = housingFeatures.querySelector('#filter-wifi');
  const dishwasher = housingFeatures.querySelector('#filter-dishwasher');
  const parking = housingFeatures.querySelector('#filter-parking');
  const washer = housingFeatures.querySelector('#filter-washer');
  const elevator = housingFeatures.querySelector('#filter-elevator');
  const conditioner = housingFeatures.querySelector('#filter-conditioner');

  let rank = 0;

  if (item) {
    for (let i = 0; i < item.length; i++) {
      if (item[i] === wifi.value | item[i] === conditioner.value) {
        rank += 4;
      }

      if (item[i] === parking.value) {
        rank += 3;
      }

      if (item[i] === elevator.value) {
        rank += 2;
      }

      if (item[i] === dishwasher.value | item[i] === washer.value) {
        rank += 1;
      }
    }

    return rank;
  }

  return rank;
};

const compareOffers = (firstOffer, secondOffer) => {
  const rankA = sortFeautures(firstOffer.offer.features);
  const rankB = sortFeautures(secondOffer.offer.features);

  return rankB - rankA;
};

const filtersType = (item) => {
  if (housingType.value === 'any') {
    return true;
  }

  return item.offer.type === housingType.value;
};

const filtersPrice = (item) => {
  if (housingPrice.value === 'any') {
    return true;
  }

  return item.offer.price >= filterPrices[housingPrice.value].MinPrice & item.offer.price <= filterPrices[housingPrice.value].MaxPrice;
};

const filtersRooms = (item) => {
  if (housingRooms.value === 'any') {
    return true;
  }

  return item.offer.rooms === parseFloat(housingRooms.value);
};

const filtersGuests = (item) => {
  if (housingGuests.value === 'any') {
    return true;
  }

  return item.offer.guests === parseFloat(housingGuests.value);
};

const filtersFeatures = (item) => {
  const features = item.offer.features;
  const featuresChecked = featuresInput.filter((input) => input.checked);

  return featuresChecked.every((feature) => features && features.includes(feature.value));
};

const getFilteredOffers = (array) => {
  mapFilters.addEventListener('change', debounce(() => {
    getFilteredOffers(array);
  }, RERENDER_DELAY));

  const offers = array
    .filter(filtersType)
    .filter(filtersPrice)
    .filter(filtersRooms)
    .filter(filtersGuests)
    .filter(filtersFeatures)
    .sort(compareOffers);

  markerGroup.clearLayers();
  addMarkers(offers);
};

export {getFilteredOffers};
