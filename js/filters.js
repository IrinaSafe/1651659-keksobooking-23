import {mapFilters, addMarkers, markerGroup} from './map.js';
import {filterPrices, RERENDER_DELAY, RankValue} from './components.js';
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
    item.forEach((elem) => {
      if (elem === wifi.value | elem === conditioner.value) {

        return rank += RankValue.HIGH;
      }

      if (elem === parking.value | elem === elevator.value) {
        return rank += RankValue.MIDDLE;
      }

      if (elem === dishwasher.value | elem === washer.value) {
        return rank += RankValue.LOW;
      }

      return rank;
    });
  }
};

const compareOffers = (firstOffer, secondOffer) => {
  const rankA = sortFeautures(firstOffer.offer.features);
  const rankB = sortFeautures(secondOffer.offer.features);

  return rankB - rankA;
};

const filtersType = (item) => housingType.value === 'any' || item.offer.type === housingType.value;

const filtersPrice = (item) => housingPrice.value === 'any' || item.offer.price >= filterPrices[housingPrice.value].minPrice & item.offer.price <= filterPrices[housingPrice.value].maxPrice;

const filtersRooms = (item) => housingRooms.value === 'any' || item.offer.rooms === parseFloat(housingRooms.value);

const filtersGuests = (item) => housingGuests.value === 'any' || item.offer.guests === parseFloat(housingGuests.value);

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
