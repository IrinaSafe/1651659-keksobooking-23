import {generateOffers} from './data.js';
import {addElement} from './card.js';
import './form.js';

const NUMBERS_OF_OFFERS = 10;

const offers = generateOffers(NUMBERS_OF_OFFERS);
const firstOffer = offers[0];
const {author, offer} = firstOffer;

const map = document.querySelector('#map-canvas');

addElement(map, author, offer);
