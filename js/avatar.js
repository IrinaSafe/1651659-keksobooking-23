import {FILE_TYPES, PreviewImageSizes} from './components.js';
import {resetPrewiew} from './util.js';
import {addTypeFileError} from './messages.js';

const avatarFile = document.querySelector('.ad-form__field input[type=file]');
const avatarPreview = document.querySelector('.ad-form-header__preview img');

const photoFile = document.querySelector('.ad-form__upload input[type=file]');
const photoContainer = document.querySelector('.ad-form__photo');

const getPrewiew = (input, prewiew) => {
  const file = input.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      prewiew.src = reader.result;
    });

    reader.readAsDataURL(file);
  } else {
    addTypeFileError();
    resetPrewiew(input, prewiew);
  }
};

const createImage = (element) => {
  const image = document.createElement('img');

  image.width = PreviewImageSizes.WIDTH;
  image.height =  PreviewImageSizes.HEIGHT;
  image.src = 'img/muffin-grey.svg';
  image.alt = 'Фото жилья';

  element.append(image);

  return image;
};

avatarFile.addEventListener('change', () => getPrewiew(avatarFile, avatarPreview));

const photoPreview = createImage(photoContainer);

photoFile.addEventListener('change', () => {
  getPrewiew(photoFile, photoPreview);
});

export {photoFile, avatarFile, avatarPreview, photoPreview};
