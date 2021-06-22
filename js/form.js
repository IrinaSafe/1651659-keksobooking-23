const map = document.querySelector('#map-canvas');
const adForm = document.querySelector('.ad-form');
const adFormElements = adForm.elements;
const mapFilters = document.querySelector('.map__filters');
const mapFiltersElements = mapFilters.elements;
const LOADING_MODE = 'loading';
const INTERACTIVE_MODE = 'interactive';

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

window.onload = () => {
  changeStatus(false);
  adForm.classList.toggle('ad-form--disabled', false);
  mapFilters.classList.toggle('map__filters--disabled', false);
};

export {map};
