import {renderTemplate} from './card.js';
import {
  typesPrice,
  LOADING_MODE,
  INTERACTIVE_MODE,
  defaultLat,
  defaultLng,
  DEFAULT_CAPACITY,
  DEFAULT_ROOM
} from './components.js';
import {capacity, roomNumber, type, price} from './form.js';

const mainPickIconSize = [52, 52];
const mainPickIconAnchor = [26, 52];
const markerIconSize = [40, 40];
const markerIconAnchor = [20, 40];
const adForm = document.querySelector('.ad-form');
const adFormElements = adForm.elements;
const mapFilters = document.querySelector('.map__filters');
const mapFiltersElements = mapFilters.elements;
const address = document.querySelector('#address');

const changeStatus = (boolean = true) => {
  [...adFormElements].forEach( (item) => {
    item.disabled = boolean;
  });

  [...mapFiltersElements].forEach( (item) => {
    item.disabled = boolean;
  });
};

if (document.readyState === LOADING_MODE || document.readyState === INTERACTIVE_MODE) {
  changeStatus(false);
  adForm.classList.toggle('ad-form--disabled', false);
  mapFilters.classList.toggle('map__filters--disabled', false);
}

const myMap = L.map('map-canvas')
  .on('load', () => {
    changeStatus(false);
    adForm.classList.toggle('ad-form--disabled', false);
    mapFilters.classList.toggle('map__filters--disabled', false);
    address.value = `${defaultLat}, ${defaultLng}`;
  })
  .setView({
    lat: defaultLat,
    lng: defaultLng,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(myMap);

const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: mainPickIconSize,
  iconAnchor: mainPickIconAnchor,
});

const mainPinMarker = L.marker(
  {
    lat: defaultLat,
    lng: defaultLng,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(myMap);

// const address = document.querySelector('#address');
// address.value = `${defaultLat}, ${defaultLng}`;

const markerGroup = L.layerGroup().addTo(myMap);

mainPinMarker.on('moveend', (evt) => {
  evt.target.getLatLng();
  address.value = `${mainPinMarker._latlng.lat.toFixed(4)}, ${mainPinMarker._latlng.lng.toFixed(3)}`;
});

const markerIcon = L.icon({
  iconUrl: '../img/pin.svg',
  iconSize: markerIconSize,
  iconAnchor: markerIconAnchor,
});

const addPoint = (point) => {
  const newMarkers = L.marker(
    {
      lat: point.locations.lat,
      lng: point.locations.lng,
    },
    {
      icon: markerIcon,
    },
  );

  newMarkers
    .addTo(markerGroup)
    .bindPopup(
      renderTemplate(point),
      {
        keepInView: true,
      },
    );
};

const addMarkers = (points) => {
  points.forEach((point) => {
    addPoint(point);
  });
};

const defaultSetting = () => {
  adForm.reset();
  mapFilters.reset();

  mainPinMarker.setLatLng({
    lat: defaultLat,
    lng: defaultLng,
  });

  myMap.setView({
    lat: defaultLat,
    lng: defaultLng,
  }, 10);

  markerGroup.clearLayers();

  address.value = `${defaultLat}, ${defaultLng}`;
  capacity.value = DEFAULT_CAPACITY;
  roomNumber.value = DEFAULT_ROOM;
  price.placeholder = typesPrice[type.value].minPrice;
};

const resetButton = document.querySelector('.ad-form__reset');

resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  defaultSetting();
});

export {addMarkers};
