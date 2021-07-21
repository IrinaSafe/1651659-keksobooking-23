import {adForm, mapFilters, mainPinMarker, myMap, address} from './map.js';
import {capacity, roomNumber, price, type} from './validation.js';
import {photoFile, avatarFile, avatarPreview, photoPreview} from './avatar.js';
import {resetPrewiew} from './util.js';
import {DEFAULT_COORDS, MAP_ZOOM, DEFAULT_CAPACITY, DEFAULT_ROOM, typesPrice} from './components.js';

const resetButton = document.querySelector('.ad-form__reset');

const setDefaultSetting = () => {
  adForm.reset();
  mapFilters.reset();
  resetPrewiew(photoFile, photoPreview);
  resetPrewiew(avatarFile, avatarPreview);

  mainPinMarker.setLatLng({...DEFAULT_COORDS});

  myMap.setView (
    {...DEFAULT_COORDS},
    MAP_ZOOM,
  );

  address.value = `${DEFAULT_COORDS.lat}, ${DEFAULT_COORDS.lng}`;
  capacity.value = DEFAULT_CAPACITY;
  roomNumber.value = DEFAULT_ROOM;
  price.placeholder = typesPrice[type.value].minPrice;
};

const resetHandler = (evt) => {
  evt.preventDefault();
  setDefaultSetting();
};

resetButton.addEventListener('click', resetHandler);

export {setDefaultSetting};
