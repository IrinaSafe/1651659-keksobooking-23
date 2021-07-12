import {checkStatus, addWindowsResult} from './util.js';
import {addMarkers, map, adForm, setDefaultSetting} from './map.js';

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

  addWindowsResult(map, dataError);
};

fetch('https://23.javascript.pages.academy/keksobooking/data')
  .then(checkStatus)
  .then((response) => response.json())
  .then(addMarkers)
  .catch(addWindowErrorGetData);

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const formData = new FormData(evt.target);

  fetch('https://23.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body: formData,
    },
  )
    .then(checkStatus)
    .then(setDefaultSetting)
    .then(addWindowsOk)
    .catch(addWindowsError);
});
