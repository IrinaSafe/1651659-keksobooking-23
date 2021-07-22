import {adForm} from './map.js';
import {getFilteredOffers} from './filters.js';
import {setDefaultSetting} from './reset-form.js';
import {SERVER_DATA, SERVER_POST, SERVER_POST_METOD} from './components.js';
import {addWindowsOk, addWindowsError, addWindowErrorGetData} from './messages.js';

const getServerData = () =>
  fetch(SERVER_DATA)
    .then((response) => {
      if (response.ok) {
        return response;
      } else {
        throw new Error (`${response.status}: ${response.statusText}`);
      }
    });


const pushServerData = (formData) =>
  fetch(SERVER_POST,
    {
      method: SERVER_POST_METOD,
      body: formData,
    })
    .then((response) => {
      if (response.ok) {
        addWindowsOk();
        return response;
      }

      throw new Error (`${response.status}: ${response.statusText}`);
    });

getServerData()
  .then((response) => response.json())
  .then(getFilteredOffers)
  .catch(addWindowErrorGetData);

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const formData = new FormData(evt.target);

  pushServerData(formData)
    .then(setDefaultSetting)
    .catch(addWindowsError);
});

export {addWindowsError};
