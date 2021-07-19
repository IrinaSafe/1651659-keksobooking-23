import {renderTemplate} from './card.js';
import {
  typesPrice,
  LOADING_MODE,
  INTERACTIVE_MODE,
  MAP_ZOOM,
  DEFAULT_CAPACITY,
  DEFAULT_ROOM,
  DEFAULT_COORDS,
  PointsSliceIndex
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
const map = document.querySelector('.map__canvas');

const changeStatus = (boolean = true) => {
  [...adFormElements].forEach( (item) => {
    item.disabled = boolean;
  });

  [...mapFiltersElements].forEach( (item) => {
    item.disabled = boolean;
  });
};

if (document.readyState === LOADING_MODE || document.readyState === INTERACTIVE_MODE) {
  changeStatus();
  adForm.classList.toggle('ad-form--disabled', true);
  mapFilters.classList.toggle('map__filters--disabled', true);
}

const myMap = L.map(map)
  .on('load', () => {
    changeStatus(false);
    adForm.classList.toggle('ad-form--disabled', false);
    mapFilters.classList.toggle('map__filters--disabled', false);
    address.value = `${DEFAULT_COORDS.lat}, ${DEFAULT_COORDS.lng}`;
  })
  .setView(
    {...DEFAULT_COORDS},
    MAP_ZOOM,
  );

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(myMap);

const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: mainPickIconSize,
  iconAnchor: mainPickIconAnchor,
});

const mainPinMarker = L.marker(
  {...DEFAULT_COORDS},
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(myMap);

const markerGroup = L.layerGroup().addTo(myMap);

mainPinMarker.on('moveend', (evt) => {
  evt.target.getLatLng();
  address.value = `${mainPinMarker._latlng.lat.toFixed(4)}, ${mainPinMarker._latlng.lng.toFixed(3)}`;
});

const markerIcon = L.icon({
  iconUrl: 'img/pin.svg',
  iconSize: markerIconSize,
  iconAnchor: markerIconAnchor,
});

const addPoint = (point) => {
  const newMarkers = L.marker(
    {...point.location},
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
  points.slice(PointsSliceIndex.BEGIN, PointsSliceIndex.END).forEach(addPoint);
};

const setDefaultSetting = () => {
  adForm.reset();
  mapFilters.reset();

  mainPinMarker.setLatLng({...DEFAULT_COORDS});

  myMap.setView (
    {...DEFAULT_COORDS},
    MAP_ZOOM,
  );

  markerGroup.clearLayers();

  address.value = `${DEFAULT_COORDS.lat}, ${DEFAULT_COORDS.lng}`;
  capacity.value = DEFAULT_CAPACITY;
  roomNumber.value = DEFAULT_ROOM;
  price.placeholder = typesPrice[type.value].minPrice;
};

const onResetHandler = (evt) => {
  evt.preventDefault();
  setDefaultSetting();
};

const resetButton = document.querySelector('.ad-form__reset');

resetButton.addEventListener('click', onResetHandler);

export {addMarkers, map, adForm, setDefaultSetting, mapFilters, markerGroup, mapFiltersElements};
