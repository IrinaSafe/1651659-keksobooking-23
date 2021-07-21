import {addWindowsResult} from './util.js';
import {map, mapFiltersElements} from './map.js';

const templateSuccess = document.querySelector('#success').content.querySelector('.success');
const templateError = document.querySelector('#error').content.querySelector('.error');
const templateDataError = document.querySelector('#data-error').content.querySelector('.data-error');

const addWindowsOk = () => {
  const successMessage = templateSuccess.cloneNode(true);

  addWindowsResult(map, successMessage);
};

const addWindowsError = () => {
  const errorMessage = templateError.cloneNode(true);
  const closeErrorButton = errorMessage.querySelector('.error__button');

  addWindowsResult(map, errorMessage);

  closeErrorButton.addEventListener('click', () => {
    errorMessage.style.display = 'none';
  });
};

const addWindowErrorGetData = () => {
  const dataError = templateDataError.cloneNode(true);

  [...mapFiltersElements].forEach( (item) => {
    item.disabled = true;
  });

  addWindowsResult(map, dataError);
};

const adFormHeader = document.querySelector('.ad-form-header');
const templateFileError = document.querySelector('#type-error').content.querySelector('.type-error');

const addTypeFileError = () => {
  const fileError = templateFileError.cloneNode(true);
  addWindowsResult(adFormHeader, fileError);
};

export {addWindowsOk, addWindowsError, addWindowErrorGetData, addTypeFileError};
