const map = document.querySelector('#map-canvas');
const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const mapFiltersSelect = mapFilters.querySelectorAll('select');
const mapFiltersFieldset = mapFilters.querySelector('fieldset');
const adFormFieldsets = adForm.querySelectorAll('fieldset');

const preLoading = (boolean) => {
  map.style.backgroundColor = '#dddddd';

  mapFiltersFieldset.disabled = boolean;

  adFormFieldsets.forEach( (item) => {
    item.disabled = boolean;
  });

  mapFiltersSelect.forEach( (item) => {
    item.disabled = boolean;
  });
};


if (document.readyState === 'loading' || document.readyState === 'interactive') {
  preLoading(true);
  adForm.classList.add('ad-form--disabled');
  mapFilters.classList.add('.map__filters--disabled');
}

window.onload = () => {
  preLoading(false);
  adForm.classList.remove('ad-form--disabled');
  mapFilters.classList.remove('.map__filters--disabled');
};
